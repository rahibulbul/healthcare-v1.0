import { database } from "../../../lib/firebaseConfig"; // Adjust the path based on your project structure
import { getDatabase, ref, set, get, query, orderByChild, equalTo, onValue, update, remove } from "firebase/database";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";

export const fetchDummyChartData = async () => {
    try {
        const chartDataRef = ref(database, "dummyData");
        const snapshot = await get(chartDataRef);

        if (snapshot.exists()) {
            return snapshot.val();
        } else {
            console.log("No data available");
            return null;
        }
    } catch (error) {
        console.error("Error fetching data:", error);
        throw error;
    }
};

export const fetchDummyEvents = (setEvents, showToast) => {
    const eventsRef = ref(database, "dummyData/dummyevents");
    const unsubscribe = onValue(
        eventsRef,
        (snapshot) => {
            const data = snapshot.val();
            if (data) {
                const eventsArray = Object.entries(data).flatMap(
                    ([parentKey, value]) =>
                        Object.entries(value).map(([id, dummyevents]) => ({
                            parentKey,
                            id,
                            ...dummyevents,
                        }))
                );
                setEvents(eventsArray);
            } else {
                setEvents([]);
            }
        },
        (error) => {
            showToast("error", "Failed to fetch events.");
        }
    );

    return unsubscribe;
};

import { auth, database } from "../lib/firebaseConfig";
import { getDatabase, ref, set, get, query, orderByChild, equalTo, onValue, update, remove } from "firebase/database";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";

// Check username is taken or not
export const checkUsernameAvailability = async (username) => {
  const userTypes = ["patients", "doctors", "agents", "employees"];
  let isTaken = false;

  for (const type of userTypes) {
    const usernameQuery = query(
      ref(database, type),
      orderByChild("username"),
      equalTo(username)
    );
    const snapshot = await get(usernameQuery);
    if (snapshot.exists()) {
      isTaken = true;
      return isTaken;
    }
  }
};

export const registerUser = async (userData, userType, year, month, userPrefix) => {
  const userCountRef = ref(
    database,
    `user_counts/${year}${month}${userPrefix}`
  );

  const countSnapshot = await get(userCountRef);
  let count = 1;

  if (countSnapshot.exists()) {
    count = countSnapshot.val() + 1;
  }

  const userId = `${year}${month}${userPrefix}${count.toString().padStart(2, "0")}`;

  await set(ref(database, `${userType}s/` + userId), userData);
  await set(userCountRef, count);

  return userId;
};

export const login = async (username, password) => {
  const db = getDatabase();
  const userTypes = ["patients", "doctors", "agents", "employees"];
  let userData = null;

  try {
    for (const userType of userTypes) {
      const userQuery = query(ref(db, userType), orderByChild("username"), equalTo(username));
      const snapshot = await get(userQuery);

      if (snapshot.exists()) {
        let foundUser = null;

        snapshot.forEach((childSnapshot) => {
          const data = childSnapshot.val();
          if (data.password === password) {
            foundUser = { ...data, userType, id: childSnapshot.key };
          }
        });

        if (foundUser) {
          userData = foundUser;
          break;
        }
      }
    }

    if (userData) {
      return { success: true, data: userData };
    } else {
      return { success: false, message: "Incorrect username or password." };
    }
  } catch (error) {
    console.error("Error during login:", error.message);
    return { success: false, message: "Login failed due to an error." };
  }
};


export const fetchUsername = async (showToast) => {
  const userData = JSON.parse(sessionStorage.getItem("userData"));
  if (!userData || !userData.userType || !userData.id) {
    showToast("error", "User not logged in or user data is missing.");
    return null;
  }

  return new Promise((resolve) => {
    const userRef = ref(database, `${userData.userType}/${userData.id}`);
    onValue(
      userRef,
      (snapshot) => {
        const data = snapshot.val();
        if (data && data.fullName) {
          resolve(data.fullName);
        } else {
          showToast("error", "Failed to fetch user full name.");
          resolve(null);
        }
      },
      (error) => {
        showToast("error", "Error fetching user data.");
        resolve(null);
      }
    );
  });
};

// Fetch dummy notifications from the database
export const fetchDummyNotifications = (setNotifications, showToast) => {
  const notificationsRef = ref(database, "dummyData/dummynotifications");
  const unsubscribe = onValue(
    notificationsRef,
    (snapshot) => {
      const data = snapshot.val();
      if (data) {
        const notificationsArray = Object.entries(data).flatMap(
          ([parentKey, value]) =>
            Object.entries(value).map(([id, notification]) => ({
              parentKey,
              id,
              ...notification,
            }))
        );
        setNotifications(notificationsArray);
      } else {
        setNotifications([]);
      }
    },
    (error) => {
      showToast("error", "Failed to fetch notifications.");
    }
  );

  return unsubscribe;
};

export const eraseNotification = (
  parentKey,
  id,
  setNotifications,
  showToast, // Ensure showToast is passed here
  setActiveContextMenu
) => {
  const notificationRef = ref(database, `dummyData/dummynotifications/${parentKey}/${id}`);

  remove(notificationRef)
    .then(() => {
      showToast("success", "Notification removed successfully."); // Make sure showToast is called properly here
      setNotifications((prevNotifications) =>
        prevNotifications.filter(
          (notification) =>
            notification.parentKey !== parentKey || notification.id !== id
        )
      );
      setActiveContextMenu(null);
    })
    .catch((error) => {
      showToast("error", `Error erasing: ${error.message}`); // Error handling with showToast
    });
};

export const markReadNotification = (
  parentKey,
  id,
  notifications,
  setNotifications,
  showToast, // Ensure showToast is passed here
  setActiveContextMenu
) => {
  const notification = notifications.find(
    (notif) => notif.parentKey === parentKey && notif.id === id
  );

  if (notification.isRead === "yes") {
    showToast("warning", "This notification is already marked as read.");
    setActiveContextMenu(null);
    return;
  }

  const notificationRef = ref(database, `dummyData/dummynotifications/${parentKey}/${id}`);
  update(notificationRef, { isRead: "yes" })
    .then(() => {
      showToast("success", "Notification successfully marked as read.");
      setNotifications((prevNotifications) =>
        prevNotifications.map((notification) =>
          notification.parentKey === parentKey && notification.id === id
            ? { ...notification, isRead: "yes" }
            : notification
        )
      );
      setActiveContextMenu(null);
    })
    .catch((error) => {
      showToast("error", `Error marking as read: ${error.message}`); // Error handling with showToast
    });
};
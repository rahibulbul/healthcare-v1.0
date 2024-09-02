const { ref, get, update } = require("firebase/database");
const { database } = require("../lib/firebaseConfig"); // Adjust the path if necessary

const updateUserType = async () => {
  const usersRef = ref(database, "users");

  const snapshot = await get(usersRef);
  if (snapshot.exists()) {
    const users = snapshot.val();
    const updates = {};

    for (const userId in users) {
      // Set default userType to "normal" for example
      updates[`/users/${userId}/userType`] = "normal";
    }

    // Perform the updates
    await update(usersRef, updates);
    console.log("User types updated successfully.");
  } else {
    console.log("No users found.");
  }
};

updateUserType();

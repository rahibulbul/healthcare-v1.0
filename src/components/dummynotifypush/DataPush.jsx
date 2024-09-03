import { database } from "../../lib/firebaseConfig"; // Adjust the path to your firebase.js
import { ref, set } from "firebase/database";

// Dummy notifications data
const dummyNotifications = [
  [
    {
      title: "Got a new mail",
      body: "You have received a new mail from the HR department.",
      date: "2024-09-03",
      time: "08:30 AM",
      isRead: "no",
    },
    {
      title: "New message",
      body: "Your manager has sent you a new message regarding your project.",
      date: "2024-09-03",
      time: "09:15 AM",
      isRead: "yes",
    },
    {
      title: "New work assigned",
      body: "You have been assigned a new task in the project management system.",
      date: "2024-09-03",
      time: "10:00 AM",
      isRead: "no",
    },
    {
      title: "New schedule available",
      body: "Your work schedule for the next week has been updated.",
      date: "2024-09-03",
      time: "11:00 AM",
      isRead: "yes",
    },
    {
      title: "Got a new mail",
      body: "A new mail has been sent to you by the IT support team.",
      date: "2024-09-02",
      time: "01:30 PM",
      isRead: "no",
    },
    {
      title: "New message",
      body: "Reminder: Your monthly report is due tomorrow.",
      date: "2024-09-02",
      time: "02:45 PM",
      isRead: "yes",
    },
    {
      title: "New work assigned",
      body: "Please review the latest changes in the codebase.",
      date: "2024-09-02",
      time: "03:00 PM",
      isRead: "no",
    },
    {
      title: "Got a new mail",
      body: "Your leave request has been approved.",
      date: "2024-09-02",
      time: "04:15 PM",
      isRead: "yes",
    },
    {
      title: "New message",
      body: "Team meeting rescheduled to tomorrow at 10:00 AM.",
      date: "2024-09-01",
      time: "09:00 AM",
      isRead: "no",
    },
    {
      title: "New work assigned",
      body: "Finish the report by end of day.",
      date: "2024-09-01",
      time: "10:30 AM",
      isRead: "yes",
    },
    {
      title: "New schedule available",
      body: "Your meeting schedule for today has been updated.",
      date: "2024-09-01",
      time: "11:00 AM",
      isRead: "no",
    },
    {
      title: "Got a new mail",
      body: "Your performance review is scheduled for next week.",
      date: "2024-09-01",
      time: "12:45 PM",
      isRead: "yes",
    },
    {
      title: "New message",
      body: "Don't forget to submit your timesheet by Friday.",
      date: "2024-08-31",
      time: "08:00 AM",
      isRead: "no",
    },
    {
      title: "Got a new mail",
      body: "Your system will be updated tonight.",
      date: "2024-08-31",
      time: "09:15 AM",
      isRead: "yes",
    },
    {
      title: "New work assigned",
      body: "Update the client on the project status.",
      date: "2024-08-31",
      time: "10:45 AM",
      isRead: "no",
    },
    {
      title: "New schedule available",
      body: "New team meeting scheduled for Thursday.",
      date: "2024-08-31",
      time: "11:30 AM",
      isRead: "yes",
    },
    {
      title: "New message",
      body: "Client feedback received, please review.",
      date: "2024-08-30",
      time: "02:00 PM",
      isRead: "no",
    },
    {
      title: "Got a new mail",
      body: "Your travel itinerary has been confirmed.",
      date: "2024-08-30",
      time: "03:15 PM",
      isRead: "yes",
    },
    {
      title: "New work assigned",
      body: "Prepare for the client presentation on Friday.",
      date: "2024-08-30",
      time: "04:00 PM",
      isRead: "no",
    },
    {
      title: "Got a new mail",
      body: "Team building event scheduled for next month.",
      date: "2024-08-30",
      time: "05:00 PM",
      isRead: "yes",
    },
    {
      title: "New message",
      body: "Project deadline extended by one week.",
      date: "2024-08-29",
      time: "08:00 AM",
      isRead: "no",
    },
    {
      title: "New work assigned",
      body: "Complete the budget report by tomorrow.",
      date: "2024-08-29",
      time: "09:30 AM",
      isRead: "yes",
    },
    {
      title: "Got a new mail",
      body: "Security update required, please restart your system.",
      date: "2024-08-29",
      time: "10:45 AM",
      isRead: "no",
    },
    {
      title: "New schedule available",
      body: "Your quarterly review is next week.",
      date: "2024-08-29",
      time: "11:30 AM",
      isRead: "yes",
    },
    {
      title: "New message",
      body: "Reminder: Complete your training by the end of the month.",
      date: "2024-08-28",
      time: "01:00 PM",
      isRead: "no",
    },
    {
      title: "Got a new mail",
      body: "Project kickoff meeting set for Monday.",
      date: "2024-08-28",
      time: "02:15 PM",
      isRead: "yes",
    },
    {
      title: "New work assigned",
      body: "Follow up with the client on the project scope.",
      date: "2024-08-28",
      time: "03:00 PM",
      isRead: "no",
    },
  ],
];

// Function to push data to Firebase Realtime Database
const pushNotificationsToFirebase = () => {
  const notificationsRef = ref(database, "dummynotifications"); // Reference to the table

  dummyNotifications.forEach((notification, index) => {
    const newNotificationRef = ref(database, `dummynotifications/${index}`);
    set(newNotificationRef, notification)
      .then(() => {
        console.log(`Notification ${index + 1} added successfully`);
      })
      .catch((error) => {
        console.error("Error adding notification:", error);
      });
  });
};

export default pushNotificationsToFirebase;

// import { initializeApp } from "firebase/app";
// import { getDatabase, ref, update, remove } from "firebase/database";

// const firebaseConfig = {
//   apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
//   authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
//   databaseURL: process.env.REACT_APP_FIREBASE_DATABASE_URL,
//   projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
//   storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
//   messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
//   appId: process.env.REACT_APP_FIREBASE_APP_ID,
//   measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID,
// };

// const app = initializeApp(firebaseConfig);
// const database = getDatabase(app);

// // Test updating
// const testUpdate = () => {
//   const testRef = ref(database, "dummynotifications/0/0");
//   update(testRef, { isRead: true })
//     .then(() => console.log("Update successful"))
//     .catch((error) => console.error("Update failed:", error));
// };

// // Test removing
// const testRemove = () => {
//   const testRef = ref(database, "dummynotifications/0/0");
//   remove(testRef)
//     .then(() => console.log("Remove successful"))
//     .catch((error) => console.error("Remove failed:", error));
// };

// testUpdate();
// testRemove();

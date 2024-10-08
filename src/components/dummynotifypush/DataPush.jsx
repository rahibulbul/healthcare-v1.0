import { database } from "../../lib/firebaseConfig"; // Assumes you have firebaseConfig correctly set up
import { ref, set } from "firebase/database";

const getRandomIncome = (min, max) => {
  const isNegative = Math.random() < 0.2;
  const randomValue = Math.floor(Math.random() * (max - min + 1)) + min;
  return isNegative ? -randomValue : randomValue;
};

function generatePhoneNumber() {
  const randomDigits = Math.floor(10000000 + Math.random() * 90000000);
  return `074${randomDigits}`;
}

// Your chart objects (chartNetIncome, chartNetUser, chartNetInsurance, etc.)


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

const chartNetIncome = {
  icon: "ph-wallet",
  title: "Net Income",
  dataKey: "income",
  color: "#6193ff",
  viewAll: "All Income",
  timeline: {
    weekly: [
      { name: "Sun", income: getRandomIncome(300, 700) },
      { name: "Mon", income: getRandomIncome(300, 700) },
      { name: "Tue", income: getRandomIncome(300, 700) },
      { name: "Wed", income: getRandomIncome(300, 700) },
      { name: "Thu", income: getRandomIncome(300, 700) },
      { name: "Fri", income: getRandomIncome(300, 700) },
      { name: "Sat", income: getRandomIncome(300, 700) },
    ],
    monthly: [
      { name: "Jan", income: getRandomIncome(2000, 4000) },
      { name: "Feb", income: getRandomIncome(2000, 4000) },
      { name: "Mar", income: getRandomIncome(2000, 4000) },
      { name: "Apr", income: getRandomIncome(2000, 4000) },
      { name: "May", income: getRandomIncome(2000, 4000) },
      { name: "Jun", income: getRandomIncome(2000, 4000) },
      { name: "Jul", income: getRandomIncome(2000, 4000) },
      { name: "Aug", income: getRandomIncome(2000, 4000) },
      { name: "Sep", income: getRandomIncome(2000, 4000) },
      { name: "Oct", income: getRandomIncome(2000, 4000) },
      { name: "Nov", income: getRandomIncome(2000, 4000) },
      { name: "Dec", income: getRandomIncome(2000, 4000) },
    ],
    yearly: [
      { name: "2014", income: getRandomIncome(30000, 50000) },
      { name: "2015", income: getRandomIncome(30000, 50000) },
      { name: "2016", income: getRandomIncome(30000, 50000) },
      { name: "2017", income: getRandomIncome(30000, 50000) },
      { name: "2018", income: getRandomIncome(30000, 50000) },
      { name: "2019", income: getRandomIncome(30000, 50000) },
      { name: "2020", income: getRandomIncome(30000, 50000) },
      { name: "2021", income: getRandomIncome(30000, 50000) },
      { name: "2022", income: getRandomIncome(30000, 50000) },
      { name: "2023", income: getRandomIncome(30000, 50000) },
    ],
  },
};

const chartNetUser = {
  icon: "ph-users",
  title: "All Users",
  dataKey: "users",
  color: "#e99b26",
  viewAll: "All Users",
  timeline: {
    weekly: [
      { name: "Sun", users: getRandomIncome(300, 700) },
      { name: "Mon", users: getRandomIncome(300, 700) },
      { name: "Tue", users: getRandomIncome(300, 700) },
      { name: "Wed", users: getRandomIncome(300, 700) },
      { name: "Thu", users: getRandomIncome(300, 700) },
      { name: "Fri", users: getRandomIncome(300, 700) },
      { name: "Sat", users: getRandomIncome(300, 700) },
    ],
    monthly: [
      { name: "Jan", users: getRandomIncome(2000, 4000) },
      { name: "Feb", users: getRandomIncome(2000, 4000) },
      { name: "Mar", users: getRandomIncome(2000, 4000) },
      { name: "Apr", users: getRandomIncome(2000, 4000) },
      { name: "May", users: getRandomIncome(2000, 4000) },
      { name: "Jun", users: getRandomIncome(2000, 4000) },
      { name: "Jul", users: getRandomIncome(2000, 4000) },
      { name: "Aug", users: getRandomIncome(2000, 4000) },
      { name: "Sep", users: getRandomIncome(2000, 4000) },
      { name: "Oct", users: getRandomIncome(2000, 4000) },
      { name: "Nov", users: getRandomIncome(2000, 4000) },
      { name: "Dec", users: getRandomIncome(2000, 4000) },
    ],
    yearly: [
      { name: "2014", users: getRandomIncome(30000, 50000) },
      { name: "2015", users: getRandomIncome(30000, 50000) },
      { name: "2016", users: getRandomIncome(30000, 50000) },
      { name: "2017", users: getRandomIncome(30000, 50000) },
      { name: "2018", users: getRandomIncome(30000, 50000) },
      { name: "2019", users: getRandomIncome(30000, 50000) },
      { name: "2020", users: getRandomIncome(30000, 50000) },
      { name: "2021", users: getRandomIncome(30000, 50000) },
      { name: "2022", users: getRandomIncome(30000, 50000) },
      { name: "2023", users: getRandomIncome(30000, 50000) },
    ],
  },
};

const chartNetInsurance = {
  icon: "ph-umbrella",
  title: "Net Insurance",
  dataKey: "insurance",
  color: "#4bb592",
  viewAll: "All insurance",
  timeline: {
    weekly: [
      { name: "Sun", insurance: getRandomIncome(300, 700) },
      { name: "Mon", insurance: getRandomIncome(300, 700) },
      { name: "Tue", insurance: getRandomIncome(300, 700) },
      { name: "Wed", insurance: getRandomIncome(300, 700) },
      { name: "Thu", insurance: getRandomIncome(300, 700) },
      { name: "Fri", insurance: getRandomIncome(300, 700) },
      { name: "Sat", insurance: getRandomIncome(300, 700) },
    ],
    monthly: [
      { name: "Jan", insurance: getRandomIncome(2000, 4000) },
      { name: "Feb", insurance: getRandomIncome(2000, 4000) },
      { name: "Mar", insurance: getRandomIncome(2000, 4000) },
      { name: "Apr", insurance: getRandomIncome(2000, 4000) },
      { name: "May", insurance: getRandomIncome(2000, 4000) },
      { name: "Jun", insurance: getRandomIncome(2000, 4000) },
      { name: "Jul", insurance: getRandomIncome(2000, 4000) },
      { name: "Aug", insurance: getRandomIncome(2000, 4000) },
      { name: "Sep", insurance: getRandomIncome(2000, 4000) },
      { name: "Oct", insurance: getRandomIncome(2000, 4000) },
      { name: "Nov", insurance: getRandomIncome(2000, 4000) },
      { name: "Dec", insurance: getRandomIncome(2000, 4000) },
    ],
    yearly: [
      { name: "2014", insurance: getRandomIncome(30000, 50000) },
      { name: "2015", insurance: getRandomIncome(30000, 50000) },
      { name: "2016", insurance: getRandomIncome(30000, 50000) },
      { name: "2017", insurance: getRandomIncome(30000, 50000) },
      { name: "2018", insurance: getRandomIncome(30000, 50000) },
      { name: "2019", insurance: getRandomIncome(30000, 50000) },
      { name: "2020", insurance: getRandomIncome(30000, 50000) },
      { name: "2021", insurance: getRandomIncome(30000, 50000) },
      { name: "2022", insurance: getRandomIncome(30000, 50000) },
      { name: "2023", insurance: getRandomIncome(30000, 50000) },
    ],
  },
};

const chartNetExpense = {
  icon: "ph-clipboard-text",
  title: "Net Expense",
  dataKey: "expense",
  color: "#FFBB28",
  viewAll: "All expense",
  timeline: {
    weekly: [
      { name: "Sun", expense: getRandomIncome(300, 700) },
      { name: "Mon", expense: getRandomIncome(300, 700) },
      { name: "Tue", expense: getRandomIncome(300, 700) },
      { name: "Wed", expense: getRandomIncome(300, 700) },
      { name: "Thu", expense: getRandomIncome(300, 700) },
      { name: "Fri", expense: getRandomIncome(300, 700) },
      { name: "Sat", expense: getRandomIncome(300, 700) },
    ],
    monthly: [
      { name: "Jan", expense: getRandomIncome(2000, 4000) },
      { name: "Feb", expense: getRandomIncome(2000, 4000) },
      { name: "Mar", expense: getRandomIncome(2000, 4000) },
      { name: "Apr", expense: getRandomIncome(2000, 4000) },
      { name: "May", expense: getRandomIncome(2000, 4000) },
      { name: "Jun", expense: getRandomIncome(2000, 4000) },
      { name: "Jul", expense: getRandomIncome(2000, 4000) },
      { name: "Aug", expense: getRandomIncome(2000, 4000) },
      { name: "Sep", expense: getRandomIncome(2000, 4000) },
      { name: "Oct", expense: getRandomIncome(2000, 4000) },
      { name: "Nov", expense: getRandomIncome(2000, 4000) },
      { name: "Dec", expense: getRandomIncome(2000, 4000) },
    ],
    yearly: [
      { name: "2014", expense: getRandomIncome(30000, 50000) },
      { name: "2015", expense: getRandomIncome(30000, 50000) },
      { name: "2016", expense: getRandomIncome(30000, 50000) },
      { name: "2017", expense: getRandomIncome(30000, 50000) },
      { name: "2018", expense: getRandomIncome(30000, 50000) },
      { name: "2019", expense: getRandomIncome(30000, 50000) },
      { name: "2020", expense: getRandomIncome(30000, 50000) },
      { name: "2021", expense: getRandomIncome(30000, 50000) },
      { name: "2022", expense: getRandomIncome(30000, 50000) },
      { name: "2023", expense: getRandomIncome(30000, 50000) },
    ],
  },
};

const AreaChartRepeatCustomer = {
  icon: "ph-users",
  title: "Repeat Insurance Rate",
  dataKey: "repeatUsers",
  timeline: {
    weekly: [
      { name: "Sun", repeatUsers: getRandomIncome(300, 700) },
      { name: "Mon", repeatUsers: getRandomIncome(300, 700) },
      { name: "Tue", repeatUsers: getRandomIncome(300, 700) },
      { name: "Wed", repeatUsers: getRandomIncome(300, 700) },
      { name: "Thu", repeatUsers: getRandomIncome(300, 700) },
      { name: "Fri", repeatUsers: getRandomIncome(300, 700) },
      { name: "Sat", repeatUsers: getRandomIncome(300, 700) },
    ],
    monthly: [
      { name: "Jan", repeatUsers: getRandomIncome(2000, 4000) },
      { name: "Feb", repeatUsers: getRandomIncome(2000, 4000) },
      { name: "Mar", repeatUsers: getRandomIncome(2000, 4000) },
      { name: "Apr", repeatUsers: getRandomIncome(2000, 4000) },
      { name: "May", repeatUsers: getRandomIncome(2000, 4000) },
      { name: "Jun", repeatUsers: getRandomIncome(2000, 4000) },
      { name: "Jul", repeatUsers: getRandomIncome(2000, 4000) },
      { name: "Aug", repeatUsers: getRandomIncome(2000, 4000) },
      { name: "Sep", repeatUsers: getRandomIncome(2000, 4000) },
      { name: "Oct", repeatUsers: getRandomIncome(2000, 4000) },
      { name: "Nov", repeatUsers: getRandomIncome(2000, 4000) },
      { name: "Dec", repeatUsers: getRandomIncome(2000, 4000) },
    ],
    yearly: [
      { name: "2014", repeatUsers: getRandomIncome(30000, 50000) },
      { name: "2015", repeatUsers: getRandomIncome(30000, 50000) },
      { name: "2016", repeatUsers: getRandomIncome(30000, 50000) },
      { name: "2017", repeatUsers: getRandomIncome(30000, 50000) },
      { name: "2018", repeatUsers: getRandomIncome(30000, 50000) },
      { name: "2019", repeatUsers: getRandomIncome(30000, 50000) },
      { name: "2020", repeatUsers: getRandomIncome(30000, 50000) },
      { name: "2021", repeatUsers: getRandomIncome(30000, 50000) },
      { name: "2022", repeatUsers: getRandomIncome(30000, 50000) },
      { name: "2023", repeatUsers: getRandomIncome(30000, 50000) },
    ],
  },
};

const dummyAllInsurance = [
  {
    id: 1,
    FullName: "Snow Jon",
    age: 14,
    phone: generatePhoneNumber(),
    category: "Bronze",
    status: "accepted",
  },
  {
    id: 2,
    FullName: "Lannister Cersei",
    age: 31,
    phone: generatePhoneNumber(),
    category: "Gold",
    status: "rejected",
  },
  {
    id: 3,
    FullName: "Lannister Jaime",
    age: 31,
    phone: generatePhoneNumber(),
    category: "Silver",
    status: "pending",
  },
  {
    id: 4,
    FullName: "Stark Arya",
    age: 11,
    phone: generatePhoneNumber(),
    category: "Bronze",
    status: "accepted",
  },
  {
    id: 5,
    FullName: "Targaryen Daenerys",
    age: null,
    phone: generatePhoneNumber(),
    category: "Platinum",
    status: "pending",
  },
  {
    id: 6,
    FullName: "Melisandre",
    age: 150,
    phone: generatePhoneNumber(),
    category: "Gold",
    status: "rejected",
  },
  {
    id: 7,
    FullName: "Clifford Ferrara",
    age: 44,
    phone: generatePhoneNumber(),
    category: "Silver",
    status: "accepted",
  },
  {
    id: 8,
    FullName: "Frances Rossini",
    age: 36,
    phone: generatePhoneNumber(),
    category: "Platinum",
    status: "rejected",
  },
  {
    id: 9,
    FullName: "Roxie Harvey",
    age: 65,
    phone: generatePhoneNumber(),
    category: "Bronze",
    status: "pending",
  },
  {
    id: 10,
    FullName: "Snow Jon",
    age: 14,
    phone: generatePhoneNumber(),
    category: "Silver",
    status: "accepted",
  },
  {
    id: 11,
    FullName: "Lannister Cersei",
    age: 31,
    phone: generatePhoneNumber(),
    category: "Gold",
    status: "rejected",
  },
  {
    id: 12,
    FullName: "Lannister Jaime",
    age: 31,
    phone: generatePhoneNumber(),
    category: "Bronze",
    status: "accepted",
  },
  {
    id: 13,
    FullName: "Stark Arya",
    age: 11,
    phone: generatePhoneNumber(),
    category: "Silver",
    status: "pending",
  },
  {
    id: 14,
    FullName: "Targaryen Daenerys",
    age: null,
    phone: generatePhoneNumber(),
    category: "Gold",
    status: "accepted",
  },
  {
    id: 15,
    FullName: "Melisandre",
    age: 150,
    phone: generatePhoneNumber(),
    category: "Bronze",
    status: "rejected",
  },
  {
    id: 16,
    FullName: "Clifford Ferrara",
    age: 44,
    phone: generatePhoneNumber(),
    category: "Silver",
    status: "pending",
  },
  {
    id: 17,
    FullName: "Frances Rossini",
    age: 36,
    phone: generatePhoneNumber(),
    category: "Platinum",
    status: "accepted",
  },
  {
    id: 18,
    FullName: "Roxie Harvey",
    age: 65,
    phone: generatePhoneNumber(),
    category: "Gold",
    status: "rejected",
  },
  {
    id: 19,
    FullName: "Snow Jon",
    age: 14,
    phone: generatePhoneNumber(),
    category: "Bronze",
    status: "accepted",
  },
  {
    id: 20,
    FullName: "Lannister Cersei",
    age: 31,
    phone: generatePhoneNumber(),
    category: "Silver",
    status: "pending",
  },
  {
    id: 21,
    FullName: "Lannister Jaime",
    age: 31,
    phone: generatePhoneNumber(),
    category: "Platinum",
    status: "rejected",
  },
  {
    id: 22,
    FullName: "Stark Arya",
    age: 11,
    phone: generatePhoneNumber(),
    category: "Gold",
    status: "accepted",
  },
  {
    id: 23,
    FullName: "Targaryen Daenerys",
    age: null,
    phone: generatePhoneNumber(),
    category: "Bronze",
    status: "rejected",
  },
  {
    id: 24,
    FullName: "Melisandre",
    age: 150,
    phone: generatePhoneNumber(),
    category: "Silver",
    status: "pending",
  },
  {
    id: 25,
    FullName: "Clifford Ferrara",
    age: 44,
    phone: generatePhoneNumber(),
    category: "Gold",
    status: "accepted",
  },
  {
    id: 26,
    FullName: "Frances Rossini",
    age: 36,
    phone: generatePhoneNumber(),
    category: "Bronze",
    status: "rejected",
  },
  {
    id: 27,
    FullName: "Roxie Harvey",
    age: 65,
    phone: generatePhoneNumber(),
    category: "Platinum",
    status: "pending",
  },
  {
    id: 28,
    FullName: "Snow Jon",
    age: 14,
    phone: generatePhoneNumber(),
    category: "Gold",
    status: "accepted",
  },
  {
    id: 29,
    FullName: "Lannister Cersei",
    age: 31,
    phone: generatePhoneNumber(),
    category: "Silver",
    status: "rejected",
  },
  {
    id: 30,
    FullName: "Lannister Jaime",
    age: 31,
    phone: generatePhoneNumber(),
    category: "Bronze",
    status: "pending",
  },
  {
    id: 31,
    FullName: "Stark Arya",
    age: 11,
    phone: generatePhoneNumber(),
    category: "Platinum",
    status: "accepted",
  },
  {
    id: 32,
    FullName: "Targaryen Daenerys",
    age: null,
    phone: generatePhoneNumber(),
    category: "Gold",
    status: "rejected",
  },
  {
    id: 33,
    FullName: "Melisandre",
    age: 150,
    phone: generatePhoneNumber(),
    category: "Bronze",
    status: "pending",
  },
  {
    id: 34,
    FullName: "Clifford Ferrara",
    age: 44,
    phone: generatePhoneNumber(),
    category: "Silver",
    status: "accepted",
  },
  {
    id: 35,
    FullName: "Frances Rossini",
    age: 36,
    phone: generatePhoneNumber(),
    category: "Platinum",
    status: "rejected",
  },
  {
    id: 36,
    FullName: "Roxie Harvey",
    age: 65,
    phone: generatePhoneNumber(),
    category: "Gold",
    status: "pending",
  },
  {
    id: 37,
    FullName: "Snow Jon",
    age: 14,
    phone: generatePhoneNumber(),
    category: "Bronze",
    status: "accepted",
  },
  {
    id: 38,
    FullName: "Lannister Cersei",
    age: 31,
    phone: generatePhoneNumber(),
    category: "Silver",
    status: "rejected",
  },
  {
    id: 39,
    FullName: "Lannister Jaime",
    age: 31,
    phone: generatePhoneNumber(),
    category: "Gold",
    status: "pending",
  },
  {
    id: 40,
    FullName: "Stark Arya",
    age: 11,
    phone: generatePhoneNumber(),
    category: "Bronze",
    status: "accepted",
  },
  {
    id: 41,
    FullName: "Targaryen Daenerys",
    age: null,
    phone: generatePhoneNumber(),
    category: "Platinum",
    status: "rejected",
  },
  {
    id: 42,
    FullName: "Melisandre",
    age: 150,
    phone: generatePhoneNumber(),
    category: "Silver",
    status: "pending",
  },
  {
    id: 43,
    FullName: "Clifford Ferrara",
    age: 44,
    phone: generatePhoneNumber(),
    category: "Gold",
    status: "accepted",
  },
  {
    id: 44,
    FullName: "Frances Rossini",
    age: 36,
    phone: generatePhoneNumber(),
    category: "Bronze",
    status: "rejected",
  },
  {
    id: 45,
    FullName: "Roxie Harvey",
    age: 65,
    phone: generatePhoneNumber(),
    category: "Silver",
    status: "pending",
  },
  {
    id: 46,
    FullName: "Snow Jon",
    age: 14,
    phone: generatePhoneNumber(),
    category: "Platinum",
    status: "accepted",
  },
  {
    id: 47,
    FullName: "Lannister Cersei",
    age: 31,
    phone: generatePhoneNumber(),
    category: "Gold",
    status: "rejected",
  },
  {
    id: 48,
    FullName: "Lannister Jaime",
    age: 31,
    phone: generatePhoneNumber(),
    category: "Bronze",
    status: "pending",
  },
  {
    id: 49,
    FullName: "Stark Arya",
    age: 11,
    phone: generatePhoneNumber(),
    category: "Silver",
    status: "accepted",
  },
  {
    id: 50,
    FullName: "Targaryen Daenerys",
    age: null,
    phone: generatePhoneNumber(),
    category: "Gold",
    status: "rejected",
  },
  {
    id: 51,
    FullName: "Melisandre",
    age: 150,
    phone: generatePhoneNumber(),
    category: "Bronze",
    status: "pending",
  },
  {
    id: 52,
    FullName: "Clifford Ferrara",
    age: 44,
    phone: generatePhoneNumber(),
    category: "Silver",
    status: "accepted",
  },
  {
    id: 53,
    FullName: "Frances Rossini",
    age: 36,
    phone: generatePhoneNumber(),
    category: "Platinum",
    status: "rejected",
  },
  {
    id: 54,
    FullName: "Roxie Harvey",
    age: 65,
    phone: generatePhoneNumber(),
    category: "Gold",
    status: "pending",
  },
];
const insuranceCategory = [
  { value: "", label: "Insurance Category" },
  { value: "Bronze", label: "Bronze" },
  { value: "Silver", label: "Silver" },
  { value: "Gold", label: "Gold" },
  { value: "Platinum", label: "Platinum" },
];

const dummyEvent = [
  [
    {
      title: "Weekly Meeting",
      body: "You have weekly meeting with HR",
      place: "Office",
      date: "2024-09-03",
      time: "08:30 AM",
    },
    {
      title: "Client Meeting",
      body: "You have meeting with Client",
      place: "Online",
      date: "2024-09-06",
      time: "11:30 AM",
    },
    {
      title: "Investor Meeting",
      body: "You have meeting with investor",
      place: "Investor office",
      date: "2024-09-05",
      time: "18:30 PM",
    },
    {
      title: "Investor Meeting",
      body: "You have meeting with investor",
      place: "Investor office",
      date: "2024-09-05",
      time: "11:30 PM",
    },
    {
      title: "Salary Update",
      body: "Salary update for all employee",
      place: "Office",
      date: "2024-09-04",
      time: "10:30 PM",
    },
  ]
];


// Function to push data to Firebase
const pushDataToFirebase = () => {

  const notificationsRef = ref(database, "dummynotifications");
  dummyNotifications.forEach((notification, index) => {
    const newNotificationRef = ref(database, `dummyData/dummynotifications/${index}`);
    set(newNotificationRef, notification)
      .then(() => {
        console.log(`Notification ${index + 1} added successfully`);
      })
      .catch((error) => {
        console.error("Error adding notification:", error);
      });
  });

  const eventsRef = ref(database, "dummyevents");
  dummyEvent.forEach((events, index) => {
    const newEventsRef = ref(database, `dummyData/dummyevents/${index}`);
    set(newEventsRef, events)
      .then(() => {
        console.log(`Notification ${index + 1} added successfully`);
      })
      .catch((error) => {
        console.error("Error adding notification:", error);
      });
  });

  // Push Net Income data
  const netIncomeRef = ref(database, "dummyData/dummyNetIncome");
  set(netIncomeRef, chartNetIncome)
    .then(() => {
      console.log("Net Income data pushed successfully");
    })
    .catch((error) => {
      console.error("Error pushing Net Income data:", error);
    });

  // Push Net User data
  const netUserRef = ref(database, "dummyData/dummyNetUser");
  set(netUserRef, chartNetUser)
    .then(() => {
      console.log("Net User data pushed successfully");
    })
    .catch((error) => {
      console.error("Error pushing Net User data:", error);
    });

  // Push Net Insurance data
  const netInsuranceRef = ref(database, "dummyData/dummyNetInsurance");
  set(netInsuranceRef, chartNetInsurance)
    .then(() => {
      console.log("Net Insurance data pushed successfully");
    })
    .catch((error) => {
      console.error("Error pushing Net Insurance data:", error);
    });

  // Push Net Expense data
  const netExpenseRef = ref(database, "dummyData/dummyNetExpense");
  set(netExpenseRef, chartNetExpense)
    .then(() => {
      console.log("Net Expense data pushed successfully");
    })
    .catch((error) => {
      console.error("Error pushing Net Expense data:", error);
    });

  // Push Repeat Customer data
  const repeatCustomerRef = ref(database, "dummyData/dummyRepeatCustomer");
  set(repeatCustomerRef, AreaChartRepeatCustomer)
    .then(() => {
      console.log("Repeat Customer data pushed successfully");
    })
    .catch((error) => {
      console.error("Error pushing Repeat Customer data:", error);
    });

  // Push Dummy All Insurance data
  const allInsuranceRef = ref(database, "dummyData/dummyAllInsurance");
  set(allInsuranceRef, dummyAllInsurance)
    .then(() => {
      console.log("Dummy All Insurance data pushed successfully");
    })
    .catch((error) => {
      console.error("Error pushing Dummy All Insurance data:", error);
    });
};

export default pushDataToFirebase;

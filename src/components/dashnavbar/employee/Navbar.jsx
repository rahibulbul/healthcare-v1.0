import React, { useState, useEffect, useRef, useCallback } from "react";
import { Link, useNavigate } from "react-router-dom";
import { database } from "../../../lib/firebaseConfig";
import { ref, onValue, update, remove } from "firebase/database";
import Toast from "../../../components/toast/Toast";

const EmployeeNavbar = () => {
  const [isBellPanelVisible, setIsBellPanelVisible] = useState(false);
  const [isUserPanelVisible, setIsUserPanelVisible] = useState(false);
  const [notifications, setNotifications] = useState([]);
  const [activeContextMenu, setActiveContextMenu] = useState(null);
  const [userFullName, setUserFullName] = useState("");

  const bellPanelRef = useRef(null);
  const bellIconRef = useRef(null);
  const userPanelRef = useRef(null);
  const userIconRef = useRef(null);

  const [toastVisible, setToastVisible] = useState(false);
  const [toastType, setToastType] = useState("success");
  const [toastMessage, setToastMessage] = useState("This is a toast message!");

  const showToast = (type, message) => {
    setToastType(type);
    setToastMessage(message);
    setToastVisible(true);
    setTimeout(() => {
      setToastVisible(false);
    }, 2000);
  };

  useEffect(() => {
    const userData = JSON.parse(sessionStorage.getItem("userData"));
    if (userData && userData.userType && userData.id) {
      const userRef = ref(database, `${userData.userType}/${userData.id}`);
      onValue(
        userRef,
        (snapshot) => {
          const data = snapshot.val();
          if (data && data.fullName) {
            setUserFullName(data.fullName);
          } else {
            showToast("error", "Failed to fetch user full name.");
          }
        },
        (error) => {
          showToast("error", "Error fetching user data.");
        }
      );
    } else {
      showToast("error", "User not logged in or user data is missing.");
    }
  }, []);

  useEffect(() => {
    const notificationsRef = ref(database, "dummynotifications");
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

    return () => unsubscribe();
  }, []);

  const toggleBellPanel = () => {
    setIsBellPanelVisible((prev) => !prev);
    setIsUserPanelVisible(false);
  };

  const toggleUserPanel = () => {
    setIsUserPanelVisible((prev) => !prev);
    setIsBellPanelVisible(false);
  };

  const handleClickOutside = useCallback(
    (event) => {
      if (
        bellPanelRef.current &&
        !bellPanelRef.current.contains(event.target) &&
        !bellIconRef.current.contains(event.target)
      ) {
        setIsBellPanelVisible(false);
      }
      if (
        userPanelRef.current &&
        !userPanelRef.current.contains(event.target) &&
        !userIconRef.current.contains(event.target)
      ) {
        setIsUserPanelVisible(false);
      }
      if (activeContextMenu !== null && !event.target.closest(".fa-bars")) {
        setActiveContextMenu(null);
      }
    },
    [activeContextMenu]
  );

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [handleClickOutside]);

  const handleContextMenuToggle = (id) => {
    setActiveContextMenu((prev) => (prev === id ? null : id));
  };

  const markAsRead = (parentKey, id) => {
    const notification = notifications.find(
      (notif) => notif.parentKey === parentKey && notif.id === id
    );

    if (notification.isRead === "yes") {
      showToast("warning", "This notification is already marked as read.");
      setActiveContextMenu(null);
      return;
    }

    const notificationRef = ref(
      database,
      `dummynotifications/${parentKey}/${id}`
    );

    update(notificationRef, { isRead: "yes" })
      .then(() => {
        showToast("success", `Notification successfully marked as read.`);
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
        showToast("error", `Error marking as read: ${error.message}`);
      });
  };

  const eraseNotification = (parentKey, id) => {
    const notificationRef = ref(
      database,
      `dummynotifications/${parentKey}/${id}`
    );

    remove(notificationRef)
      .then(() => {
        showToast("success", `Notification removed successfully.`);
        setNotifications((prevNotifications) =>
          prevNotifications.filter(
            (notification) =>
              notification.parentKey !== parentKey || notification.id !== id
          )
        );
        setActiveContextMenu(null);
      })
      .catch((error) => {
        showToast("error", `Error erasing: ${error.message}`);
      });
  };

  const navigate = useNavigate();

  const handleLogout = () => {
    sessionStorage.removeItem("userData");
    showToast("success", "Successfully logged out. Redirecting....");
    setTimeout(() => {
      navigate("/");
    }, 100);
  };

  return (
    <header className="sticky h-[60px] left-0 top-0 w-full flex justify-between items-center shadow-md px-5 z-50">
      <div className="h-full flex items-center gap-3 w-72 justify-center">
        <i className="ph ph-pulse text-3xl font-bold text-gray-600 cursor-pointer hover:text-black duration-500"></i>
        <h2 className="empdash-header-title text-3xl font-semibold text-gray-600 cursor-pointer hover:text-black duration-500">
          HealthCare
        </h2>
      </div>
      <div className="flex items-center mr-5">
        <div ref={bellIconRef} className="relative mr-6">
          <div
            className="w-12 h-12 border-2 border-gray-300 rounded-full flex items-center justify-center cursor-pointer text-gray-600 hover:bg-slate-300 hover:text-black hover:border-transparent duration-500"
            onClick={toggleBellPanel}
          >
            <i className="fa fa-bell text-xl"></i>
          </div>
          {isBellPanelVisible && (
            <div
              ref={bellPanelRef}
              className="empdash-bell-panel absolute w-[400px] bg-white shadow-ui-bold h-[500px] top-[100%] right-0 flex flex-col justify-between"
            >
              <div className="sticky flex overflow-hidden justify-between items-center h-12 px-3 border-b-2">
                <span className="text-lg font-semibold text-gray-700">
                  Notification
                </span>
              </div>
              <div className="flex-1 overflow-auto">
                {notifications.length === 0 ? (
                  <div className="text-center text-gray-500 py-4">
                    No notifications available
                  </div>
                ) : (
                  notifications.map((notification) => (
                    <div
                      key={notification.id}
                      className={`each-notify flex flex-col px-3 py-1 cursor-pointer duration-500 ${
                        notification.isRead === "no"
                          ? "bg-slate-300"
                          : "bg-white"
                      } hover:bg-slate-200`}
                    >
                      <div className="flex flex-row relative justify-between items-center">
                        <span className="text-base relative text-gray-800">
                          {notification.title}
                        </span>
                        <i
                          className="fa fa-bars relative text-slate-400 text-xl hover:text-black duration-500 cursor-pointer"
                          onClick={() =>
                            handleContextMenuToggle(notification.id)
                          }
                        ></i>
                        {activeContextMenu === notification.id && (
                          <div className="absolute top-[100%] right-0 bg-white shadow-ui-bold w-auto h-auto z-10">
                            <div
                              className="flex flex-row items-center gap-2 px-3 py-2 hover:bg-slate-300 group duration-500"
                              onClick={(event) => {
                                event.stopPropagation();
                                markAsRead(
                                  notification.parentKey,
                                  notification.id
                                );
                              }}
                            >
                              <i className="fa-solid fa-envelope-open-text text-slate-500 group-hover:text-black"></i>
                              <span className="text-slate-500 font-medium group-hover:text-black">
                                Mark as read
                              </span>
                            </div>
                            <div
                              className="flex flex-row items-center gap-2 px-3 py-2 hover:bg-slate-300 group duration-500"
                              onClick={(event) => {
                                event.stopPropagation();
                                eraseNotification(
                                  notification.parentKey,
                                  notification.id
                                );
                              }}
                            >
                              <i className="fa-solid fa-eraser text-slate-500 group-hover:text-black"></i>
                              <span className="text-slate-500 font-medium group-hover:text-black">
                                Erase this notification
                              </span>
                            </div>
                          </div>
                        )}
                      </div>
                      <span className="text-sm text-gray-700">
                        {notification.body}
                      </span>
                      <div className="flex flex-row justify-between">
                        <span className="text-sm text-gray-500">
                          {notification.time}
                        </span>
                        <span className="text-sm text-gray-500">
                          {notification.date}
                        </span>
                      </div>
                    </div>
                  ))
                )}
              </div>
              <div className="h-10 border-t-2">
                <Link
                  to="/"
                  className="flex items-center justify-center w-full h-full text-lg font-semibold text-gray-500 hover:text-gray-700 hover:bg-slate-200 duration-500"
                >
                  All Notifications
                </Link>
              </div>
            </div>
          )}
        </div>

        {/* User Icon */}
        <div ref={userIconRef} className="relative mr-6">
          <div
            className="w-12 h-12 border-2 border-gray-300 rounded-full flex items-center justify-center cursor-pointer text-gray-600 hover:bg-slate-300 hover:text-black hover:border-transparent duration-500"
            onClick={toggleUserPanel}
          >
            <i className="fa fa-user text-xl"></i>
          </div>
          {isUserPanelVisible && (
            <div
              ref={userPanelRef}
              className="empdash-user-panel absolute w-[300px] bg-white shadow-ui-bold h-auto top-[100%] right-0"
            >
              <div className="flex flex-col p-3 border-b border-gray-300">
                <span className="text-xl font-semibold text-slate-700">
                  {userFullName || "User Full Name"}
                </span>
                <span className="text-base font-normal text-slate-600">
                  user role {/* This will be updated later */}
                </span>
              </div>
              <div className="flex flex-col mt-1">
                <ul>
                  <li className="cursor-pointer hover:bg-slate-300">
                    <Link
                      to="#"
                      className="flex flex-row items-center p-3 gap-2 text-base font-medium text-slate-600 hover:ml-3 hover:text-black duration-500"
                    >
                      <i className="ph ph-gear text-lg"></i>Profile Settings
                    </Link>
                  </li>
                  <li className="cursor-pointer hover:bg-slate-300">
                    <Link
                      to="#"
                      className="flex flex-row items-center gap-2 p-3 text-base font-medium text-slate-600 hover:ml-3 hover:text-black duration-500"
                    >
                      <i className="ph ph-shield-plus text-lg"></i>Security and
                      privacy
                    </Link>
                  </li>
                  <li className="cursor-pointer hover:bg-slate-300">
                    <Link
                      to="#"
                      onClick={handleLogout}
                      className="flex flex-row items-center gap-2 p-3 text-base font-medium text-slate-600 hover:ml-3 hover:text-black duration-500"
                    >
                      <i className="bx bx-log-out-circle text-lg"></i>Log out
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          )}
        </div>
      </div>
      {/* Toast component */}
      {toastVisible && (
        <Toast
          type={toastType}
          message={toastMessage}
          onClose={() => setToastVisible(false)}
        />
      )}
    </header>
  );
};

export default EmployeeNavbar;

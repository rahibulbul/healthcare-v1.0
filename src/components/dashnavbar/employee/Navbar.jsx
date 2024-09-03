// import React from "react";
// import "./style.css";
// import {
//   FiUser,
//   FiBell,
//   FiBellOff,
//   FiCheckSquare,
//   FiTrash2,
// } from "react-icons/fi";
// import { MdOutlineHealthAndSafety } from "react-icons/md";
// import { HiDotsVertical } from "react-icons/hi";

// const EmployeeNavbar = () => {
//   return (
//     <header className="empdash-header">
//       <div className="empdash-header-left">
//         <MdOutlineHealthAndSafety className="text-3xl text-gray-600 hover:text-black duration-500" />
//         <h2 className="empdash-header-title text-3xl font-semibold text-gray-600 cursor-pointer hover:text-black duration-500">
//           HealthCare
//         </h2>
//       </div>
//       <div className="empdash-header-right">
//         <div className="empdash-header-right-1">
//           <FiBell className="empdash-header-right-icon" />
//           <div className="empdash-bell-panel">
//             <div className="empdash-bell-panel-top">
//               <span>Notification</span>
//               <HiDotsVertical className="empdash-bell-panel-controller" />
//               <div className="empdash-bell-panel-controller-panel">
//                 <span>
//                   <FiBellOff /> Turn off notification
//                 </span>
//                 <span>
//                   <FiCheckSquare /> Mark all read
//                 </span>
//                 <span>
//                   <FiTrash2 /> Remove all notification
//                 </span>
//               </div>
//             </div>
//             <div className="empdash-bell-panel-middle">
//               <div className="empdash-bell-panel-middle-body">
//                 <div className="empdash-notify-title">
//                   <span>You got a mail</span>
//                   <HiDotsVertical className="empdash-notify-title-control" />
//                   <div className="empdash-notify-title-control-panel">
//                     <span>
//                       <FiCheckSquare /> Mark all read
//                     </span>
//                     <span>
//                       <FiTrash2 /> Remove all notification
//                     </span>
//                   </div>
//                 </div>
//                 <div className="empdash-notify-body">You got a mail</div>
//                 <div className="empdash-notify-timestamp">
//                   <span className="empdash-notify-date">date</span>
//                   <span className="empdash-notify-time">time</span>
//                 </div>
//               </div>
//             </div>
//             <div className="empdash-bell-panel-bottom">
//               <span>Notification</span>
//             </div>
//           </div>
//         </div>
//         <div className="empdash-header-right-2">
//           <FiUser className="empdash-header-right-icon" />
//         </div>
//       </div>
//     </header>
//   );
// };

// export default EmployeeNavbar;
import React, { useState, useEffect, useRef } from "react";
import "./style.css";
import {
  FiUser,
  FiBell,
  FiBellOff,
  FiCheckSquare,
  FiTrash2,
} from "react-icons/fi";
import { MdOutlineHealthAndSafety } from "react-icons/md";
import { HiDotsVertical } from "react-icons/hi";

const EmployeeNavbar = () => {
  const [bellPanelOpen, setBellPanelOpen] = useState(false);
  const [controllerPanelOpen, setControllerPanelOpen] = useState(false);
  const [notifyTitleControlPanelOpen, setNotifyTitleControlPanelOpen] =
    useState(false);

  const bellPanelRef = useRef(null);
  const controllerPanelRef = useRef(null);
  const notifyTitleControlPanelRef = useRef(null);

  // Function to handle clicking outside of the panels
  useEffect(() => {
    function handleClickOutside(event) {
      if (
        bellPanelRef.current &&
        !bellPanelRef.current.contains(event.target)
      ) {
        setBellPanelOpen(false);
        setControllerPanelOpen(false);
        setNotifyTitleControlPanelOpen(false);
      } else if (
        controllerPanelRef.current &&
        !controllerPanelRef.current.contains(event.target)
      ) {
        setControllerPanelOpen(false);
      } else if (
        notifyTitleControlPanelRef.current &&
        !notifyTitleControlPanelRef.current.contains(event.target)
      ) {
        setNotifyTitleControlPanelOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <header className="empdash-header">
      <div className="empdash-header-left">
        <MdOutlineHealthAndSafety className="text-3xl text-gray-600 hover:text-black duration-500" />
        <h2 className="empdash-header-title text-3xl font-semibold text-gray-600 cursor-pointer hover:text-black duration-500">
          HealthCare
        </h2>
      </div>
      <div className="empdash-header-right">
        <div className="empdash-header-right-1">
          <FiBell
            className="empdash-header-right-icon"
            onClick={() => setBellPanelOpen(!bellPanelOpen)}
          />
          <div
            className={`empdash-bell-panel ${bellPanelOpen ? "show" : ""}`}
            ref={bellPanelRef}
          >
            <div className="empdash-bell-panel-top">
              <span>Notification</span>
              <HiDotsVertical
                className="empdash-bell-panel-controller"
                onClick={() => setControllerPanelOpen(!controllerPanelOpen)}
              />
              <div
                className={`empdash-bell-panel-controller-panel ${
                  controllerPanelOpen ? "show" : ""
                }`}
                ref={controllerPanelRef}
              >
                <span>
                  <FiBellOff /> Turn off notification
                </span>
                <span>
                  <FiCheckSquare /> Mark all read
                </span>
                <span>
                  <FiTrash2 /> Remove all notification
                </span>
              </div>
            </div>
            {/* <div className="empdash-bell-panel-middle">
              <div className="empdash-bell-panel-middle-body">
                <div className="empdash-notify-title">
                  <span>You got a mail</span>
                  <HiDotsVertical
                    className="empdash-notify-title-control"
                    onClick={() =>
                      setNotifyTitleControlPanelOpen(
                        !notifyTitleControlPanelOpen
                      )
                    }
                  />
                  <div
                    className={`empdash-notify-title-control-panel ${
                      notifyTitleControlPanelOpen ? "show" : ""
                    }`}
                    ref={notifyTitleControlPanelRef}
                  >
                    <span>
                      <FiCheckSquare /> Mark as read
                    </span>
                    <span>
                      <FiTrash2 /> Remove notification
                    </span>
                  </div>
                </div>
                <div className="empdash-notify-body">You got a mail</div>
                <div className="empdash-notify-timestamp">
                  <span className="empdash-notify-date">date</span>
                  <span className="empdash-notify-time">time</span>
                </div>
              </div>
            </div> */}
            {/* <div className="empdash-bell-panel-bottom">
              <span>Notification</span>
            </div> */}
          </div>
        </div>
        <div className="empdash-header-right-2">
          <FiUser className="empdash-header-right-icon" />
        </div>
      </div>
    </header>
  );
};

export default EmployeeNavbar;

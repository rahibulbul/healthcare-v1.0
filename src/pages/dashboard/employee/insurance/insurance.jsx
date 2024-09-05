import React, { useState } from "react";

const EmployeeInsurance = () => {
  const [activeTab, setActiveTab] = useState("all-insurance");

  const showTab = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="px-5 py-2">
      {/* Tab buttons */}
      <div className="tab-btn flex fixed bg-white border-b-2 border-slate-300 w-[82%] z-10">
        <button
          onClick={() => showTab("all-insurance")}
          className={`block py-3 mr-1 px-9 text-base font-semibold hover:bg-slate-600 hover:text-white hover:rounded-md duration-500 ${activeTab === "all-insurance"
            ? "bg-slate-600 text-white rounded-md"
            : "bg-white text-slate-700"
            }`}
        >
          All Insurance
        </button>
        <button
          onClick={() => showTab("new-insurance")}
          className={`block py-3 mr-1 px-9 text-base font-semibold hover:bg-slate-600 hover:text-white hover:rounded-md duration-500 ${activeTab === "new-insurance"
            ? "bg-slate-600 text-white rounded-md"
            : "bg-white text-slate-700"
            }`}
        >
          New Insurance
        </button>
        <button
          onClick={() => showTab("waiting-approval")}
          className={`block py-3 mr-1 px-9 text-base font-semibold hover:bg-slate-600 hover:text-white hover:rounded-md duration-500 ${activeTab === "waiting-approval"
            ? "bg-slate-600 text-white rounded-md"
            : "bg-white text-slate-700"
            }`}
        >
          Waiting Approval
        </button>
        <button
          onClick={() => showTab("insurance-category")}
          className={`block py-3 mr-1 px-9 text-base font-semibold hover:bg-slate-600 hover:text-white hover:rounded-md duration-500 ${activeTab === "insurance-category"
            ? "bg-slate-600 text-white rounded-md"
            : "bg-white text-slate-700"
            }`}
        >
          Insurance Category
        </button>
      </div>
      <div className="mt-10">
        {activeTab === "all-insurance" && (
          <div className="all-insurance p-5">
            <div className="">
              <h2 className="text-2xl font-semibold text-slate-700">All Insurance</h2>
              <p>Here is the list of all insurance items.</p>
            </div>
            <div className="mt-2">tesst</div>
          </div>
        )}
        {activeTab === "new-insurance" && (
          <div className="new-insurance p-5 w-full">
            <div className="">
              <h2 className="text-2xl font-semibold text-slate-700">New Insurance</h2>
              <p>Here you can create a new insurance entry.</p>
            </div>
            <div className="mt-2 relative w-full">
              <form className="relative w-full mt-5">
                <div className="group w-full flex flex-row gap-10">
                  <div className="relative w-full mb-5">
                    <input
                      type="text"
                      id="userid"
                      required
                      className="relative w-full border-2 border-slate-300 font-base rounded-lg py-3 px-6 text-lg outline-none focus:border-slate-700 duration-500 valid:border-slate-700 peer"
                    />
                    <label
                      htmlFor="userid"
                      className="absolute left-0 top-[50%] -translate-y-2/4 ml-2 px-4 bg-white font-base text-base pointer-events-none text-slate-600 duration-500 transform peer-focus:top-0 peer-focus:bg-slate-700 peer-focus:rounded-lg peer-focus:text-white peer-valid:bg-slate-700 peer-valid:rounded-lg peer-valid:text-white peer-valid:top-0"
                    >
                      Enter username or patient id
                    </label>
                  </div>
                  <div className="relative mb-5 w-full ">
                    <select
                      type="text"
                      id="title"
                      required
                      className="relative w-full border-2 border-slate-300 font-base rounded-lg bg-white py-3 px-6 text-lg outline-none focus:border-slate-700 duration-500 valid:border-slate-700 peer">
                      <option value=""></option>
                      <option value="Mr">Mr</option>
                      <option value="Miss">Miss</option>
                      <option value="Mrs">Mrs</option>
                      <option value="Ms">Ms</option>
                      <option value="Dr">Dr</option>
                      <option value="Mx">Mx</option>
                    </select>
                    <label
                      htmlFor="title"
                      className="absolute left-0 top-[50%] -translate-y-2/4 ml-2 px-4 bg-white font-base text-base pointer-events-none text-slate-600 duration-500 transform peer-focus:top-0 peer-focus:bg-slate-700 peer-focus:rounded-lg peer-focus:text-white peer-valid:bg-slate-700 peer-valid:rounded-lg peer-valid:text-white peer-valid:top-0"
                    >
                      Title
                    </label>
                  </div>
                  <div className="relative mb-5 w-[210%]">
                    <input
                      type="text"
                      id="fullname"
                      required
                      className="relative w-full border-2 border-slate-300 font-base rounded-lg py-3 px-6 text-lg outline-none focus:border-slate-700 duration-500 valid:border-slate-700 peer"
                    />
                    <label
                      htmlFor="fullname"
                      className="absolute left-0 top-[50%] -translate-y-2/4 ml-2 px-4 bg-white font-base text-base pointer-events-none text-slate-600 duration-500 transform peer-focus:top-0 peer-focus:bg-slate-700 peer-focus:rounded-lg peer-focus:text-white peer-valid:bg-slate-700 peer-valid:rounded-lg peer-valid:text-white peer-valid:top-0"
                    >
                      Enter patient name
                    </label>
                  </div>
                </div>
                <div className="group w-full flex flex-row gap-10">
                  <div className="relative w-full mb-5">
                    <input
                      type="date"
                      id="dob"
                      required
                      className="relative w-full border-2 border-slate-300 font-base rounded-lg py-3 px-6 text-lg outline-none focus:border-slate-700 duration-500 valid:border-slate-700 peer"
                    />
                    <label
                      htmlFor="dob"
                      className="absolute left-0 top-[50%] -translate-y-2/4 ml-2 px-4 bg-white font-base text-base pointer-events-none text-slate-600 duration-500 transform peer-focus:top-0 peer-focus:bg-slate-700 peer-focus:rounded-lg peer-focus:text-white peer-valid:bg-slate-700 peer-valid:rounded-lg peer-valid:text-white peer-valid:top-0"
                    >
                      Enter patient date of birth
                    </label>
                  </div>
                  <div className="relative mb-5 w-full">
                    <select
                      type="text"
                      id="cover"
                      required
                      className="relative w-full border-2 border-slate-300 font-base rounded-lg bg-white py-3 px-6 text-lg outline-none focus:border-slate-700 duration-500 valid:border-slate-700 peer">
                      <option value=""></option>
                      <option value="Myself">Myself</option>
                      <option value="My partner">My partner</option>
                      <option value="Me and partner">Me and partner</option>
                      <option value="My children">My children</option>
                      <option value="My partner and children">My partner and children</option>
                      <option value="Me Family">Me Family</option>
                    </select>
                    <label
                      htmlFor="cover"
                      className="absolute left-0 top-[50%] -translate-y-2/4 ml-2 px-4 bg-white font-base text-base pointer-events-none text-slate-600 duration-500 transform peer-focus:top-0 peer-focus:bg-slate-700 peer-focus:rounded-lg peer-focus:text-white peer-valid:bg-slate-700 peer-valid:rounded-lg peer-valid:text-white peer-valid:top-0"
                    >
                      Insurance cover for
                    </label>
                  </div>
                  <div className="relative mb-5 w-full">
                    <input
                      type="text"
                      id="nhsnum"
                      required
                      className="relative w-full border-2 border-slate-300 font-base rounded-lg py-3 px-6 text-lg outline-none focus:border-slate-700 duration-500 valid:border-slate-700 peer"
                    />
                    <label
                      htmlFor="nhsnum"
                      className="absolute left-0 top-[50%] -translate-y-2/4 ml-2 px-4 bg-white font-base text-base pointer-events-none text-slate-600 duration-500 transform peer-focus:top-0 peer-focus:bg-slate-700 peer-focus:rounded-lg peer-focus:text-white peer-valid:bg-slate-700 peer-valid:rounded-lg peer-valid:text-white peer-valid:top-0"
                    >
                      Enter patient nhs number
                    </label>
                  </div>
                  <div className="relative mb-5 w-full">
                    <input
                      type="text"
                      id="address"
                      required
                      className="relative w-full border-2 border-slate-300 font-base rounded-lg py-3 px-6 text-lg outline-none focus:border-slate-700 duration-500 valid:border-slate-700 peer"
                    />
                    <label
                      htmlFor="address"
                      className="absolute left-0 top-[50%] -translate-y-2/4 ml-2 px-4 bg-white font-base text-base pointer-events-none text-slate-600 duration-500 transform peer-focus:top-0 peer-focus:bg-slate-700 peer-focus:rounded-lg peer-focus:text-white peer-valid:bg-slate-700 peer-valid:rounded-lg peer-valid:text-white peer-valid:top-0"
                    >
                      Enter patient address
                    </label>
                  </div>
                </div>
                <span className="text-2xl font-medium text-slate-700">Medical history Question</span>
                <div className="group mt-5 w-full flex flex-row gap-10">
                  <div className="relative mb-5 w-full">
                    <select
                      type="text"
                      id="smoking"
                      required
                      className="relative w-full border-2 border-slate-300 font-base rounded-lg bg-white py-3 px-6 text-lg outline-none focus:border-slate-700 duration-500 valid:border-slate-700 peer">
                      <option value=""></option>
                      <option value="No">Yes</option>
                      <option value="Yes">No</option>
                    </select>
                    <label
                      htmlFor="smoking"
                      className="absolute left-0 top-[50%] -translate-y-2/4 ml-2 px-4 bg-white font-base text-base pointer-events-none text-slate-600 duration-500 transform peer-focus:top-0 peer-focus:bg-slate-700 peer-focus:rounded-lg peer-focus:text-white peer-valid:bg-slate-700 peer-valid:rounded-lg peer-valid:text-white peer-valid:top-0"
                    >
                      Patient do smoking?
                    </label>
                  </div>
                  <div className="relative mb-5 w-full">
                    <select
                      type="text"
                      id="lastsmoke"
                      required
                      className="relative w-full border-2 border-slate-300 font-base rounded-lg bg-white py-3 px-6 text-lg outline-none focus:border-slate-700 duration-500 valid:border-slate-700 peer">
                      <option value=""></option>
                      <option value="No">Yes</option>
                      <option value="Yes">No</option>
                    </select>
                    <label
                      htmlFor="lastsmoke"
                      className="absolute left-0 top-[50%] -translate-y-2/4 ml-2 px-4 bg-white font-base text-base pointer-events-none text-slate-600 duration-500 transform peer-focus:top-0 peer-focus:bg-slate-700 peer-focus:rounded-lg peer-focus:text-white peer-valid:bg-slate-700 peer-valid:rounded-lg peer-valid:text-white peer-valid:top-0"
                    >
                      Patient did smoke in last 2 years?
                    </label>
                  </div>
                  <div className="relative mb-5 w-full">
                    <select
                      type="text"
                      id="userid"
                      required
                      className="relative w-full border-2 border-slate-300 font-base rounded-lg bg-white py-3 px-6 text-lg outline-none focus:border-slate-700 duration-500 valid:border-slate-700 peer">
                      <option value=""></option>
                      <option value="Mr">Me</option>
                      <option value="Miss">My partner</option>
                      <option value="Mrs">Me and partner</option>
                      <option value="Ms">My children</option>
                      <option value="Dr">Me and partner and children</option>
                      <option value="Mx">My partner and children</option>
                    </select>
                    <label
                      htmlFor="userid"
                      className="absolute left-0 top-[50%] -translate-y-2/4 ml-2 px-4 bg-white font-base text-base pointer-events-none text-slate-600 duration-500 transform peer-focus:top-0 peer-focus:bg-slate-700 peer-focus:rounded-lg peer-focus:text-white peer-valid:bg-slate-700 peer-valid:rounded-lg peer-valid:text-white peer-valid:top-0"
                    >
                      Insurance cover for
                    </label>
                  </div>
                </div>
                <div className="group w-full flex flex-row gap-10">
                  <div className="relative mb-5 w-full">
                    <input
                      type="bmi"
                      id="address"
                      required
                      className="relative w-full border-2 border-slate-300 font-base rounded-lg py-3 px-6 text-lg outline-none focus:border-slate-700 duration-500 valid:border-slate-700 peer"
                    />
                    <label
                      htmlFor="bmi"
                      className="absolute left-0 top-[50%] -translate-y-2/4 ml-2 px-4 bg-white font-base text-base pointer-events-none text-slate-600 duration-500 transform peer-focus:top-0 peer-focus:bg-slate-700 peer-focus:rounded-lg peer-focus:text-white peer-valid:bg-slate-700 peer-valid:rounded-lg peer-valid:text-white peer-valid:top-0"
                    >
                      Enter patient Body Mass Index (BMI)
                    </label>
                  </div>
                  <div className="relative mb-5 w-full">
                    <input
                      type="date"
                      id="insurancestartdate"
                      required
                      className="relative w-full border-2 border-slate-300 font-base rounded-lg py-3 px-6 text-lg outline-none focus:border-slate-700 duration-500 valid:border-slate-700 peer"
                    />
                    <label
                      htmlFor="insurancestartdate"
                      className="absolute left-0 top-[50%] -translate-y-2/4 ml-2 px-4 bg-white font-base text-base pointer-events-none text-slate-600 duration-500 transform peer-focus:top-0 peer-focus:bg-slate-700 peer-focus:rounded-lg peer-focus:text-white peer-valid:bg-slate-700 peer-valid:rounded-lg peer-valid:text-white peer-valid:top-0"
                    >
                      Enter insurance policy start date
                    </label>
                  </div>
                  <div className="relative mb-5 w-full">
                    <input
                      type="text"
                      id="phone"
                      required
                      className="relative w-full border-2 border-slate-300 font-base rounded-lg py-3 px-6 text-lg outline-none focus:border-slate-700 duration-500 valid:border-slate-700 peer"
                    />
                    <label
                      htmlFor="phone"
                      className="absolute left-0 top-[50%] -translate-y-2/4 ml-2 px-4 bg-white font-base text-base pointer-events-none text-slate-600 duration-500 transform peer-focus:top-0 peer-focus:bg-slate-700 peer-focus:rounded-lg peer-focus:text-white peer-valid:bg-slate-700 peer-valid:rounded-lg peer-valid:text-white peer-valid:top-0"
                    >
                      Enter phone number
                    </label>
                  </div>
                </div>
                <span className="text-2xl font-medium text-slate-700">Insurance Cover</span>
                <div className="group mt-5 w-full flex flex-row gap-10">
                  <div className="relative mb-5 w-full">
                    <select
                      type="text"
                      id="category"
                      required
                      className="relative w-full border-2 border-slate-300 font-base rounded-lg bg-white py-3 px-6 text-lg outline-none focus:border-slate-700 duration-500 valid:border-slate-700 peer">
                      <option value=""></option>
                      <option value="Bronze">Bronze</option>
                      <option value="Silver">Silver</option>
                      <option value="Gold">Gold</option>
                      <option value="Platinum">Platinum</option>
                    </select>
                    <label
                      htmlFor="category"
                      className="absolute left-0 top-[50%] -translate-y-2/4 ml-2 px-4 bg-white font-base text-base pointer-events-none text-slate-600 duration-500 transform peer-focus:top-0 peer-focus:bg-slate-700 peer-focus:rounded-lg peer-focus:text-white peer-valid:bg-slate-700 peer-valid:rounded-lg peer-valid:text-white peer-valid:top-0"
                    >
                      Insurance Category
                    </label>
                  </div>
                  <div className="relative mb-5 w-full">
                    <input
                      type="text"
                      id="medical"
                      required
                      className="relative w-full border-2 border-slate-300 font-base rounded-lg py-3 px-6 text-lg outline-none focus:border-slate-700 duration-500 valid:border-slate-700 peer"
                    />
                    <label
                      htmlFor="medical"
                      className="absolute left-0 top-[50%] -translate-y-2/4 ml-2 px-4 bg-white font-base text-base pointer-events-none text-slate-600 duration-500 transform peer-focus:top-0 peer-focus:bg-slate-700 peer-focus:rounded-lg peer-focus:text-white peer-valid:bg-slate-700 peer-valid:rounded-lg peer-valid:text-white peer-valid:top-0"
                    >
                      Enter medical center name or id
                    </label>
                  </div>
                  <div className="relative mb-5 w-full">
                    <input
                      type="text"
                      id="payment"
                      required
                      className="relative w-full border-2 border-slate-300 font-base rounded-lg py-3 px-6 text-lg outline-none focus:border-slate-700 duration-500 valid:border-slate-700 peer"
                    />
                    <label
                      htmlFor="payment"
                      className="absolute left-0 top-[50%] -translate-y-2/4 ml-2 px-4 bg-white font-base text-base pointer-events-none text-slate-600 duration-500 transform peer-focus:top-0 peer-focus:bg-slate-700 peer-focus:rounded-lg peer-focus:text-white peer-valid:bg-slate-700 peer-valid:rounded-lg peer-valid:text-white peer-valid:top-0"
                    >
                      Advantage payment
                    </label>
                  </div>
                  <div className="relative mb-5 w-full">
                    <input
                      type="text"
                      id="payment"
                      readOnly
                      className="relative w-full border-2 border-slate-300 font-base rounded-lg py-3 px-6 text-lg outline-none focus:border-slate-700 duration-500 valid:border-slate-700 peer"
                    />
                    <label
                      htmlFor="payment"
                      className="absolute left-0 top-[50%] -translate-y-2/4 ml-2 px-4 bg-white font-base text-base pointer-events-none text-slate-600 duration-500 transform peer-focus:top-0 peer-focus:bg-slate-700 peer-focus:rounded-lg peer-focus:text-white peer-valid:bg-slate-700 peer-valid:rounded-lg peer-valid:text-white peer-valid:top-0"
                    >
                      Payment due
                    </label>
                  </div>
                </div>
                <div className="flex items-center justify-center w-full h-full mt-5">
                  <input type="submit" value="Create Insurance File" className="border-2 border-slate-300 px-14 py-4 rounded-2xl font-semibold text-base text-slate-700 cursor-pointer hover:bg-slate-700 hover:text-white hover:border-transparent duration-500" />
                </div>
              </form>
            </div>
          </div>
        )}
        {activeTab === "waiting-approval" && (
          <div className="waiting-approval p-5">
            <div className="">
              <h2 className="text-2xl font-semibold text-slate-700">Waiting Approval</h2>
              <p>These insurance entries are waiting for approval.</p>
            </div>
            <div className="mt-2">tesst</div>
          </div>
        )}
        {activeTab === "insurance-category" && (
          <div className="insurance-category p-5">
            <div className="">
              <h2 className="text-2xl font-semibold text-slate-700">Insurance Category</h2>
              <p>Here you can add and upgrade insurance category type.</p>
            </div>
            <div className="mt-2">tesst</div>
          </div>
        )}
      </div>
    </div>
  );
};

export default EmployeeInsurance;

"use client";
import { useState } from "react";
import Register from "./Register";
import Login from "./Login";

const AuthTabs = () => {
  const [activeTab, setActiveTab] = useState("login");

  return (
    <div className="col-span-12 md:col-span-6 w-[560px] mx-auto border border-slate-500 rounded-lg  p-10">
      <ul
        className="flex mb-6 mt-4 align-middle w-1/2"
        style={{ display: "flex", justifyContent: "center", width: "100%" }}
        role="tablist"
      >
        <li
          role="presentation"
          className={`mr-4 ${
            activeTab === "login" ? "border-b-2 border-blue-500" : ""
          }`}
        >
          <button
            className={`p-2 ${activeTab === "login" ? "text-blue-500" : ""}`}
            onClick={() => setActiveTab("login")}
          >
            Login
          </button>
        </li>
        <li
          role="presentation"
          className={`${
            activeTab === "register" ? "border-b-2 border-blue-500" : ""
          }`}
        >
          <button
            className={`p-2 ${activeTab === "register" ? "text-blue-500" : ""}`}
            onClick={() => setActiveTab("register")}
          >
            Register
          </button>
        </li>
      </ul>
      <div className="tab-content">
        {activeTab === "login" && (
         <Login/>
        )}
        {activeTab === "register" && (
         <Register setActiveTab={setActiveTab}/>
        )}
      </div>
    </div>
  );
};

export default AuthTabs;

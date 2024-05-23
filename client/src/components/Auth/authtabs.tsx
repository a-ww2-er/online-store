"use client";
import { useState } from "react";
import { Button } from "../ui/button";
import { FcGoogle } from "react-icons/fc";

const AuthTabs = () => {
  const [activeTab, setActiveTab] = useState("login");

  return (
    <div className="col-span-12 md:col-span-6 w-1/2 mx-auto border border-slate-500 rounded-lg  p-10">
      <ul
        className="flex mb-4 mt-8 align-middle w-1/2"
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
          <div role="tabpanel" className="tab-pane active" id="login">
            <h1 className="text-[2.2rem] font-black">Login</h1>
            <form id="login" className="space-y-4" method="post">
              <span className="sub-title block text-gray-600">
                Enter your username and password to login.
              </span>
              <div className="form-group">
                <input
                  type="text"
                  className="w-full p-2 border border-gray-300 rounded"
                  name="username"
                  id="username"
                  placeholder="Username or email"
                  autoComplete="username"
                />
              </div>
              <div className="form-group">
                <input
                  type="password"
                  className="w-full p-2 border border-gray-300 rounded"
                  name="password"
                  id="password"
                  placeholder="Password"
                  autoComplete="current-password"
                />
              </div>
              <div className="flex flex-col items justify-between">
                <label className="flex items-center mb-4 !font-extralight">
                  <input
                    type="checkbox"
                    name="rememberme"
                    id="rememberme"
                    value="forever"
                    className="mr-2"
                  />
                  <span>Remember me</span>
                </label>
                <Button
                  type="submit"
                  className="p-4 w-full text-[1.2rem] bg-blue-500 text-white rounded"
                >
                  Login
                </Button>
                <p className="text-center">or</p>
                <Button
                  type="submit"
                  className="p-4 w-full text-[0.9rem] bg-slate-700 text-white rounded"
                >
                  continue with google{" "}
                  <FcGoogle className="ml-2 text-[1.2rem] bg-white rounded-full" />
                </Button>
              </div>
              <p className="mt-4 text-right">
                <a href="#" className="text-blue-800 !font-extralight">
                  forgot password?
                </a>
              </p>
            </form>
          </div>
        )}
        {activeTab === "register" && (
          <div role="tabpanel" className="tab-pane" id="register">
            <form id="register" className="space-y-4" method="post">
              <span className="sub-title block text-gray-600">
                Enter your email and password to register.
              </span>
              <div className="form-group">
                <input
                  type="email"
                  className="w-full p-2 border border-gray-300 rounded"
                  name="email"
                  id="reg_email"
                  placeholder="Email address"
                  autoComplete="email"
                />
              </div>
              <div className="form-group">
                <input
                  type="password"
                  className="w-full p-2 border border-gray-300 rounded"
                  name="password"
                  id="reg_password"
                  placeholder="Password"
                  autoComplete="new-password"
                />
              </div>
              <div className="form-group">
                <button
                  type="submit"
                  className="px-4 py-2 bg-blue-500 text-white rounded"
                >
                  Register
                </button>
              </div>
              <div className="text-sm text-gray-500">
                Your personal data will be used to support your experience
                throughout this website in accordance with our{" "}
                <a
                  href="/privacy-policy/"
                  className="text-blue-500"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  privacy policy
                </a>
                .
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};

export default AuthTabs;

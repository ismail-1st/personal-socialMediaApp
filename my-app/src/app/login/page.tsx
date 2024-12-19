"use client";

import { useState } from "react";
import LabelInput from "../components/labelInput";

const Page = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  console.log("On login page.");

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  return (
    <>
      <div className="h-[100vh] bg-white flex items-center space-between w-full flex-col sm:flex-row">
        <div className="bg-gray-800 sm:h-full h-1/2 flex items-center px-10 w-full justify-center flex-col">
          <h1 className="text-center text-white">
            Log into your account
          </h1>
          <p className="text-gray-600 text-center pb-2">
            Enter your credentials to log into the platform
          </p>
        </div>

        <div className="p-5 sm:p-20 w-full">
          <form>
            <LabelInput
              label="Email"
              id="email"
              type="email"
              value={email}
              onChange={handleEmailChange}
              placeholder="Enter your email"
              required
              className="mb-3"
            />
            <LabelInput
              label="Password"
              id="password"
              type="password"
              value={password}
              onChange={handlePasswordChange}
              placeholder="Enter your password"
              className="mb-3"
              required
            />
            <div className="flex justify-end">
              <button
                type="submit"
                className="bg-gray-800 text-white px-4 py-2 rounded-md text-sm hover:bg-black "
              >
                <p>Submit</p>
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Page;

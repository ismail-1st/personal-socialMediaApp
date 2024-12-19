'use client'

import { useState } from "react";
import LabelInput from "../components/labelInput";

const Page = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  
  console.log("On login page.");

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  return (
    <>
      <div className="h-[100vh] bg-white flex items-center space-between gap-10 w-full">
        <h1 className="text-center text-white bg-black h-full flex items-center px-10">Log into your account</h1>

        <div className="m-5">
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
            />
            <button
              type="submit"
              className="bg-black text-white px-4 py-2 rounded-md"
            >
              <p>Submit</p>
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Page;

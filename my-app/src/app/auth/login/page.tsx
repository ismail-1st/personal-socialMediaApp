"use client";

import { useState } from "react";
import LabelInput from "@/app/components/labelInput";
import { handleSubmit as handleLogin } from "@/app/shared/functions";
import { toast } from 'react-toastify';
import { useRouter } from "next/navigation";  

const Page = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  const router = useRouter();

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault(); // Prevent default form behavior (page reload)
    try {
      setLoading(true);
      await handleLogin({ name:"", email, pass:password });
      toast.success("Logged in successfully!");
      router.push("/");
      // console.log("Logged in successfully.");
    } catch (e) {
      console.log("An error occurred: ", e);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className="h-[100vh] bg-white flex items-center space-between w-full flex-col sm:flex-row">
        <div className="bg-gray-800 sm:h-full h-1/2 flex items-center px-10 w-full justify-center flex-col">
          <h1 className="text-center text-white">Log into your account</h1>
          <p className="text-center pb-2">
            Enter your credentials to log into the platform
          </p>
        </div>

        <div className="p-5 sm:p-20 w-full">
          <form onSubmit={onSubmit}>
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
            <div className="flex justify-start gap-5 items-end">
              <button
                type="submit"
                className="bg-gray-800 text-white px-4 py-2 rounded-md text-sm hover:bg-black"
              >
                {loading ? <div className="loader"></div> : <p>Login</p>}
              </button>

              <a className="text-gray-800" href="/signup">
                <p>Don't have an account? Click to create one!</p>
              </a>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Page;

'use server';
import { login, signup } from "../services/services";
import { cookies } from "next/headers";

// intialize cookies
export const getCookieStore = async () => {
  const cookieStore = await cookies();
  return cookieStore;
};

export const handleSubmit = async ({name = "", email = "", pass = ""}: {name: string, email: string, pass: string}) => {
    if (name && email && pass) {
        try {
            await signup({name, email, pass});
        } catch (e) {
            console.log("An error occurred while signing up: ", e);
        }
    }
    else if (email && pass) {
        try {
            await login({email, pass});
        } catch (e) {
            console.log("An error occurred while logging in: ", e);
        }
    }
}
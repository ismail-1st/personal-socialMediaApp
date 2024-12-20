'use server';
import { getCookieStore } from "../shared/functions";

const baseUrl = process.env.BACKEND_URL;

// endpoint: "/"
export const base = async () => {
  try {
    const request = await fetch(`${baseUrl}/`, {
      method: "GET",
    });

    if (!request.ok) {
      throw new Error(`HTTP error! status: ${request.status}`);
    }

    const response = await request.json();
    console.log(request);
    return response;
  } catch (e) {
    console.log("An error occurred:", e);
  }
};

// endpoint: "/login"
type LoginCredentials = {
  email: string;
  pass: string;
};

type LoginResponse = {
  token: string;
  message: string;
};

export const login = async ({ email, pass }: LoginCredentials): Promise<LoginResponse> => {
  const cookieStore = await getCookieStore();
  try {
    const response = await fetch(`${baseUrl}/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password: pass,
      }),
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || "Login failed");
    }

    const data: LoginResponse = await response.json();
    cookieStore.set("token", data.token);
    return data;
  } catch (e: any) {
    console.error("Error during login:", e);
    throw new Error(e.message || "An unexpected error occurred");
  }
};


// endpoint: "/signup"
type SignupCredentials = {
  name: string;
  email: string;
  pass: string;
};

type SignupResponse = {
  token: string;
  message: string;
};

export const signup = async ({ name, email, pass }: SignupCredentials): Promise<SignupResponse> => {
  const cookieStore = await getCookieStore();
  try {
    const response = await fetch(`${baseUrl}/signup`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        password: pass,
      }),
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || "Signup failed");
    }

    const data: SignupResponse = await response.json();
    cookieStore.set("token", data.token);
    return data;
  } catch (e: any) {
    console.error("Error during signup:", e);
    throw new Error(e.message || "An unexpected error occurred");
  }
};
'use server';

// endpoint: "/"
const baseUrl = process.env.BACKEND_URL;
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
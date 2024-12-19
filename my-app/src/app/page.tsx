"use client";
import { useEffect, useState } from "react";
import { base } from "@/app/services/services";
import {useRouter} from "next/navigation";

export default function Home() {

  const router = useRouter();
  useEffect(() => {
    router.push("/login");
  }, []);

  // const [data, setData] = useState<any>(null);
  // const [loading, setLoading] = useState<boolean>(true);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const data = await base();
  //       setData(data);
  //       return data;
  //     } catch (e) {
  //       console.log(e);
  //     } finally {
  //       setLoading(false);
  //     }
  //   };

  //   fetchData();
  // }, []);

  return (
    <div className="m-auto">
      {/* {loading ? (
        <p>Loading...</p>
      ) : (
        <h1>{data.message}</h1>
      )} */}
      <p>
        Redirecting...
      </p>
    </div>
  );
}
"use client";
import { useEffect, useState } from "react";
import {useRouter} from "next/navigation";
import Cookies from "js-cookie";

export default function Home() {
  const [redirecting, setRedirecting] = useState(false);

  const router = useRouter();
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
      {redirecting ? (
              <p>
              Redirecting...
            </p>
      ) : (
        <>
          <p>Main feed page</p>
        </>
      )}

    </div>
  );
}
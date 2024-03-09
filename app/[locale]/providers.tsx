"use client";
import { NextUIProvider } from "@nextui-org/react";
import { useRouter } from "next/navigation";
import React from "react";

export function Providers({ children }: { children: React.ReactNode }) {
  const router = useRouter();

  // const getTokenKey = async () => {
  //   try {
  //     const res = await axios.get(
  //       process.env.NEXT_PUBLIC_MCLINIC_API_URL + "/medicalrecord/GetToken",
  //       {
  //         headers: {
  //           api_key: process.env.NEXT_PUBLIC_MCLINIC_API_KEY,
  //         },
  //       }
  //     );
  //     // console.log(res.data);
  //     getLanguages(res.data.Data.auth_key);
  //     localStorage.setItem("token_key", JSON.stringify(res.data.Data.auth_key));
  //     localStorage.setItem(
  //       "ExpireTimeUTC",
  //       JSON.stringify(res.data.Data.ExpireTimeUTC)
  //     );
  //   } catch (error) {
  //     // Handle errors
  //     return error;
  //   }
  // };

  // const getLanguages = async (tokenKey: any) => {
  //   try {
  //     const res = await axios.get(
  //       process.env.NEXT_PUBLIC_MCLINIC_API_URL + "/medicalrecord/GetLanguages",
  //       {
  //         headers: {
  //           token_key: tokenKey,
  //         },
  //       }
  //     );
  //     console.log(res.data);
  //     localStorage.setItem("languages", JSON.stringify(res.data.Data));
  //   } catch (error) {
  //     // Handle errors
  //     return error;
  //   }
  // };

  // useEffect(() => {
  //   const token_key = localStorage.getItem("token_key") || "";
  //   if (token_key == "") getTokenKey();
  // }, []);

  return <NextUIProvider navigate={router.push}>{children}</NextUIProvider>;
}

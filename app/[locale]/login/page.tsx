"use client";
import { useState } from "react";
import { Button, Input, Link } from "@nextui-org/react";
import { useTranslations } from "next-intl";
import { FORGOT_PASSWORD, REGISTER } from "../../../route";

export default function App() {
  const t = useTranslations();

  const [isVisible, setIsVisible] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const toggleVisibility = () => setIsVisible(!isVisible);

  // const getAccount = async (authKey: any) => {
  //   try {
  //     const res = await axios.get(
  //       process.env.NEXT_PUBLIC_MCLINIC_API_URL + "/medicalrecord/GetAccount",
  //       {
  //         headers: {
  //           auth_key: authKey,
  //         },
  //       }
  //     );
  //     if (res.data.Success == false) {
  //       console.log(t(`Data.ErrorCode.${res.data.ErrorCode}`));
  //       return;
  //     }
  //     localStorage.setItem("account", JSON.stringify(res.data.Data));
  //     // console.log(res.data);
  //   } catch (error) {
  //     // Handle errors
  //     return error;
  //   }
  // };

  // const handleLogin = async () => {
  //   try {
  //     const res = await axios.post(
  //       process.env.NEXT_PUBLIC_MCLINIC_API_URL + "/medicalrecord/Login",
  //       {
  //         UserName: email,
  //         Password: password,
  //         RememberMe: true,
  //         LanguageID: "00000000-0000-0000-0000-000000000001",
  //         DeviceUUId: null,
  //       },
  //       {
  //         headers: {
  //           api_key: process.env.NEXT_PUBLIC_MCLINIC_API_KEY,
  //         },
  //       }
  //     );
  //     if (res.data.Success == false) {
  //       toast.error(t(`Data.ErrorCode.${res.data.ErrorCode}`));
  //       return;
  //     }
  //     localStorage.setItem("auth_key", JSON.stringify(res.data.Data.auth_key));
  //     getAccount(res.data.Data.auth_key);
  //     router.push(HOME);
  //     console.log(res.data);
  //   } catch (error) {
  //     // Handle errors
  //     return error;
  //   }
  // };

  return (
    <div>
      <section className="bg-gray-50 dark:bg-gray-900">
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
          <div className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
            <img className="h-14 mr-2" src="/dym.svg" alt="logo" />
          </div>
          <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                {t("auth.signIn.title")}
              </h1>
              <form className="space-y-4 md:space-y-6" action="#">
                <Input
                  type="text"
                  label={t("Data.Login.Username")}
                  variant="bordered"
                  className=""
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />

                <Input
                  label={t("Data.Login.Password")}
                  variant="bordered"
                  type="password"
                  className=""
                  name="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <div className="flex items-center justify-between">
                  <div className="flex items-start">
                    <div className="flex items-center h-5">
                      <input
                        id="remember"
                        aria-describedby="remember"
                        type="checkbox"
                        className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
                        required
                      />
                    </div>
                    <div className="ml-3 text-sm">
                      <label
                        htmlFor="remember"
                        className="text-gray-500 dark:text-gray-300"
                      >
                        {t("auth.signIn.rememberMe")}
                      </label>
                    </div>
                  </div>
                  <Link href={FORGOT_PASSWORD}>
                    <p className="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500">
                      {t("Data.Login.ButtonForgotPassword")}
                    </p>
                  </Link>
                </div>
                <Button
                  color="primary"
                  className="w-full"
                // onClick={() => handleLogin()}
                >
                  {t("Data.Login.ButtonLogin")}
                </Button>
                <div className="flex font-light text-gray-500 dark:text-gray-400">
                  <p className="mr-1">{t("Data.Login.RegisterTitle")}</p>
                  <Link href={REGISTER}>
                    <p className="font-medium text-primary-600 hover:underline dark:text-primary-500">
                      {t("Data.Login.ButtonRegister")}
                    </p>
                  </Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

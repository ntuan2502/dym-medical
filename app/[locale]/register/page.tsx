"use client";
import { useEffect, useState } from "react";
import {
  Button,
  Input,
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  useDisclosure,
  Link,
} from "@nextui-org/react";
import { useTranslations } from "next-intl";
import axios from "axios";
import { useParams } from "next/navigation";
import { LOGIN } from "@/route";

export default function App() {
  const t = useTranslations();
  const params = useParams();
  const locale = params.locale.toString();

  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [isAgree, setIsAgree] = useState(false);
  const [fullName, setFullName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [day, setDay] = useState("");
  const [month, setMonth] = useState("");
  const [year, setYear] = useState("");
  const [gender, setGender] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [termsAndPrivacy, setTermsAndPrivacy] = useState("");

  const getTermsAndPrivacy = async () => {
    try {
      const res = await axios.get(
        process.env.NEXT_PUBLIC_NEWSAPI_URL +
          "/api/terms-of-service?locale=" +
          locale
      );
      // console.log(res.data.data.attributes.description);
      setTermsAndPrivacy(res.data.data.attributes.description);
    } catch (error) {
      // Handle errors
      return error;
    }
  };

  useEffect(() => {
    getTermsAndPrivacy();
  }, []);

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
                {t("auth.signUp.title")}
              </h1>
              <form className="space-y-4 md:space-y-6" action="#">
                <div className="space-y-4 md:space-y-6">
                  <Input
                    type="text"
                    label={t("Data.Register.FullName")}
                    variant="bordered"
                    name="fullName"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                  />
                  <Input
                    type="text"
                    label={t("Data.Register.Phone")}
                    variant="bordered"
                    name="phoneNumber"
                    value={phoneNumber}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <Input
                    type="text"
                    label={t("Data.Register.Day")}
                    variant="bordered"
                    name="day"
                    value={day}
                    onChange={(e) => setDay(e.target.value)}
                  />
                  <Input
                    type="text"
                    label={t("Data.Register.Month")}
                    variant="bordered"
                    name="month"
                    value={month}
                    onChange={(e) => setMonth(e.target.value)}
                  />
                  <Input
                    type="text"
                    label={t("Data.Register.Year")}
                    variant="bordered"
                    name="year"
                    value={year}
                    onChange={(e) => setYear(e.target.value)}
                  />
                  <Input
                    type="text"
                    label={t("Data.Register.Gender")}
                    variant="bordered"
                    name="gender"
                    value={gender}
                    onChange={(e) => setGender(e.target.value)}
                  />
                </div>
                <div className="space-y-4 md:space-y-6">
                  <Input
                    type="text"
                    label={t("Data.Register.EmailPlaceholder")}
                    variant="bordered"
                    name="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <Input
                    type="password"
                    label={t("Data.Register.Password")}
                    variant="bordered"
                    name="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <Input
                    type="password"
                    label={t("Data.Register.ConfirmPassword")}
                    variant="bordered"
                    name="confirmPassword"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                  />
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-start">
                    <div className="flex items-center h-5">
                      <input
                        id="remember"
                        aria-describedby="remember"
                        type="checkbox"
                        className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
                        required
                        disabled
                        checked={isAgree}
                      />
                    </div>
                    <div className="ml-3 text-sm">
                      <label
                        htmlFor="remember"
                        className="text-gray-500 dark:text-gray-300"
                      >
                        <p className="mr-1">{t("Data.Register.Checkbox1")}</p>
                        <a href="#" onClick={onOpen} className="text-blue-500">
                          {t("Data.Register.Checkbox2")}
                        </a>
                      </label>
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-start"></div>
                  <Link href={LOGIN}>
                    <p className="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500">
                      {t("auth.signIn.alreadyHaveAccount")}
                    </p>
                  </Link>
                </div>
                <Button color="primary" className="w-full">
                  {t("auth.signUp.text")}
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>
      <Modal
        size="5xl"
        placement="center"
        backdrop="blur"
        scrollBehavior="inside"
        isOpen={isOpen}
        onOpenChange={onOpenChange}
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                Terms & Privacy
              </ModalHeader>
              <ModalBody>
                <div
                  dangerouslySetInnerHTML={{ __html: termsAndPrivacy }}
                ></div>
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  Close
                </Button>
                <Button
                  color="primary"
                  onPress={() => {
                    onClose();
                    setIsAgree(true);
                  }}
                >
                  Agree
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </div>
  );
}

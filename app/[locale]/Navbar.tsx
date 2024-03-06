"use client";
import React, { useEffect, useState } from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
  DropdownItem,
  DropdownTrigger,
  Dropdown,
  DropdownMenu,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  Avatar,
  Accordion,
  AccordionItem,
} from "@nextui-org/react";
import {
  ChevronDown,
  Lock,
  Activity,
  Flash,
  Server,
  TagUser,
  Scale,
} from "./components/svg/Icons";
import { useTranslations } from "next-intl";
import { useParams, useRouter, usePathname } from "next/navigation";
import { BRANCH, CONTACT, HOME, LOGIN, REGISTER, STORY } from "@/route";

export default function App() {
  const t = useTranslations();
  const pathname = usePathname();
  const router = useRouter();
  const params = useParams();
  const locale = params.locale.toString();

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState(
    locale == "vi"
      ? t("Data.Language.VI")
      : locale == "en"
      ? t("Data.Language.EN")
      : locale == "ja"
      ? t("Data.Language.JA")
      : t("Data.Language.VI")
  );

  const [account, setAccount] = useState<string | null>("");

  // useEffect(() => {
  //   setAccount(localStorage.getItem("account"));
  //   console.log(account);
  // }, [account]);

  const [selectedKeys, setSelectedKeys] = useState(new Set([locale]));

  const icons = {
    chevron: (
      <ChevronDown
        fill="currentColor"
        size={16}
        height={undefined}
        width={undefined}
      />
    ),
    scale: (
      <Scale
        className="text-warning"
        fill="currentColor"
        size={30}
        height={undefined}
        width={undefined}
      />
    ),
    lock: (
      <Lock
        className="text-success"
        fill="currentColor"
        size={30}
        height={undefined}
        width={undefined}
      />
    ),
    activity: (
      <Activity
        className="text-secondary"
        fill="currentColor"
        size={30}
        height={undefined}
        width={undefined}
      />
    ),
    flash: (
      <Flash
        className="text-primary"
        fill="currentColor"
        size={30}
        height={undefined}
        width={undefined}
      />
    ),
    server: (
      <Server
        className="text-success"
        fill="currentColor"
        size={30}
        height={undefined}
        width={undefined}
      />
    ),
    user: (
      <TagUser
        className="text-danger"
        fill="currentColor"
        size={30}
        height={undefined}
        width={undefined}
      />
    ),
  };

  return (
    <Navbar maxWidth="xl">
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
        <NavbarBrand>
          <Link href={HOME}>
            <img src="/dym.svg" className="h-10" />
          </Link>
          {/* <AcmeLogo /> */}
          {/* <p className="font-bold text-inherit">DYM</p> */}
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <Dropdown>
          <NavbarItem>
            <DropdownTrigger>
              <Button
                disableRipple
                className="p-0 bg-transparent data-[hover=true]:bg-transparent text-md"
                endContent={icons.chevron}
                radius="sm"
                variant="light"
              >
                {t("UI.Navbar.Introduce")}
              </Button>
            </DropdownTrigger>
          </NavbarItem>
          <DropdownMenu
            aria-label="ACME features"
            className="w-[340px]"
            itemClasses={{
              base: "gap-4",
            }}
          >
            <DropdownItem
              key="autoscaling"
              // description="ACME scales apps to meet user demand, automagically, based on load."
              startContent={icons.scale}
              onClick={() => router.push(STORY)}
              className="text-black dark:text-white"
            >
              {t("UI.Navbar.DYMStory")}
            </DropdownItem>
            <DropdownItem
              key="usage_metrics"
              // description="Real-time metrics to debug issues. Slow query added? We’ll show you exactly where."
              startContent={icons.activity}
              onClick={() => router.push(BRANCH)}
              className="text-black dark:text-white"
            >
              {t("UI.Navbar.OurBranch")}
            </DropdownItem>
            <DropdownItem
              key="production_ready"
              // description="ACME runs on ACME, join us and others serving requests at web scale."
              startContent={icons.flash}
              className="text-black dark:text-white"
            >
              {t("UI.Navbar.WorkingTime")}
            </DropdownItem>
            <DropdownItem
              key="99_uptime"
              // description="Applications stay on the grid with high availability and high uptime guarantees."
              startContent={icons.server}
              className="text-black dark:text-white"
            >
              {t("UI.Navbar.ServicePriceList")}
            </DropdownItem>
            <DropdownItem
              key="supreme_support"
              // description="Overcome any challenge with a supporting team ready to respond."
              startContent={icons.user}
              className="text-black dark:text-white"
            >
              {t("UI.Navbar.License")}
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
        <NavbarItem>
          <Link href={CONTACT} color="foreground">
            {t("UI.Navbar.Contact")}
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link href="#" color="foreground">
            {t("UI.Navbar.News")}
          </Link>
        </NavbarItem>
      </NavbarContent>

      {account != "" ? (
        <NavbarContent as="div" justify="end">
          <Dropdown placement="bottom-end">
            <DropdownTrigger>
              <Avatar
                isBordered
                as="button"
                className="transition-transform"
                color="secondary"
                name="Jason Hughes"
                size="sm"
                src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
              />
            </DropdownTrigger>
            <DropdownMenu aria-label="Profile Actions" variant="flat">
              <DropdownItem key="profile" className="h-14 gap-2">
                <p className="font-semibold">Signed in as</p>
                <p className="font-semibold">abc@gmail.com</p>
              </DropdownItem>
              <DropdownItem key="settings">My Settings</DropdownItem>
              <DropdownItem key="team_settings">Team Settings</DropdownItem>
              <DropdownItem key="analytics">Analytics</DropdownItem>
              <DropdownItem key="system">System</DropdownItem>
              <DropdownItem key="configurations">Configurations</DropdownItem>
              <DropdownItem key="help_and_feedback">
                Help & Feedback
              </DropdownItem>
              <DropdownItem
                key="logout"
                color="danger"
                onClick={() => {
                  // setAccount("");
                  // localStorage.setItem("account", "");
                  // localStorage.setItem("auth_key", "");
                  router.push(LOGIN);
                }}
              >
                Log Out
              </DropdownItem>
            </DropdownMenu>
          </Dropdown>
        </NavbarContent>
      ) : (
        <NavbarContent className="hidden lg:flex" justify="end">
          <NavbarItem>
            <Link href={LOGIN}>{t("auth.signIn.text")}</Link>
          </NavbarItem>
          <NavbarItem>
            <Button as={Link} color="primary" href={REGISTER} variant="flat">
              {t("auth.signUp.text")}
            </Button>
          </NavbarItem>
        </NavbarContent>
      )}

      <NavbarMenu>
        <Accordion>
          <AccordionItem key="1" aria-label="Giới thiệu" title="Giới thiệu">
            <Link
              className="w-full py-1"
              href={STORY}
              size="lg"
              color="foreground"
            >
              Câu chuyện DYM
            </Link>
            <Link
              className="w-full py-1"
              href={BRANCH}
              size="lg"
              color="foreground"
            >
              Hệ thống phòng khám
            </Link>
            <Link className="w-full py-1" href="#" size="lg" color="foreground">
              Thời gian làm việc
            </Link>
            <Link className="w-full py-1" href="#" size="lg" color="foreground">
              Bảng giá dịch vụ
            </Link>
            <Link className="w-full py-1" href="#" size="lg" color="foreground">
              Giấy phép làm việc
            </Link>
          </AccordionItem>
        </Accordion>
        <Link
          className="w-full px-2 py-3"
          href={CONTACT}
          size="lg"
          color="foreground"
        >
          Liên hệ
        </Link>
        <Link
          className="w-full px-2 py-3"
          href="#"
          size="lg"
          color="foreground"
        >
          Tin tức
        </Link>
      </NavbarMenu>

      <Dropdown>
        <DropdownTrigger>
          <Button variant="bordered" className="capitalize">
            {selectedValue}
          </Button>
        </DropdownTrigger>
        <DropdownMenu
          aria-label="Single selection example"
          variant="flat"
          disallowEmptySelection
          selectionMode="single"
          selectedKeys={selectedKeys}
          onSelectionChange={() => setSelectedKeys}
        >
          <DropdownItem
            onClick={() => {
              router.push("/vi" + pathname.slice(3));
              setSelectedValue(t("Data.Language.VI"));
            }}
            key="vi"
          >
            {t("Data.Language.VI")}
          </DropdownItem>
          <DropdownItem
            onClick={() => {
              router.push("/en" + pathname.slice(3));
              setSelectedValue(t("Data.Language.EN"));
            }}
            key="en"
          >
            {t("Data.Language.EN")}
          </DropdownItem>
          <DropdownItem
            onClick={() => {
              router.push("/ja" + pathname.slice(3));
              setSelectedValue(t("Data.Language.JA"));
            }}
            key="ja"
          >
            {t("Data.Language.JA")}
          </DropdownItem>
        </DropdownMenu>
      </Dropdown>
    </Navbar>
  );
}

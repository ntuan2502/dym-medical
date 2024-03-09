"use client";
import { BOOKING, BOOKING_HCM_D1, HOME } from "@/route";
import {
  BreadcrumbItem,
  Breadcrumbs,
  Link,
} from "@nextui-org/react";
import { useTranslations } from "next-intl";

export default function Appointment() {
  const t = useTranslations();
  return (
    <div>
      <Breadcrumbs underline="hover" className="py-2 px-4">
        <BreadcrumbItem>
          <Link href={HOME} className="text-gray-500 text-md">
            {t("UI.Navbar.Home")}
          </Link>
        </BreadcrumbItem>
        <BreadcrumbItem>
          <Link href={BOOKING} className="text-gray-500 text-md">
            {t("UI.Home.Hero.Booking")}
          </Link>
        </BreadcrumbItem>
        <BreadcrumbItem>
          <Link href={BOOKING_HCM_D1} className="text-gray-500 text-md">
            {t("UI.Branch.HCM.D1.Name")}
          </Link>
        </BreadcrumbItem>
        <BreadcrumbItem> {t("UI.Navbar.Details")}</BreadcrumbItem>
      </Breadcrumbs>
      <div className="bg-white">
        <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:max-w-7xl lg:px-8">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900">
            Chi tiết khám
          </h2>
        </div>
      </div>
    </div>
  );
}

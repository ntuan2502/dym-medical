"use client";
import { APPOINTMENT, BOOKING, HOME } from "@/route";
import {
  Accordion,
  AccordionItem,
  BreadcrumbItem,
  Breadcrumbs,
  Button,
  Link,
} from "@nextui-org/react";
import { useTranslations } from "next-intl";

const outpatientServices = [
  {
    name: "Khám chuyên gia",
    href: "#",
    imageSrc: "/dym.svg",
    imageAlt: "",
    price: "1.000.000 VND +",
    content: "Khám chuyên gia",
  },
  {
    name: "Khám nội",
    href: "#",
    imageSrc: "/dym.svg",
    imageAlt: "",
    price: "1.000.000 VND +",
    content: "Khám nội",
  },
  {
    name: "Khám Tai mũi họng",
    href: "#",
    imageSrc: "/dym.svg",
    imageAlt: "",
    price: "1.000.000 VND +",
    content: "Khám Tai mũi họng",
  },
  {
    name: "Khám răng hàm mặt",
    href: "#",
    imageSrc: "/dym.svg",
    imageAlt: "",
    price: "1.000.000 VND +",
    content: "Khám răng hàm mặt",
  },
  {
    name: "Khám mắt",
    href: "#",
    imageSrc: "/dym.svg",
    imageAlt: "",
    price: "1.000.000 VND +",
    content: "Khám mắt",
  },
  {
    name: "Khám phụ khoa",
    href: "#",
    imageSrc: "/dym.svg",
    imageAlt: "",
    price: "1.000.000 VND +",
    content: "Khám phụ khoa",
  },
];

const japaneseHC = [
  {
    name: "Khám sức khỏe tổng quát cơ bản Nam",
    href: "#",
    imageSrc: "/dym.svg",
    imageAlt: "",
    price: "1.000.000 VND +",
    content: "Khám sức khỏe tổng quát cơ bản Nam",
  },
  {
    name: "Khám sức khỏe tổng quát cơ bản Nữ",
    href: "#",
    imageSrc: "/dym.svg",
    imageAlt: "",
    price: "1.000.000 VND +",
    content: "Khám sức khỏe tổng quát cơ bản Nữ",
  },
  {
    name: "Khám sức khỏe tổng quát tiêu chuẩn Nam 30 tuổi",
    href: "#",
    imageSrc: "/dym.svg",
    imageAlt: "",
    price: "1.000.000 VND +",
    content: "Khám sức khỏe tổng quát tiêu chuẩn Nam 30 tuổi",
  },
  {
    name: "Khám sức khỏe tổng quát tiêu chuẩn Nữ 30 tuổi",
    href: "#",
    imageSrc: "/dym.svg",
    imageAlt: "",
    price: "1.000.000 VND +",
    content: "Khám sức khỏe tổng quát tiêu chuẩn Nữ 30 tuổi",
  },
  {
    name: "Khám sức khỏe tổng quát tiêu chuẩn Nam 40 tuổi",
    href: "#",
    imageSrc: "/dym.svg",
    imageAlt: "",
    price: "1.000.000 VND +",
    content: "Khám sức khỏe tổng quát tiêu chuẩn Nam 40 tuổi",
  },
  {
    name: "Khám sức khỏe tổng quát tiêu chuẩn Nữ 40 tuổi",
    href: "#",
    imageSrc: "/dym.svg",
    imageAlt: "",
    price: "1.000.000 VND +",
    content: "Khám sức khỏe tổng quát tiêu chuẩn Nữ 40 tuổi",
  },
  {
    name: "Khám sức khỏe tổng quát có nội soi Nam 30 tuổi",
    href: "#",
    imageSrc: "/dym.svg",
    imageAlt: "",
    price: "1.000.000 VND +",
    content: "Khám sức khỏe tổng quát có nội soi Nam 30 tuổi",
  },
  {
    name: "Khám sức khỏe tổng quát có nội soi Nữ 30 tuổi",
    href: "#",
    imageSrc: "/dym.svg",
    imageAlt: "",
    price: "1.000.000 VND +",
    content: "Khám sức khỏe tổng quát có nội soi Nữ 30 tuổi",
  },
  {
    name: "Khám sức khỏe tổng quát có nội soi Nam 40 tuổi",
    href: "#",
    imageSrc: "/dym.svg",
    imageAlt: "",
    price: "1.000.000 VND +",
    content: "Khám sức khỏe tổng quát có nội soi Nam 40 tuổi",
  },
  {
    name: "Khám sức khỏe tổng quát có nội soi Nữ 40 tuổi",
    href: "#",
    imageSrc: "/dym.svg",
    imageAlt: "",
    price: "1.000.000 VND +",
    content: "Khám sức khỏe tổng quát có nội soi Nữ 40 tuổi",
  },
];

const vietnameseHC = [
  {
    name: "Khám sức khỏe tổng quát cơ bản Nam",
    href: "#",
    imageSrc: "/dym.svg",
    imageAlt: "",
    price: "1.000.000 VND +",
    content: "Khám sức khỏe tổng quát cơ bản Nam",
  },
  {
    name: "Khám sức khỏe tổng quát cơ bản Nữ độc thân",
    href: "#",
    imageSrc: "/dym.svg",
    imageAlt: "",
    price: "1.000.000 VND +",
    content: "Khám sức khỏe tổng quát cơ bản Nữ độc thân",
  },
  {
    name: "Khám sức khỏe tổng quát cơ bản Nữ kết hôn",
    href: "#",
    imageSrc: "/dym.svg",
    imageAlt: "",
    price: "1.000.000 VND +",
    content: "Khám sức khỏe tổng quát cơ bản Nữ kết hôn",
  },
  {
    name: "Khám sức khỏe tổng quát tiêu chuẩn Nam",
    href: "#",
    imageSrc: "/dym.svg",
    imageAlt: "",
    price: "1.000.000 VND +",
    content: "Khám sức khỏe tổng quát tiêu chuẩn Nam",
  },
  {
    name: "Khám sức khỏe tổng quát tiêu chuẩn Nữ độc thân",
    href: "#",
    imageSrc: "/dym.svg",
    imageAlt: "",
    price: "1.000.000 VND +",
    content: "Khám sức khỏe tổng quát tiêu chuẩn Nữ độc thân",
  },
  {
    name: "Khám sức khỏe tổng quát tiêu chuẩn Nữ kết hôn",
    href: "#",
    imageSrc: "/dym.svg",
    imageAlt: "",
    price: "1.000.000 VND +",
    content: "Khám sức khỏe tổng quát tiêu chuẩn Nữ kết hôn",
  },
  {
    name: "Khám sức khỏe tổng quát nâng cao Nam",
    href: "#",
    imageSrc: "/dym.svg",
    imageAlt: "",
    price: "1.000.000 VND +",
    content: "Khám sức khỏe tổng quát nâng cao Nam",
  },
  {
    name: "Khám sức khỏe tổng quát nâng cao Nữ độc thân",
    href: "#",
    imageSrc: "/dym.svg",
    imageAlt: "",
    price: "1.000.000 VND +",
    content: "Khám sức khỏe tổng quát nâng cao Nữ độc thân",
  },
  {
    name: "Khám sức khỏe tổng quát nâng cao Nữ kết hôn",
    href: "#",
    imageSrc: "/dym.svg",
    imageAlt: "",
    price: "1.000.000 VND +",
    content: "Khám sức khỏe tổng quát nâng cao Nữ kết hôn",
  },
];

const wpHC = [
  {
    name: "Khám sức khỏe làm việc",
    href: "#",
    imageSrc: "/dym.svg",
    imageAlt: "",
    price: "1.000.000 VND +",
    content: "Khám sức khỏe dành cho người lao động nước ngoài tại Việt Nam",
  },
];

export default function BookingHCMD1() {
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
        <BreadcrumbItem>{t("UI.Branch.HCM.D1.Name")}</BreadcrumbItem>
      </Breadcrumbs>
      <div className="bg-white">
        <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:max-w-7xl lg:px-8">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900">
            Chọn loại dịch vụ
          </h2>

          <Accordion>
            <AccordionItem
              key="1"
              aria-label="Khám sức khỏe cho khách lẻ"
              title="Khám sức khỏe cho khách lẻ"
            >
              <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
                {outpatientServices.map((product, key) => (
                  <div key={key} className="group relative">
                    <div className="aspect-h-1 aspect-w-1 w-60 h-60 overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75">
                      <img
                        src={product.imageSrc}
                        alt={product.imageAlt}
                        className="h-full w-full p-5"
                      />
                    </div>
                    <div className="mt-4">
                      <h3 className="text-gray-700">
                        <a href={product.href}>{product.name}</a>
                      </h3>
                      <p className="font-medium text-gray-900">
                        {product.price}
                      </p>
                    </div>
                    <Accordion>
                      <AccordionItem
                        key="1"
                        aria-label="Xem chi tiết"
                        title="Xem chi tiết"
                      >
                        {product.content}
                      </AccordionItem>
                    </Accordion>
                    <Link
                      href={APPOINTMENT}
                      className="mx-1 py-2 px-4 bg-blue-500 text-white rounded-xl"
                    >
                      Đặt lịch khám
                    </Link>
                  </div>
                ))}
              </div>
            </AccordionItem>
            <AccordionItem
              key="2"
              aria-label="Khám sức khỏe cho người Nhật"
              title="Khám sức khỏe cho người Nhật"
            >
              <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
                {japaneseHC.map((product, key) => (
                  <div key={key} className="group relative">
                    <div className="aspect-h-1 aspect-w-1 w-60 h-60 overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75">
                      <img
                        src={product.imageSrc}
                        alt={product.imageAlt}
                        className="h-full w-full p-5"
                      />
                    </div>
                    <div className="mt-4">
                      <h3 className="text-gray-700">
                        <a href={product.href}>{product.name}</a>
                      </h3>
                      <p className="font-medium text-gray-900">
                        {product.price}
                      </p>
                    </div>
                    <Accordion>
                      <AccordionItem
                        key="1"
                        aria-label="Xem chi tiết"
                        title="Xem chi tiết"
                      >
                        {product.content}
                      </AccordionItem>
                    </Accordion>
                    <Button color="danger" className="mt-3">
                      Đặt lịch khám
                    </Button>
                  </div>
                ))}
              </div>
            </AccordionItem>
            <AccordionItem
              key="3"
              aria-label="Khám sức khỏe cho người Việt Nam"
              title="Khám sức khỏe cho người Việt Nam"
            >
              <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
                {vietnameseHC.map((product, key) => (
                  <div key={key} className="group relative">
                    <div className="aspect-h-1 aspect-w-1 w-60 h-60 overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75">
                      <img
                        src={product.imageSrc}
                        alt={product.imageAlt}
                        className="h-full w-full p-5"
                      />
                    </div>
                    <div className="mt-4">
                      <h3 className="text-gray-700">
                        <a href={product.href}>{product.name}</a>
                      </h3>
                      <p className="font-medium text-gray-900">
                        {product.price}
                      </p>
                    </div>
                    <Accordion>
                      <AccordionItem
                        key="1"
                        aria-label="Xem chi tiết"
                        title="Xem chi tiết"
                      >
                        {product.content}
                      </AccordionItem>
                    </Accordion>
                    <Button color="danger" className="mt-3">
                      Đặt lịch khám
                    </Button>
                  </div>
                ))}
              </div>
            </AccordionItem>
            <AccordionItem
              key="4"
              aria-label="Khám sức khỏe làm việc"
              title="Khám sức khỏe làm việc"
            >
              <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
                {wpHC.map((product, key) => (
                  <div key={key} className="group relative">
                    <div className="aspect-h-1 aspect-w-1 w-60 h-60 overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75">
                      <img
                        src={product.imageSrc}
                        alt={product.imageAlt}
                        className="h-full w-full p-5"
                      />
                    </div>
                    <div className="mt-4">
                      <h3 className="text-gray-700">
                        <a href={product.href}>{product.name}</a>
                      </h3>
                      <p className="font-medium text-gray-900">
                        {product.price}
                      </p>
                    </div>
                    <Accordion>
                      <AccordionItem
                        key="1"
                        aria-label="Xem chi tiết"
                        title="Xem chi tiết"
                      >
                        {product.content}
                      </AccordionItem>
                    </Accordion>
                    <Button color="danger" className="mt-3">
                      Đặt lịch khám
                    </Button>
                  </div>
                ))}
              </div>
            </AccordionItem>
          </Accordion>

          {/* {isOpen ? (
            <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
              {typeOfServices.map((product, key) => (
                <div key={key} className="group relative">
                  <div className="aspect-h-1 aspect-w-1 w-60 h-60 overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75">
                    <img
                      src={product.imageSrc}
                      alt={product.imageAlt}
                      className="h-full w-full p-5"
                    />
                  </div>
                  <div className="mt-4">
                    <h3 className="text-gray-700">
                      <a href={product.href}>{product.name}</a>
                    </h3>
                    <p className="font-medium text-gray-900">{product.price}</p>
                  </div>
                  <Accordion>
                    <AccordionItem
                      key="1"
                      aria-label="Xem chi tiết"
                      title="Xem chi tiết"
                    >
                      {product.content}
                    </AccordionItem>
                  </Accordion>
                  <Button color="danger" className="mt-3">
                    Đặt lịch khám
                  </Button>
                </div>
              ))}
            </div>
          ) : (
            ""
          )} */}
        </div>
      </div>
    </div>
  );
}

"use client";
import { HOME } from "@/route";
import { BreadcrumbItem, Breadcrumbs, Link } from "@nextui-org/react";
import { useTranslations } from "next-intl";

export default function App() {
  const t = useTranslations();
  return (
    <div>
      <div className="relative isolate overflow-hidden bg-white px-6 py-4 lg:overflow-visible lg:px-0">
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <svg
            className="absolute left-[max(50%,25rem)] top-0 h-[64rem] w-[128rem] -translate-x-1/2 stroke-gray-200 [mask-image:radial-gradient(64rem_64rem_at_top,white,transparent)]"
            aria-hidden="true"
          >
            <defs>
              <pattern
                id="e813992c-7d03-4cc4-a2bd-151760b470a0"
                width={200}
                height={200}
                x="50%"
                y={-1}
                patternUnits="userSpaceOnUse"
              >
                <path d="M100 200V.5M.5 .5H200" fill="none" />
              </pattern>
            </defs>
            <svg x="50%" y={-1} className="overflow-visible fill-gray-50">
              <path
                d="M-100.5 0h201v201h-201Z M699.5 0h201v201h-201Z M499.5 400h201v201h-201Z M-300.5 600h201v201h-201Z"
                strokeWidth={0}
              />
            </svg>
            <rect
              width="100%"
              height="100%"
              strokeWidth={0}
              fill="url(#e813992c-7d03-4cc4-a2bd-151760b470a0)"
            />
          </svg>
        </div>
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
          <div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
            <div className="">
              <div className="lg:max-w-lg">
                <Breadcrumbs underline="hover" className="py-2">
                  <BreadcrumbItem>
                    <Link href={HOME} className="text-gray-500 text-md">
                    {t("Data.General.Home")}
                    </Link>
                  </BreadcrumbItem>
                  <BreadcrumbItem>Câu chuyện từ nhà sáng lập</BreadcrumbItem>
                </Breadcrumbs>
                <p className="text-base font-semibold leading-7 text-indigo-600">
                  Yuki Mizutani - CEO DYM Group
                </p>
                <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                  Câu chuyện từ nhà sáng lập
                </h1>
                <p className="mt-6 text-xl leading-8 text-gray-700">
                  Ông Yuki Mizutani là nhà sáng lập DYM Group có trụ sở tại
                  Shinagawa - ku, Tokyo, điều hành các phòng khám nội khoa, nhi
                  khoa và trung tâm kiểm tra sức khỏe ở Nhật Bản cũng như nước
                  ngoài. Bên cạnh đó, ông cũng là bác sĩ tại Trường Y của Đại
                  học Kyorin.
                </p>
              </div>
            </div>
          </div>
          <div className="lg:pr-10 lg:pt-20 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
            <img
              className="w-full max-w-none rounded-xl bg-gray-900 shadow-xl ring-1 ring-gray-400/10 "
              src="https://dymmedicalcenter.com.vn/wp-content/uploads/2023/12/%E3%80%90%E6%8E%A8%E5%A5%A8%E3%80%919-scaled.jpg"
              alt=""
            />
          </div>
          <div className="lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
            <div className="">
              <div className="max-w-xl text-base leading-7 text-gray-700 lg:max-w-lg">
                <p>
                  Chúng tôi là tập đoàn Y tế DYM đến từ Nhật Bản cung cấp các
                  dịch vụ chăm sức khỏe, phòng ngừa và điều trị bệnh cho khoảng
                  250.000 người mỗi năm trên toàn thế giới Nhật Bản, Hoa Kỳ,
                  Hồng Kông, Thái Lan, Việt Nam.
                </p>
                <p className="mt-8">
                  Tập đoàn DYM là một công ty Nhật Bản cung cấp các dịch vụ y tế
                  như nội khoa, nhi khoa và khám sức khỏe chủ yếu cho người Nhật
                  Bản, trong đó có cả khách du lịch và các nhân viên làm việc
                  tại công ty Nhật Bản ở hệ thống phòng khám DYM trên toàn thế
                  giới. Các cơ sở phòng khám của DYM được đặt tại những quốc gia
                  lớn như: Thái Lan, Hoa Kỳ, Hồng Kông, Việt Nam,... và đang dần
                  phát triển thị trường ở các nước khác.
                </p>
                <p className="mt-8">
                  Khi xây dựng hệ thống phòng khám tại Việt Nam, chúng tôi hi
                  vọng sẽ mang đến dịch vụ xuất sắc cũng như tạo dựng môi trường
                  y tế lành mạnh cho quý khách hàng.
                </p>
                <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900">
                  Cung cấp dịch vụ chăm sóc y tế an toàn, thân thuộc nhằm hỗ trợ
                  cuộc sống khỏe mạnh và trọn vẹn - Đây là sứ mệnh của DYM.
                </h2>
                <p className="mt-6"></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

"use client";
import { HOME, NEWS } from "@/route";
import { BreadcrumbItem, Breadcrumbs, Link } from "@nextui-org/react";
import axios from "axios";
import { useTranslations } from "next-intl";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import Loading from "../components/Loading";

export default function News() {
  const t = useTranslations();
  const params = useParams();
  const locale = params.locale.toString();
  const [news, setNews] = useState();

  const getNews = async () => {
    try {
      const res = await axios.get(
        process.env.NEXT_PUBLIC_NEWSAPI_URL +
          "/api/posts?pagination[page]=1&pagination[pageSize]=25&populate=thumbnail&sort=publishedAt:DESC&locale=" +
          locale
      );
      setNews(res.data.data);
      // console.log(res.data.data);
    } catch (error) {
      return error;
    }
  };

  useEffect(() => {
    getNews();
  }, []);

  if (news == null) return <Loading />;

  return (
    <div>
      <Breadcrumbs underline="hover" className="py-2 px-4">
        <BreadcrumbItem>
          <Link href={HOME} className="text-gray-500 text-md">
            {t("UI.Navbar.Home")}
          </Link>
        </BreadcrumbItem>
        <BreadcrumbItem>{t("UI.Navbar.News")}</BreadcrumbItem>
      </Breadcrumbs>
      <div className="bg-white">
        <div className="mx-auto max-w-2xl px-4 sm:px-6 md:max-w-screen-xl">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900">
            {/* {t("UI.Navbar.News")} */}
          </h2>
          {news.map((item, key) => (
            <Link
              key={key}
              href={NEWS + "/" + item.attributes.slug}
              className="py-2 my-2 flex flex-col bg-white rounded-lg sm:flex-row hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
            >
              <div className="flex justify-center items-center">
                <img
                  className="object-cover h-40 w-fit min-w-72 rounded-lg"
                  src={
                    process.env.NEXT_PUBLIC_NEWSAPI_URL +
                    item.attributes.thumbnail.data.attributes.url
                  }
                  alt=""
                />
              </div>
              <div className="flex justify-center items-center px-4">
                <h5 className="mb-2 text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
                  {item.attributes.title}
                </h5>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

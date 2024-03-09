"use client";
import { HOME, NEWS } from "@/route";
import { BreadcrumbItem, Breadcrumbs, Link } from "@nextui-org/react";
import axios from "axios";
import { useTranslations } from "next-intl";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import Loading from "../../components/Loading";

export default function NewDetail() {
  const t = useTranslations();
  const params = useParams();
  const locale = params.locale.toString();
  const [news, setNews] = useState();

  const getNews = async () => {
    try {
      const res = await axios.get(
        process.env.NEXT_PUBLIC_NEWSAPI_URL +
          "/api/posts?populate=category,thumbnail&filters[slug][$eq]=" +
          params.slug +
          "&locale=" +
          locale
      );
      setNews(res.data.data[0]);
      console.log(res.data.data[0]);
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
        <BreadcrumbItem>
          <Link href={NEWS} className="text-gray-500 text-md">
            {t("UI.Navbar.News")}
          </Link>
        </BreadcrumbItem>
        <BreadcrumbItem>{news.attributes.title}</BreadcrumbItem>
      </Breadcrumbs>
      <div className="bg-white">
        <div className="mx-auto max-w-2xl px-4 sm:px-6 md:max-w-screen-xl">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900">
            {news.attributes.title}
          </h2>
          <div
            className="max-w-2xl mx-auto"
            dangerouslySetInnerHTML={{ __html: news.attributes.description }}
          />
        </div>
      </div>
    </div>
  );
}

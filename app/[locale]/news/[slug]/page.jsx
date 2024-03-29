'use client';
import { HOME, NEWS } from '@/route';
import { BreadcrumbItem, Breadcrumbs, Link } from '@nextui-org/react';
import axios from 'axios';
import { useTranslations } from 'next-intl';
import { useParams, useRouter, usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import Loading from '../../components/Loading';

export default function NewDetail() {
    const t = useTranslations();
    const params = useParams();
    const router = useRouter();
    const pathname = usePathname();
    const locale = params.locale.toString();
    const slug = params.slug.toString();
    const [news, setNews] = useState();

    const getNews = async () => {
        try {
            const res = await axios.get(
                process.env.NEXT_PUBLIC_NEWSAPI_URL +
                    '/api/posts?populate=category,thumbnail&filters[slug][$eq]=' +
                    params.slug +
                    '&locale=' +
                    locale,
            );
            setNews(res.data.data[0]);
            if (res.data.data[0] == undefined) {
                router.push('/' + locale + pathname.slice(3).replace(slug, ''));
            }
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
                        {t('Data.General.Home')}
                    </Link>
                </BreadcrumbItem>
                <BreadcrumbItem>
                    <Link href={NEWS} className="text-gray-500 text-md">
                        {t('Data.General.News')}
                    </Link>
                </BreadcrumbItem>
                <BreadcrumbItem>
                    <div className="text-wrap">{news.attributes.title}</div>
                </BreadcrumbItem>
            </Breadcrumbs>
            <div className="bg-white px-4 ">
                <h2 className="text-2xl font-bold tracking-tight text-gray-900">{/* {news.attributes.title} */}</h2>
                <div
                    className="mx-auto max-w-3xl"
                    dangerouslySetInnerHTML={{
                        __html: news.attributes.description.replaceAll(
                            process.env.NEXT_PUBLIC_NEWSAPI_URL_HTTP,
                            process.env.NEXT_PUBLIC_NEWSAPI_URL,
                        ),
                    }}
                />
            </div>
        </div>
    );
}

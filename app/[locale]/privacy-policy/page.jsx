'use client';
import { HOME } from '@/route';
import { BreadcrumbItem, Breadcrumbs, Link } from '@nextui-org/react';
import axios from 'axios';
import { useTranslations } from 'next-intl';
import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import Loading from '../components/Loading';

export default function PrivacyPolicy() {
    const t = useTranslations();
    const params = useParams();
    const locale = params.locale.toString();
    const [privacyPolicy, setPrivacyPolicy] = useState();

    const getPrivacyPolicy = async () => {
        try {
            const res = await axios.get(process.env.NEXT_PUBLIC_NEWSAPI_URL + '/api/terms-of-service?locale=' + locale);
            setPrivacyPolicy(res.data.data);
        } catch (error) {
            return error;
        }
    };

    useEffect(() => {
        getPrivacyPolicy();
    }, []);

    if (privacyPolicy == null) return <Loading />;

    return (
        <div>
            <Breadcrumbs underline="hover" className="py-2 px-4">
                <BreadcrumbItem>
                    <Link href={HOME} className="text-gray-500 text-md">
                        {t('Data.General.Home')}
                    </Link>
                </BreadcrumbItem>
                <BreadcrumbItem>
                    <div className="text-wrap">{privacyPolicy.attributes.name}</div>
                </BreadcrumbItem>
            </Breadcrumbs>
            <div className="bg-white px-4">
                <h2 className="text-2xl font-bold tracking-tight text-gray-900">{/* {news.attributes.title} */}</h2>
                <div
                    className="mx-auto max-w-3xl"
                    dangerouslySetInnerHTML={{
                        __html: privacyPolicy.attributes.description.replaceAll(
                            process.env.NEXT_PUBLIC_NEWSAPI_URL_HTTP,
                            process.env.NEXT_PUBLIC_NEWSAPI_URL,
                        ),
                    }}
                />
            </div>
        </div>
    );
}

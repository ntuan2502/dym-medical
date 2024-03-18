'use client';

import { Tabs, Tab, Card, CardBody, Link, Breadcrumbs, BreadcrumbItem, useDisclosure } from '@nextui-org/react';
import { BOOKING_HCM_D1, HOME } from '@/route';
import { useEffect, useState } from 'react';
import VideoModal from './VideoModal';
import { useTranslations } from 'next-intl';
import GalleryComponent from './GalleryComponent';
import axios from 'axios';
import { useParams } from 'next/navigation';
import Loading from '../components/Loading';

export default function Application() {
    const { isOpen, onOpen, onOpenChange } = useDisclosure();
    const [modalTitle, setModalTitle] = useState('');
    const [videoURL, setVideoURL] = useState('');
    const t = useTranslations();
    const params = useParams();
    const locale = params.locale.toString();
    const [branches, setBranches] = useState();

    const getBranches = async () => {
        try {
            const res = await axios.get(
                process.env.NEXT_PUBLIC_NEWSAPI_URL +
                    '/api/branches?populate=video,images&sort=rank:ASC&locale=' +
                    locale,
            );
            console.log(res.data.data);
            setBranches(res.data.data);
        } catch (error) {
            // Handle errors
            return error;
        }
    };

    useEffect(() => {
        getBranches();
    }, []);

    if (branches == null) return <Loading />;

    return (
        <div>
            <Breadcrumbs underline="hover" className="py-2 px-4">
                <BreadcrumbItem>
                    <Link href={HOME} className="text-gray-500 text-md">
                        {t('Data.General.Home')}
                    </Link>
                </BreadcrumbItem>
                <BreadcrumbItem>{t('UI.Home.Hero.Booking')}</BreadcrumbItem>
            </Breadcrumbs>
            <Tabs color="primary" aria-label="Options" className="flex justify-center items-center pt-5">
                <Tab key={t('UI.Branch.HCM.Name')} title={t('UI.Branch.HCM.Name')} className="py-5">
                    <Card>
                        <CardBody>
                            <div className="py-1 mx-auto">
                                <div className="grid-cols-1 sm:grid md:grid-cols-2">
                                    {branches.map((branch, key) =>
                                        branch.attributes.location == 'TP. Hồ Chí Minh' ? (
                                            <div
                                                key={key}
                                                className="mx-1 flex flex-col self-start rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700 sm:shrink-0 sm:grow sm:basis-0"
                                            >
                                                <GalleryComponent images={branch.attributes.images.data} />
                                                <div className="p-6">
                                                    <h5 className="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
                                                        {branch.attributes.name}
                                                    </h5>
                                                    <p className="mb-2 text-base text-neutral-600 dark:text-neutral-200">
                                                        {branch.attributes.address}
                                                    </p>
                                                    <p className="mb-2 text-base text-neutral-600 dark:text-neutral-200">
                                                        {branch.attributes.working_time}
                                                    </p>
                                                    <div className="mt-4">
                                                        <Link
                                                            href={`tel:${branch.attributes.phone}`}
                                                            className="mx-1 py-2 px-4 bg-rose-500 text-white rounded-xl"
                                                        >
                                                            {t('UI.Branch.Call')}
                                                        </Link>
                                                        <Link
                                                            href={BOOKING_HCM_D1}
                                                            className="mx-1 py-2 px-4 bg-blue-500 text-white rounded-xl"
                                                        >
                                                            {t('UI.Branch.Booking')}
                                                        </Link>
                                                        <Link
                                                            onClick={() => {
                                                                setModalTitle(branch.attributes.name);
                                                                setVideoURL(
                                                                    process.env.NEXT_PUBLIC_NEWSAPI_URL +
                                                                        branch.attributes.video.data.attributes.url,
                                                                );
                                                                onOpen();
                                                            }}
                                                            className="mx-1 py-2 my-4 px-4 bg-green-500 text-white rounded-xl cursor-pointer"
                                                        >
                                                            {t('UI.Branch.Video')}
                                                        </Link>
                                                    </div>
                                                </div>
                                            </div>
                                        ) : (
                                            ''
                                        ),
                                    )}
                                </div>
                            </div>
                        </CardBody>
                    </Card>
                </Tab>
                <Tab key={t('UI.Branch.HaNoi.Name')} title={t('UI.Branch.HaNoi.Name')} className="py-5">
                    <Card>
                        <CardBody>
                            <div className="py-1 mx-auto">
                                <div className="grid-cols-1 sm:grid md:grid-cols-2">
                                    {branches.map((branch, key) =>
                                        branch.attributes.location == 'Thủ đô Hà Nội' ? (
                                            <div
                                                key={key}
                                                className="mx-1 flex flex-col self-start rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700 sm:shrink-0 sm:grow sm:basis-0"
                                            >
                                                <GalleryComponent images={branch.attributes.images.data} />
                                                <div className="p-6">
                                                    <h5 className="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
                                                        {branch.attributes.name}
                                                    </h5>
                                                    <p className="mb-2 text-base text-neutral-600 dark:text-neutral-200">
                                                        {branch.attributes.address}
                                                    </p>
                                                    <p className="mb-2 text-base text-neutral-600 dark:text-neutral-200">
                                                        {branch.attributes.working_time}
                                                    </p>
                                                    <div className="mt-4">
                                                        <Link
                                                            href={`tel:${branch.attributes.phone}`}
                                                            className="mx-1 py-2 px-4 bg-rose-500 text-white rounded-xl"
                                                        >
                                                            {t('UI.Branch.Call')}
                                                        </Link>
                                                        <Link
                                                            href={BOOKING_HCM_D1}
                                                            className="mx-1 py-2 px-4 bg-blue-500 text-white rounded-xl"
                                                        >
                                                            {t('UI.Branch.Booking')}
                                                        </Link>
                                                        <Link
                                                            onClick={() => {
                                                                setModalTitle(branch.attributes.name);
                                                                setVideoURL(
                                                                    process.env.NEXT_PUBLIC_NEWSAPI_URL +
                                                                        branch.attributes.video.data.attributes.url,
                                                                );
                                                                onOpen();
                                                            }}
                                                            className="mx-1 py-2 my-4 px-4 bg-green-500 text-white rounded-xl cursor-pointer"
                                                        >
                                                            {t('UI.Branch.Video')}
                                                        </Link>
                                                    </div>
                                                </div>
                                            </div>
                                        ) : (
                                            ''
                                        ),
                                    )}
                                </div>
                            </div>
                        </CardBody>
                    </Card>
                </Tab>
            </Tabs>
            <VideoModal isOpen={isOpen} onOpenChange={onOpenChange} modalTitle={modalTitle} videoURL={videoURL} />
        </div>
    );
}

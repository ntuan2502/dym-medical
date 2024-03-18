'use client';
import ReactImageGallery from 'react-image-gallery';

export default function GalleryComponent({ images }) {
    const imageArray = [];
    images.forEach((image) => {
        imageArray.push({
            original: process.env.NEXT_PUBLIC_NEWSAPI_URL + image.attributes.url,
            thumbnail: process.env.NEXT_PUBLIC_NEWSAPI_URL + image.attributes.url,
        });
    });
    return (
        <>
            <ReactImageGallery
                items={imageArray}
                lazyLoad={true}
                showThumbnails={false}
                showNav={false}
                showFullscreenButton={false}
                showPlayButton={false}
                showBullets={true}
                autoPlay={true}
            />
        </>
    );
}

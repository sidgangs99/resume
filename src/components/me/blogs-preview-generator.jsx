import React, { useEffect, useState } from "react";
import axios from "axios";

import { linkPreviewKey, urlPreviewGeneratorLink } from '../../constants/links'
import CardComponent from "../templates/cardComponent";
import CardSkeletonComponent from "../templates/cardSkeleton";
import { useGetPreview } from './hooks/useGetPreview'

export default function BlogsPreviewGenerator({ url }) {
    const { data, isLoading } = useGetPreview(url)

    return (
        <div className="h-full w-full snap-center text-xs">
            {isLoading ? (
                <CardComponent
                    title={data?.title}
                    url={url}
                    description={data?.description}
                    image={data?.image}
                    siteName={data?.siteName}
                />
            ) : (
                <CardSkeletonComponent />
            )}
        </div>
    )
}

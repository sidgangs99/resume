import React, { useEffect } from 'react'
import { Status } from '../../constants/links'

import CardComponent from '../templates/cardComponent'
import CardSkeletonComponent from '../templates/cardSkeleton'
import { useGetBlogTitle } from './hooks/useGetBlogTitle'
import { useGetPreview } from './hooks/useGetPreview'

export default function BlogsPreviewGenerator({ url }) {
    const { data, status, error } = useGetPreview(url)
    const { title } = useGetBlogTitle(url)

    return (
        <div className="h-full w-full snap-center text-xs">
            {status === Status.loading && <CardSkeletonComponent url={url} />}
            {status === Status.error && (
                <CardComponent
                    title={title.toUpperCase()}
                    url={url}
                    description={
                        'Preview unavailable, facing errors. Click for direct access.'
                    }
                    errorMessage={error.message}
                    image={'https://picsum.photos/200/300'}
                />
            )}
            {status === Status.success && (
                <CardComponent
                    title={data?.title}
                    url={url}
                    description={data?.description}
                    image={data?.image}
                />
            )}
        </div>
    )
}

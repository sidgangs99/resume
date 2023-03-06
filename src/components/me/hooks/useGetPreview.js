import axios from 'axios'

import { useQuery } from 'react-query'
import {
    linkPreviewKey,
    urlPreviewGeneratorLink,
} from '../../../constants/links'

export const useGetPreview = (url) => {
    const { data, error, status } = useQuery(
        ['urlPreview', url],
        () =>
            axios.post(urlPreviewGeneratorLink, {
                key: linkPreviewKey,
                q: url,
            }),
        {
            keepPreviousData: true,
            staleTime: 120000,
            retry: 0,
            refetchOnWindowFocus: false,
            refetchOnReconnect: false,
        }
    )

    return { status, data: data?.data, error }
}

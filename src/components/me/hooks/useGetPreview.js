import axios from 'axios'

import { useQuery } from 'react-query'
import {
    fallbackUrlPreviewGeneratorLink,
    linkPreviewKey,
    peekALinkKey,
    urlPreviewGeneratorLink,
} from '../../../constants/links'

// https://www.peekalink.io/app/overview
const setPeekALinkServer = (url) => {
    return {
        endpoint: urlPreviewGeneratorLink,
        headers: { 'X-API-KEY': peekALinkKey },
        data: { link: url },
    }
}

// https://www.linkpreview.net/
const setLinkPreviewServer = (url) => {
    return {
        headers: {},
        data: { key: linkPreviewKey, q: url },
        endpoint: fallbackUrlPreviewGeneratorLink,
    }
}

export const useGetPreview = (url) => {
    const api = setPeekALinkServer(url)

    const { data, error, status } = useQuery(
        ['urlPreview', url],
        () => axios.post(api.endpoint, api.data, { headers: api.headers }),
        {
            keepPreviousData: true,
            staleTime: 120000,
            retry: (failureCount, error) => {
                if (error && api.endpoint !== fallbackUrlPreviewGeneratorLink) {
                    setLinkPreviewServer(url)
                    return true
                }
                return false
            },
            refetchOnWindowFocus: false,
            refetchOnReconnect: false,
        }
    )

    console.log({ status })
    return { status, data: data?.data, error }
}

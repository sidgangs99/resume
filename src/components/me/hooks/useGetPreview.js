import axios from 'axios'

import { useQuery } from 'react-query'
import {
    linkPreviewKey,
    urlPreviewGeneratorLink,
} from '../../../constants/links'

export const useGetPreview = (url) => {
    const { isLoading, error, data } = useQuery(
        ['urlPreview', url],
        () => {
            axios.post(urlPreviewGeneratorLink, {
                key: linkPreviewKey,
                q: url,
            })
        },
        { keepPreviousData: true, staleTime: 120000, enabled: false }
    )

    return { isLoading, data: data?.data, error }
}

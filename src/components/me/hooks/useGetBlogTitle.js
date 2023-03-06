export const useGetBlogTitle = (url) => {
    const title = url.split('/').pop()
    const formatTitle = title.split('-')
    formatTitle.pop()

    return { title: formatTitle.join(' ') }
}

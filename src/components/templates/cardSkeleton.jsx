import React from 'react'

export default function CardSkeletonComponent(props) {
    const { url } = props
    return (
        <>
            <div className="flex h-full w-full  items-center justify-center ">
                <a
                    className="delay-50 h-80 w-60 space-y-4 rounded-lg border border-lime-900 p-5 duration-100 hover:border-lime-700 hover:bg-neutral-800"
                    href={url}
                    target="_blank"
                    rel="noreferrer"
                >
                    <div
                        alt="blog preview"
                        className="h-24 animate-pulse rounded bg-lime-100 object-cover opacity-70"
                    />
                    <p className=" h-3 animate-pulse rounded bg-lime-100 " />
                    <div className="animate-pulse space-y-3">
                        <div className="grid grid-cols-3 gap-4">
                            <div className="col-span-2 h-2 rounded bg-lime-100"></div>
                            <div className="col-span-1 h-2 rounded bg-lime-100"></div>
                        </div>
                        <div className="grid grid-cols-3 gap-4">
                            <div className="col-span-2 h-2 rounded bg-lime-100"></div>
                            <div className="col-span-1 h-2 rounded bg-lime-100"></div>
                        </div>
                        <div className="h-2 rounded bg-lime-100"></div>
                        <div className="h-2 rounded bg-lime-100"></div>

                        <div className="grid grid-cols-3 gap-4">
                            <div className="col-span-2 h-2 rounded bg-lime-100"></div>
                            <div className="col-span-1 h-2 rounded bg-lime-100"></div>
                        </div>
                        <div className="h-2 rounded bg-lime-100"></div>
                    </div>
                </a>
            </div>
            <div className="static flex w-full flex-row-reverse px-2 text-lime-300">
                <a
                    className="delay-50 -mt-4 w-2/4 rounded-lg border border-lime-900 bg-neutral-900 py-2 px-4 "
                    href={url}
                    target="_blank"
                    rel="noreferrer"
                >
                    <p className="h-2 animate-pulse rounded bg-neutral-400 " />
                </a>
            </div>
        </>
    )
}

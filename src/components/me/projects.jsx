import React from 'react'
import { krudAppLink } from '../../constants/links'

export default function Projects() {
    return (
        <div className="flex h-screen w-screen flex-col items-center justify-around text-lime-300">
            <div className="flex flex-col items-center justify-center space-y-8">
                <h1 className="font-mono md:text-lg">Introducing</h1>
                <a href={krudAppLink} target="_blank" rel="noreferrer">
                    <h1 className="flex cursor-pointer items-end bg-white from-red-400 to-orange-400 hover:from-orange-500 hover:to-yellow-500 bg-clip-text font-sans text-4xl md:text-8xl font-extrabold tracking-wide text-transparent bg-gradient-to-r">
                        KRUD
                    </h1>
                </a>
                <a href={krudAppLink} target="_blank" rel="noreferrer">
                    <p className="font-mono text-red-400 text-xl md:text-3xl">
                        A no code db designer and script generator
                    </p>
                </a>
            </div>
            <div className="flex w-screen  animate-pulse flex-col items-center justify-center">
                <p>Launching soon ...</p>
            </div>
        </div>
    )
}

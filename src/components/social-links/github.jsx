import React from 'react'

import { profileLinks } from '../../constants/links'
import GithubIcon from '../../images/icons/github-icon'

export default function Github() {
    return (
        <a href={profileLinks.github} target="_blank" rel="noreferrer">
            <div className="h-4 w-4 fill-zinc-400">
                <GithubIcon />
            </div>
        </a>
    )
}

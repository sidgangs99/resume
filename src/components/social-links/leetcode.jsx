import React from 'react'

import { profileLinks } from '../../constants/links'
import LeetcodeIcon from '../../images/icons/leetcode-icon'

export default function Leetcode() {
    return (
        <a href={profileLinks.leetcode} target="_blank" rel="noreferrer">
            <div className="h-4 w-4 fill-zinc-400">
                <LeetcodeIcon />
            </div>
        </a>
    )
}

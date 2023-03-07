import React from "react";
import SwipeUpIcon from "../../images/icons/swipe-up";

export default function About() {
  return (
      <div className="flex h-screen w-screen flex-col items-center justify-around text-lime-300">
          <div
              class="badge-base LI-profile-badge"
              data-locale="en_US"
              data-size="medium"
              data-theme="light"
              data-type="VERTICAL"
              data-vanity="siddharth-gangwar"
              data-version="v1"
          >
              <a
                  class="badge-base__link LI-simple-link"
                  href="https://in.linkedin.com/in/siddharth-gangwar?trk=profile-badge"
              >
                  <h1 className="mb-1 font-mono text-4xl md:text-6xl">
                      Hi, I'm <br className="block md:hidden" />
                      <span className="text-brand-accent inline-flex animate-type overflow-x-hidden whitespace-nowrap py-2 group-hover:animate-type-reverse">
                          Siddharth <p className="pl-6">👋</p>
                      </span>
                  </h1>
              </a>
          </div>
          <div className="flex w-screen  animate-bounce flex-col items-center justify-center">
              <p>Swipe up to know more</p>
              <div className="h-4 w-4 fill-lime-300">
                  <SwipeUpIcon />
              </div>
          </div>
      </div>
  )
}

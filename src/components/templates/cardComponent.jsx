import React from "react";

export default function CardComponent({ image, description, title, url }) {
  return (
    <>
      <div className="flex h-full w-full items-center justify-center ">
        <a
          className="delay-50 h-80 w-60 space-y-4 rounded-lg border border-lime-900 p-5 duration-100 hover:border-lime-700 hover:bg-neutral-800"
          href={url}
          target="_blank"
          rel="noreferrer"
        >
          <img
            src={image}
            alt="blog preview"
            className="h-24 w-48 rounded object-cover opacity-70"
          />
          <h3 className="text-ellipsis font-bold text-lime-500">{title}</h3>
          <p className="overflow-hidden text-ellipsis text-xs font-light text-lime-100">
            {description}
          </p>
        </a>
      </div>
      <div className="static flex w-full flex-row-reverse px-2 text-lime-300">
        <a
          className="delay-50 -mt-4 rounded-lg border border-lime-900 bg-neutral-900 py-2 px-4 duration-100 hover:border-lime-700 hover:bg-neutral-800"
          href={url}
          target="_blank"
          rel="noreferrer"
        >
          Read more
        </a>
      </div>
    </>
  );
}

import React, { useEffect, useState } from "react";
import axios from "axios";

import { urlPreviewGeneratorLink } from "../../constants/links";
import CardComponent from "../templates/cardComponent";
import CardSkeletonComponent from "../templates/cardSkeleton";

export default function BlogsPreviewGenerator({ url }) {
  const [previewData, setPreviewData] = useState({});

  useEffect(() => {
    axios
      .get(`${urlPreviewGeneratorLink}`, {
        params: { url: url },
      })
      .then(({ data }) => {
        const { metadata } = data;
        setPreviewData(metadata);
      });
  }, [url]);

  useEffect(() => {
    console.log(Object.keys(previewData));
  }, [previewData]);

  return (
    <div className="h-full w-full snap-center text-xs">
      {Object.keys(previewData).length > 0 ? (
        <CardComponent
          title={previewData.title}
          url={url}
          description={previewData.description}
          image={previewData.image}
          siteName={previewData.siteName}
        />
      ) : (
        <CardSkeletonComponent />
      )}
    </div>
  );
}

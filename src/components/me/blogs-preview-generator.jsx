import React, { useEffect, useState } from "react";

import { urlPreviewGeneratorLink } from "../../constants/links";
import axios from "axios";
import CardComponent from "../templates/cardComponent";

export default function BlogsPreviewGenerator({ url }) {
  const [previewData, setPreviewData] = useState({});

  useEffect(() => {
    axios
      .get(`${urlPreviewGeneratorLink}`, {
        // headers: { "Access-Control-Allow-Origin": "*" },
        params: { url: url },
      })
      .then(({ data }) => {
        const { metadata } = data;
        setPreviewData(metadata);
      });
  }, [url]);

  return (
    <div className="h-full w-full snap-center text-xs">
      <CardComponent
        title={previewData.title}
        url={previewData.url}
        description={previewData.description}
        image={previewData.image}
        siteName={previewData.siteName}
      />
    </div>
  );
}

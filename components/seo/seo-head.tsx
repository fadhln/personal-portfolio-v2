import Head from "next/head";
import React from "react";
import { Meta } from "types/components/Meta";

const SeoHead: React.FC<{ metadata: Meta }> = ({ metadata }) => {
  return (
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta charSet="utf-8" />
      {metadata.metaDescription && (
        <meta name="description" content={metadata.metaDescription} />
      )}
      <title>{metadata.metaTitle}</title>

      {/* Open Graph Meta Tags */}
      {metadata.shareImage && (
        <meta
          property="og:image"
          content={metadata.shareImage.image.data.attributes.formats.small.url}
          key="ogimage"
        />
      )}
      <meta
        property="og:site_name"
        content={"Muhammad Fadhlan Portfolio"}
        key="ogsitename"
      />
      {metadata.metaTitle && (
        <meta property="og:title" content={metadata.metaTitle} key="ogtitle" />
      )}
      {metadata.metaDescription && (
        <meta
          property="og:description"
          content={metadata.metaDescription}
          key="ogdesc"
        />
      )}

      {/* Twitter Meta Tags */}
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:creator" content="@m_fadhln" />
      <meta name="twitter:site" content="@m_fadhln" />
    </Head>
  );
};

export default SeoHead;

import { type ReactNode } from "react";
import Head from "next/head";

export interface Props {
  children?: ReactNode;
  pageTitle: string;
  description: string;
  keywords?: string;
  title?: string;
  url: string;
  image?: string;
}

const SEO = ({
  children,
  pageTitle,
  description,
  keywords,
  title,
  url,
  image = "/static/images/open-graph.png",
}: Props) => {
  return (
    <Head>
      <title>{pageTitle}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      <meta property="og:title" content={title ? title : pageTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:site_name" content="theCHARlister" />
      <meta property="og:image" content={image} />
      <meta
        name="twitter:card"
        content={image ? "summary_large_image" : "summary"}
      />
      {children}
    </Head>
  );
};

export default SEO;

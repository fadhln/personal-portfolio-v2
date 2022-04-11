import React from "react";
import type { Meta } from "../../types/components/Meta";
import Footer from "../footer/footer";
import NavBar from "../navbar/navbar";
import SeoHead from "../seo/seo-head";

interface PageContainerProps {
  children: any;
  metadata: Meta;
}

const PageContainer: React.FC<React.PropsWithChildren<PageContainerProps>> = (
  { children, metadata },
  props
) => {
  return (
    <>
      <SeoHead metadata={metadata} />
      <div className="w-full h-screen">
        <NavBar />
        <main>
          <div className="min-h-screen py-20">
            <div className="container px-8 mx-auto">
              <div {...props}>{children}</div>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default PageContainer;

import PageContainer from "components/page-container/page-container";
import NotFoundLayout from "layouts/not-found/not-found.layout";
import React from "react";
import { Meta } from "types/components/Meta";

const NotFound = () => {
  const metadata: Meta = {
    metaTitle: "Page Not Found - Muhammad Fadhlan",
    metaDescription: "This page is not found on the site.",
  };
  return (
    <PageContainer metadata={metadata}>
      <NotFoundLayout />
    </PageContainer>
  );
};

export default NotFound;

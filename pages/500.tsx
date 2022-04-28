import PageContainer from "components/page-container/page-container";
import InternalErrorLayout from "layouts/internal-error/internal-error.layout";
import { NextPage } from "next";
import React from "react";
import { Meta } from "types/components/Meta";

const InternalError: NextPage = () => {
  const metadata: Meta = {
    metaTitle: "Internal Server Error - Muhammad Fadhlan",
    metaDescription: "This is an Error page for fadhln.dev",
  };
  return (
    <PageContainer metadata={metadata}>
      <InternalErrorLayout />
    </PageContainer>
  );
};

export default InternalError;

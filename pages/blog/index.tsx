import PageContainer from "components/page-container/page-container";
import ComingSoonLayout from "layouts/coming-soon/coming-soon.layout";
import React from "react";
import { Meta } from "types/components/Meta";

// TODO: Implement blog pages (Coming soon ...)
const Blog = () => {
  const metadata: Meta = {
    metaTitle: "Blog - Muhammad Fadhlan",
    metaDescription: "The blog is coming soon.",
  };

  return (
    <PageContainer metadata={metadata}>
      <ComingSoonLayout />
    </PageContainer>
  );
};

export default Blog;

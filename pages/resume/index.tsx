import type { GetStaticProps, GetStaticPropsContext, NextPage } from "next";
import React from "react";

import qs from "qs";
import axios from "axios";
import { ResumePage } from "types/ResumePage";
import PageContainer from "components/page-container/page-container";
import ResumeLayout from "layouts/resume/resume.layout";

interface ResumeProps {
  data: ResumePage;
}

const Resume: NextPage<ResumeProps> = ({ data }) => {
  if (data) {
    return (
      <PageContainer metadata={data.attributes.metadata[0]}>
        <ResumeLayout data={data} />
      </PageContainer>
    );
  }
  return <></>;
};

export const getStaticProps: GetStaticProps = async (
  context: GetStaticPropsContext
) => {
  const url = process.env.API_URL;
  const query = qs.stringify({
    populate: [
      "*",
      "academicSection",
      "proffesionalSection",
      "activitiesSection",
      "achievementSection",
      "certificatesSection",
      "metadata",
      "metadata.shareImage",
      "metadata.shareImage.image",
    ],
  });

  try {
    const res = await axios.get(`${url}/api/resume-page?${query}`);
    const { data } = res.data;
    return {
      props: {
        data,
      },
    };
  } catch (error) {
    console.log(error);
    return {
      props: {
        data: null,
      },
      // Revalidate once every day
      revalidate: 60 * 24,
    };
  }
};

export default Resume;

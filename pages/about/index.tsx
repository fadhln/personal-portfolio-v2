import type { GetStaticProps, GetStaticPropsContext, NextPage } from "next";
import { AboutPage } from "types/AboutPage";

import qs from "qs";
import axios from "axios";
import PageContainer from "components/page-container/page-container";
import AboutLayout from "layouts/about/about.layout";

const About: NextPage<{ data: AboutPage }> = ({ data }) => {
  if (data) {
    return (
      <PageContainer metadata={data.attributes.metadata}>
        <AboutLayout data={data} />
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
      "image",
      "image.image",
      "metadata",
      "metadata.shareImage",
      "metadata.shareImage.image",
    ],
  });

  try {
    const res = await axios.get(`${url}/api/about-page?${query}`);
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

export default About;

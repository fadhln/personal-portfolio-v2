import axios from "axios";
import type { GetStaticProps, GetStaticPropsContext, NextPage } from "next";
import NavBar from "../components/navbar/navbar";
import SeoHead from "../components/seo/seo-head";
import { Homepage } from "../types/Homepage";

import qs from "qs";
import Typography from "../components/base/typography/typography";
import Footer from "../components/footer/footer";
import PageContainer from "../components/page-container/page-container";

const Home: NextPage<{ data: Homepage }> = ({ data }) => {
  if (data) {
    return (
      <PageContainer metadata={data.attributes.metadata}>
        {"lalalala"}
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
      "navigationPhoto",
      "navigationPhoto.image",
      "metadata",
      "metadata.shareImage",
      "metadata.shareImage.image",
    ],
  });

  try {
    const res = await axios.get(`${url}/api/homepage?${query}`);
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
    };
  }
};

export default Home;

import axios from "axios";
import type { GetStaticProps, GetStaticPropsContext, NextPage } from "next";
import { Homepage } from "types/Homepage";

import qs from "qs";
import PageContainer from "components/page-container/page-container";
import HomeLayout from "layouts/home/home.layout";

const Home: NextPage<{ data: Homepage }> = ({ data }) => {
  if (data) {
    return (
      <PageContainer metadata={data.attributes.metadata}>
        <HomeLayout data={data} />
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
      // Revalidate once every day
      revalidate: 60 * 24,
    };
  } catch (error) {
    console.log(error);
    return {
      props: {
        data: null,
      },
      revalidate: 30,
    };
  }
};

export default Home;

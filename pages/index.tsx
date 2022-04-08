import axios from "axios";
import type { GetStaticProps, GetStaticPropsContext, NextPage } from "next";
import NavBar from "../components/navbar/navbar";
import SeoHead from "../components/seo/seo-head";
import { Homepage } from "../types/Homepage";
var qs = require("qs");

const Home: NextPage<{ data: Homepage }> = ({ data }) => {
  if (Boolean(data)) {
    return (
      <>
        <SeoHead metadata={data.attributes.metadata} />
        <div className={"bg-base-900 h-screen w-screen"}>
          <NavBar />
        </div>
      </>
    );
  } else {
    return <></>;
  }
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
    const data = res.data.data;
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

import { GetStaticProps, GetStaticPropsContext, NextPage } from "next";
import React from "react";
import qs from "qs";
import axios from "axios";
import type { FooterType } from "../../types/FooterType";
import Typography from "../base/typography/typography";

// TODO Implement SSR in component
const Footer: NextPage<{ data: FooterType }> = ({ data }) => {
  console.log("🚀 ~ file: footer.tsx ~ line 9 ~ data", data);
  return (
    <footer>
      <div>
        <Typography>aa{JSON.stringify(data)}</Typography>
      </div>
    </footer>
  );
};

export const getStaticProps: GetStaticProps = async (
  context: GetStaticPropsContext
) => {
  const url = process.env.API_URL;
  const query = qs.stringify({
    populate: ["*"],
  });

  try {
    const res = await axios.get(`${url}/api/footer?${query}`);
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

export default Footer;

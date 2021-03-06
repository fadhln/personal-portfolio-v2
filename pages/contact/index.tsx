import type { GetStaticProps, GetStaticPropsContext, NextPage } from "next";
import React from "react";

import qs from "qs";
import axios from "axios";
import { ContactMePage } from "types/ContactMePage";
import PageContainer from "components/page-container/page-container";
import ContactLayout from "layouts/contact/contact.layout";

interface ContactProps {
  data: ContactMePage;
}

const Contact: NextPage<ContactProps> = ({ data }) => {
  if (data) {
    return (
      <PageContainer metadata={data.attributes.metadata}>
        <ContactLayout data={data} />
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
      "metadata",
      "metadata.shareImage",
      "metadata.shareImage.image",
      "channels",
    ],
  });

  try {
    const res = await axios.get(`${url}/api/contact-me-page?${query}`);
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

export default Contact;

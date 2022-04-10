interface FooterMenuType {
  content: string;
  link: string;
}

export interface FooterType {
  menu: FooterMenuType[];
  subtitle: string;
  copyright: string;
}

export const FooterData = {
  menu: [
    {
      content: "ABOUT",
      link: "/about",
    },
    {
      content: "RESUME",
      link: "/resume",
    },
    {
      content: "BLOG",
      link: "/blog",
    },
    {
      content: "CONTACT",
      link: "/contact",
    },
  ],
  subtitle: "A Website by [Muhammad Fadhlan](/about)  \n7.7956° S, 110.3695° E",
  copyright: "copyright © 2022 all rights reserved",
};

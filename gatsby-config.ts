import type { GatsbyConfig } from "gatsby";

const config: GatsbyConfig = {
  siteMetadata: {
    title: `PT Excel`,
    siteUrl: `https://ptexcel.github.io/`,
  },
  // More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
  // If you use VSCode you can also use the GraphQL plugin
  // Learn more at: https://gatsby.dev/graphql-typegen
  graphqlTypegen: true,
  plugins: [
    "gatsby-plugin-styled-components",
    "gatsby-plugin-sass",
    {
      resolve: "gatsby-plugin-favicons",
      options: {
        logo: "./src/favicon.ico",
        appName: "PT Excel",
        background: "#fff",
        icons: {
          android: true,
          appleIcon: true,
          appleStartup: true,
          coast: false,
          favicons: true,
          yandex: false,
          windows: false,
        },
      },
    },
  ],
};

export default config;

import type { GatsbyNode } from "gatsby";
import { request } from "graphql-request";

type UserProfile = {
  firstName: string;
  lastName: string;
  features: string[];
  skillGraph: {
    skills: {
      id: string;
      value: string;
      content: string;
      percentage: string;
    };
  };
  backgroundImage: {
    url: string;
  };
  pictures: {
    url: string;
  };
  aboutMe: {
    html: string;
  };
  portfolioSummary: {
    html: string;
  };
  cv: {
    fileName: string;
    url: string;
  };
};

type Portfolio = {
  title: string;
  subTitle: string;
  technologies: string;
  displayOrder: number;
  image: {
    url: string;
  };
};

export const sourceNodes: GatsbyNode["sourceNodes"] = async ({
  actions,
  createNodeId,
  createContentDigest,
}) => {
  const { createNode } = actions;

  const { userProfile, portfolios } = await request(
    "https://api-ap-southeast-2.hygraph.com/v2/cl8kxng6b27zd01ue4gv0hdz8/master",
    `
        {
          portfolios {
            title
            subTitle
            technologies
            displayOrder
            image {
              url
            }
          }
            
          userProfile(where: {id: "cl8l9ozfq1tx70c2tvryy2acu"}) {
            firstName
            lastName
            features
            skillGraph
            backgroundImage {
              url
            }
            pictures {
              url
            }
            aboutMe {
              html
            }
            portfolioSummary {
              html
            }
            cv {
              fileName
              url
            }
          }
        }
        `
  );

  // create userProfile node
  userProfile;
  const node = {
    ...userProfile,
    parent: null,
    children: [],
    id: createNodeId(`portfolio__${userProfile.title}`),
    internal: {
      type: "UserProfile",
      content: JSON.stringify(userProfile),
      contentDigest: createContentDigest(userProfile),
    },
  };

  createNode(node);

  portfolios.forEach((portfolio: Portfolio) => {
    const node = {
      ...portfolio,
      parent: null,
      children: [],
      id: createNodeId(`portfolio__${portfolio.title}`),
      internal: {
        type: "Portfolio",
        content: JSON.stringify(portfolio),
        contentDigest: createContentDigest(portfolio),
      },
    };

    createNode(node);
  });
};

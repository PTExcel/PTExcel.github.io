import { graphql, PageProps } from "gatsby";
import * as React from "react";

const TypegenPage = ({ data }: PageProps<Queries.TypegenPageQuery>) => {
  return (
    <main>
      <p>Site title: {data.site?.siteMetadata?.title}</p>
      <p>Site title: {JSON.stringify(data.userProfile)}</p>
      <p>Site title: {JSON.stringify(data.allPortfolio)}</p>
      <hr />
      <p>Query Result:</p>
      <pre>
        <code>{JSON.stringify(data, null, 2)}</code>
      </pre>
    </main>
  );
};

export default TypegenPage;

export const query = graphql`
  query TypegenPage {
    site {
      siteMetadata {
        title
      }
    }
    userProfile {
      firstName
      lastName
      features
      skillGraph {
        skills {
          id
          value
          content
          percentage
        }
      }
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
    allPortfolio {
      nodes {
        id
        title
        subTitle
        technologies
        displayOrder
        image {
          url
        }
      }
    }
  }
`;

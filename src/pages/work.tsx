import { graphql, PageProps, HeadProps } from "gatsby";
import * as React from "react";
import Layout from "../components/layout";
import { DataProps } from "../constants";

const Work = ({ data }: PageProps<Queries.TypegenPageQuery>) => {
  return (
    <Layout>
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
    </Layout>
  );
};

export default Work;

export function Head(props: HeadProps<DataProps>) {
  return <title>`{props.data.site.siteMetadata.title} - Work`</title>;
}

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

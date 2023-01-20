import { graphql, PageProps } from "gatsby";
import * as React from "react";

const TypegenPage = ({ data }: PageProps<Queries.TypegenPageQuery>) => {
  return (
    <main>
      <p>Site title: {data.site?.siteMetadata?.title}</p>
      <hr />
      <p>Query Result:</p>
      <div>{JSON.stringify(data.allPerson.nodes, null, 2)}</div>
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
    allPerson {
      nodes {
        id
        name
        age
      }
    }
  }
`;

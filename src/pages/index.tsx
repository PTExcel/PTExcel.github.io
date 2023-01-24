import * as React from "react";
import ReactGA from "react-ga";
import { graphql, HeadProps, Link, PageProps } from "gatsby";
import Typed from "react-typed";
import Layout from "../components/layout";
import { DataProps } from "../constants";

const pageStyles = {
  color: "#232129",
  padding: 96,
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
};

const IndexPage = ({ data }: PageProps<Queries.Query>) => {
  const {
    firstName,
    lastName,
    features,
    cv: { url },
  } = data.userProfile as any;

  const handleOnCVDownload = React.useCallback(() => {
    ReactGA.event({
      category: "Intro",
      action: "Click",
      label: "Download CV",
    });
  }, []);

  return (
    <Layout>
      <main className="intro" style={pageStyles}>
        <h1 className="intro-title mb-4">
          Hello, My name is {`${firstName} ${lastName}`}
        </h1>
        <p className="intro-subtitle">
          <span className="text-slider-items"></span>
          <strong className="text-slider">
            <Typed
              strings={features}
              typeSpeed={80}
              backDelay={1100}
              backSpeed={30}
              loop
            />
          </strong>
        </p>
        <p className="intro-content-buttons">
          <div>
            <Link to="/work" className="btn-primary">
              View My Work
            </Link>
            <a
              className="btn-primary"
              target="_blank"
              role="button"
              href={url}
              download="BrandonTruongCV"
              rel="noreferrer"
              onClick={handleOnCVDownload}
            >
              Download my CV
            </a>
          </div>
        </p>
      </main>
    </Layout>
  );
};

export default IndexPage;

export function Head(props: HeadProps<DataProps>) {
  return <title>{props.data.site.siteMetadata.title} - Home</title>;
}

export const query = graphql`
  {
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
  }
`;

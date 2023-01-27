import * as React from "react";
import { graphql, Link, PageProps } from "gatsby";
import Typed from "react-typed";
import { OutboundLink } from "gatsby-plugin-google-gtag";
import { SEO } from "../components/seo";
import Layout from "../components/layout";

const IndexPage = ({ data }: PageProps<Queries.Query>) => {
  const {
    firstName,
    lastName,
    features,
    cv: { url },
  } = data.userProfile as any;

  const handleOnCVDownload = React.useCallback(() => {
    if (typeof window !== "undefined" && window.gtag) {
      window.gtag("event", "click", {
        category: "Contact",
        action: "Click",
        label: "Download CV",
      });
    }
  }, []);

  return (
    <Layout>
      <main className="intro">
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
        <div className="intro-content-buttons">
          <div>
            <Link to="/work" className="btn-primary">
              View My Work
            </Link>
            <OutboundLink
              className="btn-primary"
              target="_blank"
              role="button"
              href={url}
              download="BrandonTruongCV"
              rel="noreferrer"
              onClick={handleOnCVDownload}
            >
              Download my CV
            </OutboundLink>
          </div>
        </div>
      </main>
    </Layout>
  );
};

export default IndexPage;

export const Head = () => <SEO title="Home" />;

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
      cv {
        fileName
        url
      }
    }
  }
`;

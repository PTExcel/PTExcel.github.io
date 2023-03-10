import { graphql, PageProps } from "gatsby";
import * as React from "react";
import { SEO } from "../components/seo";
import Layout from "../components/layout";

const About = ({ data }: PageProps<Queries.Query>) => {
  const {
    aboutMe: { html },
    skillGraph,
  } = data.userProfile as any;

  return (
    <Layout>
      <main className="about">
        <div className="about-container">
          <div className="box-shadow-full">
            <div className="skill-mf">
              {skillGraph.skills.map((skill: any) => {
                return (
                  <React.Fragment key={skill.id}>
                    <span>{skill.content}</span>{" "}
                    <span className="pull-right">{skill.percentage}</span>
                    <div className="progress">
                      <div
                        className="progress-bar"
                        role="progressbar"
                        style={{ width: skill.percentage }}
                        aria-valuenow={skill.value}
                        aria-valuemin="0"
                        aria-valuemax="100"
                      ></div>
                    </div>
                  </React.Fragment>
                );
              })}
            </div>
            <div className="about-me">
              <div className="title-box-2">
                <h5 className="title-left">About Me</h5>
              </div>
              <div dangerouslySetInnerHTML={{ __html: html }} />
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
};

export default About;

export const Head = () => <SEO title="About" />;

export const query = graphql`
  {
    site {
      siteMetadata {
        title
      }
    }
    userProfile {
      aboutMe {
        html
      }
      skillGraph {
        skills {
          id
          value
          content
          percentage
        }
      }
    }
  }
`;

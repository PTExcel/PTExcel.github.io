import { graphql, PageProps } from 'gatsby';
import * as React from 'react';
import { SEO } from "../components/seo";
import Layout from "../components/layout";
import Lottie from 'react-lottie-player';
import lottieJson from '../assets/about-me.json';

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
                    <span>{`${skill.content} ${skill.percentage}`}</span>
                    <div className="progress">
                      <span style={{ width: skill.percentage }}><span className="progress-bar"></span></span>
                  </div>
                  </React.Fragment>
                );
              })}
            </div>
            <div className="about-me">
              <div className="title-box-2">
                <h1 className="title-left">About Me</h1>
                <Lottie
                  loop
                  animationData={lottieJson}
                  play
                  style={{ width: 'auto', position: 'absolute', height: 150, right: 0, top: -80 }}
                />
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

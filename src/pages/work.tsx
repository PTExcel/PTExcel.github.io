import { graphql, PageProps } from 'gatsby';
import _ from 'lodash';
import Layout from '../components/layout';
import { SEO } from '../components/seo';
import React, { useEffect, useState } from 'react';
import Lottie from 'react-lottie-player';
import lottieJson from '../assets/porfolio.json';

const Work = ({ data }: PageProps<Queries.Query>) => {
  const [state, setState] = useState({
    portfolio: [],
    html: "",
  });

  useEffect(() => {
    setState((previousState: any) => {
      return {
        ...previousState,
        portfolio: _.orderBy(
          data.allPortfolio.nodes,
          ["displayOrder"],
          ["desc"]
        ),
        html: data.userProfile?.portfolioSummary?.html,
      };
    });
  }, []);

  return (
    <Layout>
      <main className="portfolio">
        <div>
          <div>
            <div className="header-box">
              <div className="title-box">
                <h3 className="title-a">Portfolio</h3>
                <div dangerouslySetInnerHTML={{ __html: state.html }} />
                <div className="line-mf"></div>
              </div>
              <Lottie
                loop
                animationData={lottieJson}
                play
                style={{ width: 'auto', float: 'left', height: 200 }}
              />
            </div>
          </div>
          <div className="portfolio-container">
            {state.portfolio.map((item: any) => {
              return (
                <div className="card" key={item.title}>
                  <figure className="card__thumb">
                    <img
                      src={item.image[0].url}
                      alt="Picture by Kyle Cottrell"
                      className="card__image"
                    />
                    <figcaption className="card__caption">
                      <h2 className="card__title">
                        {item.title}
                        <div className="card__subTitle">{item.subTitle}</div>
                      </h2>
                      <p className="card__snippet">{item.technologies}</p>
                      {/* <a href="" className="card__button">
                        Read more
                      </a> */}
                    </figcaption>
                  </figure>
                </div>
              );
            })}
          </div>
        </div>
      </main>
    </Layout>
  );
};

export default Work;

export const Head = () => <SEO title="Porfolios" />;

export const query = graphql`
  {
    site {
      siteMetadata {
        title
      }
    }
    userProfile {
      portfolioSummary {
        html
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

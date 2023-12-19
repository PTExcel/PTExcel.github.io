import { graphql, PageProps } from 'gatsby';
import _ from 'lodash';
import Layout from '../components/layout';
import { SEO } from '../components/seo';
import React, { useEffect, useState } from 'react';
import Lottie from 'react-lottie-player';
import lottieJson from '../assets/porfolio.json';
import Rodal from 'rodal';

// include styles
import 'rodal/lib/rodal.css';

interface ImageData {
  url: string;
}
interface PorfolioData {
  title: string;
  subTitle: string;
  position: string;
  startDate: string;
  endDate: string;
  technologies: string;
  image: ImageData[];
  details: {html: any;};
}

const Work = ({ data }: PageProps<Queries.Query>) => {
  const [state, setState] = useState({
    portfolio: [],
    html: "",
  });

  const [showDialog, setShowDialog] = useState(false);
  const [selectedPorfolio, setSelectedPorfolio] = useState<PorfolioData>();

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

  const handleReadMore = (porfolio: PorfolioData) => () => {
    console.log('=======porfolio=====', porfolio)
    setShowDialog(true);
    setSelectedPorfolio(porfolio);
  };
  const handleCloseDialog = () => {
    setShowDialog(false);
  }

  const formatDateString = (date: string) => {
    return new Date(date).toLocaleDateString('en-us', { year: 'numeric', month: 'long' })
  }

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
                      alt={`${item.title} - ${item.position}`}
                      className="card__image"
                    />
                    <figcaption className="card__caption">
                      <h2 className="card__title">
                        {item.title}
                        <div className="card__subTitle">{item.subTitle}</div>
                      </h2>
                      <p className="card__snippet">{item.technologies}</p>

                      <a onClick={handleReadMore(item)} className="card__button">
                        Read more
                      </a>
                    </figcaption>
                  </figure>
                </div>
              );
            })}
          </div>

        <Rodal visible={showDialog} onClose={handleCloseDialog}>
          <div className='porfolio-modal'>
          {!!selectedPorfolio &&
          <>
            <h1>{`${selectedPorfolio.subTitle}`}</h1>
            <h4>{`${selectedPorfolio.title} - ${selectedPorfolio.position}`}</h4>
            <div>{`From ${formatDateString(selectedPorfolio.startDate)}`}{selectedPorfolio.endDate ? ` to ${formatDateString(selectedPorfolio.endDate)}`: ' onwards'}</div>
            <div className='porfolio-modal__details' dangerouslySetInnerHTML={{ __html: selectedPorfolio.details?.html }} />
            <div>{`Technologies: ${selectedPorfolio.technologies.replaceAll(' ', ', ')}`}</div>
          </>

          }


          </div>
        </Rodal>

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
        position
        technologies
        displayOrder
        image {
          url
        }
        startDate
        endDate
        details {
          html
        }
      }
    }
  }
`;

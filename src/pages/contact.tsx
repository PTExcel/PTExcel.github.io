import { graphql, PageProps, HeadProps } from "gatsby";
import * as React from "react";
import { useCallback } from "react";
import ReactGA from "react-ga";
import Layout from "../components/layout";

const Contact = ({ data }: PageProps<Queries.Query>) => {
  const {
    cv: { url },
    backgroundImage: { url: imageOverlay },
  } = data.userProfile as any;

  const handleOnCVDownload = useCallback(() => {
    ReactGA.event({
      category: "Contact",
      action: "Click",
      label: "Download CV",
    });
  }, []);

  return (
    <Layout>
      <main className="contact">
        <div className="contact-container">
          <div className="box-shadow-full">
            <div className="col-md-6">
              <div className="title-box-2">
                <h5 className="title-left">Send A Message</h5>
              </div>
              <div>
                <form
                  action="https://formspree.io/f/mlevbawq"
                  method="POST"
                  className="contactForm"
                >
                  <div id="sendmessage">
                    Your message has been sent. Thank you!
                  </div>
                  <div id="errormessage"></div>
                  <div className="row">
                    <div className="col-md-12 mb-3">
                      <div className="form-group">
                        <input
                          type="text"
                          name="name"
                          className="form-control"
                          id="name"
                          placeholder="Your Name"
                          data-rule="minlen:4"
                          data-msg="Please enter at least 4 chars"
                        />
                        <div className="validation"></div>
                      </div>
                    </div>
                    <div className="col-md-12 mb-3">
                      <div className="form-group">
                        <input
                          type="email"
                          className="form-control"
                          name="email"
                          id="email"
                          placeholder="Your Email"
                          data-rule="email"
                          data-msg="Please enter a valid email"
                        />
                        <div className="validation"></div>
                      </div>
                    </div>
                    <div className="col-md-12 mb-3">
                      <div className="form-group">
                        <input
                          type="text"
                          className="form-control"
                          name="subject"
                          id="subject"
                          placeholder="Subject"
                          data-rule="minlen:4"
                          data-msg="Please enter at least 8 chars of subject"
                        />
                        <div className="validation"></div>
                      </div>
                    </div>
                    <div className="col-md-12 mb-3">
                      <div className="form-group">
                        <textarea
                          className="form-control"
                          name="message"
                          rows="5"
                          data-rule="required"
                          data-msg="Please write something for us"
                          placeholder="Message"
                        ></textarea>
                        <div className="validation"></div>
                      </div>
                    </div>
                    <div className="col-md-12">
                      <button type="submit" className="btn-primary">
                        Send Message
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
            <div className="col-md-6">
              <div className="title-box-2 pt-4 pt-md-0">
                <h5 className="title-left">Get in Touch</h5>
              </div>
              <div className="more-info">
                <p className="lead">
                  Whether you want to get in touch, talk about a project
                  collaboration, or just say hi, I'd love to hear from you.
                  <br />
                  Simply fill the from and send me an email.
                </p>
              </div>
              <div className="socials">
                <ul>
                  <li>
                    <a
                      target="_blank"
                      role="button"
                      href={url}
                      download="BrandonTruongCV"
                      title={`BrandonTruong's CV`}
                      onClick={handleOnCVDownload}
                      rel="noreferrer"
                    >
                      <span className="ico-circle">
                        <i className="ion-document-text"></i>
                      </span>
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://github.com/brandontruong"
                      target="_blank"
                      title={`BrandonTruong's Github`}
                      rel="noopener noreferrer"
                    >
                      <span className="ico-circle">
                        <i className="ion-social-github"></i>
                      </span>
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.linkedin.com/in/brandontruong/"
                      target="_blank"
                      title={`BrandonTruong's LinkedIn`}
                      rel="noopener noreferrer"
                    >
                      <span className="ico-circle">
                        <i className="ion-social-linkedin"></i>
                      </span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
};

export default Contact;

export const query = graphql`
  {
    site {
      siteMetadata {
        title
      }
    }
    userProfile {
      backgroundImage {
        url
      }
      cv {
        fileName
        url
      }
    }
  }
`;

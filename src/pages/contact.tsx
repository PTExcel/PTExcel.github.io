import { graphql, PageProps, HeadProps } from "gatsby";
import * as React from "react";
import { useCallback } from "react";
import { SEO } from "../components/seo";
import Layout from "../components/layout";
import documentIcon from "../assets/images/document.png";
import githubIcon from "../assets/images/github.png";
import linkedinIcon from "../assets/images/linkedin.png";

const Contact = ({ data }: PageProps<Queries.Query>) => {
  const {
    cv: { url },
    backgroundImage: { url: imageOverlay },
  } = data.userProfile as any;

  const handleOnCVDownload = useCallback(() => {
    if (typeof window !== "undefined" && window.gtag) {
      console.log("I am google tracking");
      window.gtag("event", "click", {
        category: "Contact",
        action: "Click",
        label: "Download CV",
      });
    }
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
                <a
                  target="_blank"
                  role="button"
                  href={url}
                  download="BrandonTruongCV"
                  title={`Brandon Truong's CV`}
                  onClick={handleOnCVDownload}
                  rel="noreferrer"
                >
                  <img
                    src={documentIcon}
                    height="32"
                    width={32}
                    alt="Brandon Truong's CV"
                  />
                </a>
                <a
                  href="https://github.com/brandontruong"
                  target="_blank"
                  title={`Brandon Truong's Github`}
                  rel="noopener noreferrer"
                >
                  <img
                    src={githubIcon}
                    height="32"
                    width={32}
                    alt="Brandon Truong's Github"
                  />
                </a>
                <a
                  href="https://www.linkedin.com/in/brandontruong/"
                  target="_blank"
                  title={`Brandon Truong's LinkedIn`}
                  rel="noopener noreferrer"
                >
                  <img
                    src={linkedinIcon}
                    height="32"
                    width={32}
                    alt="Brandon Truong's LinkedIn"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
};

export default Contact;

export const Head = () => <SEO title="Contact" />;

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

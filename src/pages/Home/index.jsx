import React from "react";
import { Helmet } from "react-helmet";

function Home() {
  let emailAddress = "trudgyofficial@gmail.com";
  return (
    <>
      <div className="d-flex">
        <div
          className="w-100 border-top border-3 border-black"
          style={{
            backgroundColor: "#141412",
            borderBottom: "2px solid white",
          }}
        >
          <Helmet>
            <title>Home | Trudgy Web Solutions - Web Development Company</title>
          </Helmet>
          <div className="d-flex">
            <div className="container">
              <div className="row justify-content-center pt-5 align-items-end">
                <div className="col-md-6 col-12 text-white">
                  <p className="custom_heading1 fw-bold">
                    Beautiful,{" "}
                    <span className="text-danger">Modern Website</span> For You
                    To Go Global.
                  </p>
                  <p>
                    Trudgy Web Development is a premier web solutions provider
                    dedicated to transforming businesses through innovative and
                    custom web development services. Specializing in creating
                    dynamic, user-friendly, and visually stunning websites,
                    Trudgy Web Development combines cutting-edge technology with
                    creative design to deliver an unparalleled digital
                    experience.
                  </p>
                  <a
                    href={`mailto:${emailAddress}`}
                    className="text-decoration-none text-white"
                  >
                    trudgyofficial@gmail.com
                  </a>
                  <br />
                  <br />
                  <a
                    className="btn btn-danger rounded-0"
                    style={{
                      backgroundColor: "#FF2301",
                      borderColor: "#FF2301",
                    }}
                  >
                    GET STARTED
                  </a>
                  <br />
                  <br />
                </div>
                <div className="col-md-6 col-12 custom_heading1 text-white fw-bold">
                  <img src="/assets/images/person.png" width="100%" />
                </div>
              </div>
            </div>
          </div>
          <div className="d-flex border border-3 border-black">
            <div className="container text-white pt-4 pb-4">
              <div className="row justify-content-between flex-nowrap overflow-auto">
                <div className="col-12 col-md-3 col-lg-auto text-center text-md-start col-xl-auto">
                  <p className="h2 mt-2 fw-semibold">
                    1000 + <br />
                    Brands Trust Us
                  </p>
                </div>
                <div className="col-12 col-md-3 col-lg-auto text-center text-md-start col-xl-auto">
                  <p className="h2 mt-2 fw-semibold">
                    500 + <br />
                    International Clients
                  </p>
                </div>
                <div className="col-12 col-md-3 col-lg-auto text-center text-md-start col-xl-auto">
                  <p className="h2 mt-2 fw-semibold">
                    1500+ <br />
                    Website Build
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="d-flex border border-3 border-black">
            <div className="container text-white pt-5 pb-5">
              <div className="col-md-12 col-12">
                    <h3 className="text-center">We'll assist in digitally transforming your business.</h3>
              </div>
              <div className="row pb-5 pt-5">
                <div className="col-12 col-md-3 col-lg-3 text-center text-md-start col-xl-3 mt-3 mb-3">
                  <div className="card h-100 br20 bg_card text-white pt-3 pb-3 custom_card_hover">
                      <div className="card-body">
                          <p className="h6">Website Development</p>
                          <p>Our team of skilled developers and designers is dedicated to delivering high-quality, responsive, and user-friendly websites that drive engagement and growth. </p>
                      </div>
                  </div>
                </div>
                <div className="col-12 col-md-3 col-lg-3 text-center text-md-start col-xl-3 mt-3 mb-3">
                  <div className="card h-100 br20 bg_card text-white pt-3 pb-3 custom_card_hover">
                      <div className="card-body">
                          <p className="h6">Responsive Web Design</p>
                          <p>
                            Our responsive web design services guarantee that your website looks stunning and functions seamlessly on desktops, tablets, and smartphones.
                          </p>
                      </div>
                  </div>
                </div>
                <div className="col-12 col-md-3 col-lg-3 text-center text-md-start col-xl-3 mt-3 mb-3">
                  <div className="card h-100 br20 bg_card text-white pt-3 pb-3 custom_card_hover">
                      <div className="card-body">
                          <p className="h6">UI/UX Design</p>
                          <p>
                            Our UI/UX design services focus on crafting visually stunning and intuitive interfaces that provide an engaging and seamless experience for your users.
                          </p>
                      </div>
                  </div>
                </div>
                <div className="col-12 col-md-3 col-lg-3 text-center text-md-start col-xl-3 mt-3 mb-3">
                  <div className="card h-100 br20 bg_card text-white pt-3 pb-3 custom_card_hover">
                      <div className="card-body">
                          <p className="h6">Website Redesign and Revamp</p>
                          <p>
                          We specialize in transforming outdated websites into modern. Our website redesign and revamp services focus on enhancing both the visual appeal of your site.
                          </p>
                      </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;

import React from "react";
import { Helmet } from "react-helmet";

function Home() {
  let emailAddress = "trudgywebsolutions@gmail.com";
  return (
    <>
      <div className="d-flex border-top border-3 border-black custom_bg">
        <div
          className="w-100"
          style={{
            backgroundColor: "#141412"
          }}
        >
          <Helmet>
            <title>Home | Trudgy Web Solutions - Web Development Company</title>
          </Helmet>
          <div className="d-flex border-3 border-bottom border-black">
            <div className="container">
              <div className="row justify-content-center flex-column-reverse flex-lg-row pt-5">
                <div className="col-md-6 col-12 text-white">
                  <p className="custom_heading1 fw-bold">
                    Beautiful,{" "}
                    <span className="text-danger">Modern </span><span className="text-warning"> Website</span> For You
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
                    {emailAddress}
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
                <div className="col-md-6 col-12 custom_heading1 text-white fw-bold pb-5" data-aos="fade-up" data-aos-duration="2000">
                  <div className="card h-100">
                    <div className="card-body text-center">
                      <img src="/assets/images/web-dev-assets.png" width="100%" />
                    </div>
                  </div>
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
          <div className="d-flex border border-3 border-black">
            <div className="container text-white pt-5 pb-5">
              <div className="row pb-5 pt-5">
                <div className="col-12 col-md-12 col-lg-6 col-xl-6 mt-3 mb-3">
                  <div className="row">
                    <div className="col-6 col-md-6 col-xl-6 col-lg-6">
                      <div className="card h-100 custom_card_border_1 overflow-hidden">
                        <div className="card-body p-0">
                          <img src="/assets/images/proj1.jpg" className="custom_card_border_1 img_hover" width="100%" />
                        </div>
                      </div>
                    </div>
                    <div className="col-6 col-md-6 col-xl-6 col-lg-6">
                      <div className="card h-100 custom_card_border_2 overflow-hidden">
                        <div className="card-body p-0">
                          <img src="/assets/images/proj5.jpg" width="100%" className=" custom_card_border_2 img_hover" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="row mt-3">
                    <div className="col-6 col-md-6 col-xl-6 col-lg-6">
                      <div className="card h-100 custom_card_border_3 overflow-hidden">
                        <div className="card-body p-0">
                          <img src="/assets/images/proj3.jpg" width="100%" className=" custom_card_border_3 img_hover" />
                        </div>
                      </div>
                    </div>
                    <div className="col-6 col-md-6 col-xl-6 col-lg-6">
                      <div className="card h-100 custom_card_border_4 overflow-hidden">
                        <div className="card-body p-0">
                          <img src="/assets/images/proj4.jpg" width="100%" className=" custom_card_border_4 img_hover" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-md-12 col-lg-6 col-xl-6 mt-3 mb-3">
                  <h3>Transform Your Online Presence with Our Expertise</h3>
                  <br />
                  <p>At Trudgy Web Solutions, we specialize in creating websites that don't just look good—they deliver results. With a track record of successfully delivering over 1,000 responsive websites, we've helped businesses across various industries increase their sales and drive more traffic.
                    <br /><br />
                    We enhance user experience by streamlining navigation, improving load times, and ensuring mobile responsiveness, which significantly boosts user satisfaction and engagement. A seamless and intuitive user journey keeps visitors on your site longer, reduces bounce rates, and increases conversions.
                    <br /><br />
                    Our team updates your website with a contemporary, visually appealing design, ensuring your brand looks current and credible. High-quality images, clean layouts, and a cohesive color scheme make a significant impact.
                    <br /><br />
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="d-flex border border-3 border-black">
            <div className="container text-white pt-5 pb-5">
              <h3 className="text-center">Flexible Pricing for Every Budget</h3>
              <div className="row pb-5 pt-5">
                <div className="col-12 col-md-4 col-lg-4 col-xl-4 mt-3 mb-3">
                  <div className="card h-100 br20 bg_card text-white pt-3 pb-3">
                    <div className="card-body">
                      <p className="h4">Starter</p>
                      <p>
                        Perfect for Beginners: Affordable Web Solutions Upto Rs. 5,000
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-md-4 col-lg-4 col-xl-4 mt-3 mb-3">
                  <div className="card h-100 br20 bg_card text-white pt-3 pb-3">
                    <div className="card-body">
                      <p className="h4">Basic</p>
                      <p>
                        Quality and Affordable Websites: Up to Rs. 10,000
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-md-4 col-lg-4 col-xl-4 mt-3 mb-3">
                  <div className="card h-100 br20 bg_card text-white pt-3 pb-3">
                    <div className="card-body">
                      <p className="h4">Premium</p>
                      <p>
                        Premium Websites: Elevate Your Online Presence from Rs. 10,000 - 15,000
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-md-6 col-lg-6 col-xl-6 mt-3 mb-3">
                  <div className="card h-100 br20 bg_card text-white pt-3 pb-3">
                    <div className="card-body">
                      <p className="h4">Aesthetic</p>
                      <p>
                        Aesthetic Excellence: Websites from Rs. 15,000 to 25,000
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-md-6 col-lg-6 col-xl-6 mt-3 mb-3">
                  <div className="card h-100 br20 bg_card text-white pt-3 pb-3">
                    <div className="card-body">
                      <p className="h4">Customized</p>
                      <p>
                        Tailored Excellence: Customized Websites from Rs. 30,000
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div >
      </div >
    </>
  );
}

export default Home;

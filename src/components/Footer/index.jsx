import React from 'react'

function Footer() {
    const currentYear = new Date().getFullYear();
    return (
        <>
            <section className="d-flex border-top border-3 border-black custom_bg pt-5 pb-5">
                <div className="container text-white">
                    <div className="row">
                        <div className="col-12 col-md-4 col-lg-4 col-xl-4 text-center">
                            <img src="/assets/images/trudgy_white_updated.png" width="260px" />
                            <p>Website Development Company!</p>
                        </div>
                        <div className="col-12 col-md-4 col-lg-4 col-xl-4">
                            <p>What We Offer?</p>
                            <ul className='list-unstyled'>
                                <li>Website Development</li>
                                <li>UI/UX Design</li>
                                <li>SEO Services</li>
                                <li>Customized Website</li>
                                <li>Website Redesign and Revamp</li>
                            </ul>
                        </div>
                        <div className="col-12 col-md-4 col-lg-4 col-xl-4">
                            <p>Navigation Links</p>
                            <ul className='list-unstyled'>
                                <li>Home</li>
                                <li>Projects</li>
                                <li>Our Blog</li>
                                <li>Contact Us</li>
                                <li>About Us</li>
                            </ul>
                        </div>
                        <div className="col-12 col-md-12 col-lg-12 col-xl-12 text-center">
                            <hr/>
                            <p>Copyright © Trudgy Web Solutions {currentYear}</p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Footer;
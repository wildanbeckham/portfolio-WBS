import React from 'react';

function About() {
    return(
        // <!-- About Section-->
        <section className="page-section bg-primary text-white mb-0 alig" id="about">
            <div className="container">
                <h2 className="page-section-heading text-center text-uppercase text-white">About</h2>
                <div className="divider-custom divider-light">
                    <div className="divider-custom-line"></div>
                    <div className="divider-custom-icon"><i className="fas fa-star"></i></div>
                    <div className="divider-custom-line"></div>
                </div>
                <div className="row">
                    <div className="col-lg-4 ml-auto"><p className="lead">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Totam praesentium ullam id repellat vel perspiciatis debitis autem. Nobis, expedita ipsum perferendis culpa ipsa quam reiciendis. Incidunt nemo optio labore sit?</p></div>
                    <div className="col-lg-4 mr-auto"><p className="lead">Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam voluptatem, itaque inventore, dolorem perspiciatis reiciendis ratione modi quod quasi nihil quae illo dicta similique laboriosam repellendus error hic eum omnis.</p></div>
                </div>
                <div className="text-center mt-4">
                    <a className="btn btn-xl btn-outline-light" href="https://www.linkedin.com/in/wildan-beckham-surtanik-2b08491b2/detail/overlay-view/urn:li:fsd_profileTreasuryMedia:(ACoAADGaQmQBDjY2Qu58ANWUpwagfY0Sezy9I3M,1608720717926)/?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base%3BHJ02bnknR7qH3V3wheqvyg%3D%3D&licu=urn%3Ali%3Acontrol%3Ad_flagship3_profile_view_base-featured_item_detail_view">
                        <i className="fas fa-download mr-2"></i>
                        Download My CV
                    </a>
                </div>
            </div>
        </section>
    );
}

export default About;
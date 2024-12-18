import React from "react";
import { Link } from 'react-router-dom'
import Services from "../../api/Services";


const ClickHandler = () => {
    window.scrollTo(10, 0);
}

const ServiceSectionS2 = (props) => {
    return (
        <section className="service-section-s2 section-padding">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-7 col-12">
                        <div className="section-title">
                            <h3>Hizmetlerimiz</h3>
                        </div>
                    </div>
                </div>
                <div className="service-wrap">
                    <div className="row">
                        {Services.slice(0, 6).map((service, sitem) => (
                            <div className="col-xl-4 col-lg-6 col-md-6 col-12" key={sitem}>
                                <div className="service-card">
                                    <div className="top-number">
                                        <span>{service.Id}</span>
                                    </div>
                                    <div className="icon">
                                        <img src={service.icon} alt="service" />
                                    </div>
                                    <div className="text">
                                        <h2>{service.title}</h2>
                                        <p>{service.description}</p>
                                        <Link onClick={ClickHandler} to={`/service-single/${service.slug}`}></Link>
                                    </div>
                                    <div className="image">
                                        <img src={service.sImg} alt="service" />
                                        <h2 className="img-title">{service.title}</h2>
                                    </div>
                                </div>
                            </div>
                        )) }

                    </div>
                </div>
            </div>
        </section>
    );
}

export default ServiceSectionS2;
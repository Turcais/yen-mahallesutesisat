import React from 'react';
import ContactForm from '../ContactFrom/ContactForm'


const Contactpage = () => {

    return(
        <section className="wpo-contact-pg-section section-padding">
            <div className="container">
                <div className="row">
                    <div className="col col-lg-10 offset-lg-1">
                        <div className="office-info">
                            <div className="row">
                                <div className="col col-xl-4 col-lg-6 col-md-6 col-12">
                                    <div className="office-info-item">
                                        <div className="office-info-icon">
                                            <div className="icon">
                                                <i className="fi flaticon-placeholder" ></i>
                                            </div>
                                        </div>
                                        <div className="office-info-text">
                                            <h2 href='https://maps.app.goo.gl/mj5SCrLzXcz1xbfK7' >Adresimiz</h2>
                                            <a href='https://maps.app.goo.gl/mj5SCrLzXcz1xbfK7'>Ragıp Tüzün, Serdar Sk. No:139/B, 06170 Yenimahalle/Ankara</a>
                                        </div>
                                    </div>
                                </div> 
                                <div className="col col-xl-4 col-lg-6 col-md-6 col-12">
                                    <div className="office-info-item">
                                        <div className="office-info-icon">
                                            <div className="icon">
                                                <i className="fi flaticon-email"></i>
                                            </div>
                                        </div>
                                        <div className="office-info-text">
                                            <h2 mailto>Email Atın</h2>
                                            <p>gorkemtesisat06@gmail.com</p>
                                            <p>tesisatgorkem@gmail.com</p>
                                        </div>
                                    </div>
                                </div> 
                                <div className="col col-xl-4 col-lg-6 col-md-6 col-12">
                                    <div className="office-info-item">
                                        <div className="office-info-icon">
                                            <div className="icon">
                                                <i className="fi flaticon-phone-call"></i>
                                            </div>
                                        </div>
                                        <div className="office-info-text">
                                            <h2>Şimdi Arayın</h2>
                                            <a href="tel:00905373711654">
                                                +(90) 537 371 16 54
                                            </a>
                                        </div>
                                    </div>
                                </div> 
                            </div>
                        </div>
                        <div className="wpo-contact-title">
                            <h2>Sorularınız İçin</h2>
                            <p>Formu doldurarak sorularınızı sorabilirsiniz.</p>
                        </div>
                        <div className="wpo-contact-form-area">
                            <ContactForm/>
                        </div>
                    </div>                
                </div>
            </div> 
            <section className="wpo-contact-map-section">
                <div className="wpo-contact-map">
<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d24462.65401024967!2d32.79716434235702!3d39.96751423590639!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14d34f6184c56a05%3A0x5c7d3090919ac3c1!2sG%C3%B6rkem%20Tesisat!5e0!3m2!1str!2str!4v1747607891859!5m2!1str!2str"></iframe>                </div>
            </section>
        </section>
     )
        
}

export default Contactpage;

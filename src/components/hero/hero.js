import React from "react";
import { Navigation, A11y, Autoplay} from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import { Link } from 'react-router-dom'
import hero1 from '../../images/slider/slide-1.jpg'
import hero2 from '../../images/slider/slide-2.jpg'
import hero3 from '../../images/slider/slide-3.jpg'
import hero4 from '../../images/slider/slide-4.jpg'



const Hero = () => {
    return (

        <section className="hero-slider hero-style-1">
            <Swiper
                // install Swiper modules
                modules={[Navigation, A11y, Autoplay]}
                spaceBetween={0}
                slidesPerView={1}
                loop={true}
                speed={1800}
                parallax={true}
                navigation
                autoplay={{
                    delay: 5000, // 5 saniye
                    disableOnInteraction: false, // Kullanıcı müdahalesinden sonra da devam et
                }}
            >
                <SwiperSlide>
                    <div className="slide-inner slide-bg-image" style={{ backgroundImage: `url(${hero1})` }}>
                        <div className="container-fluid">
                            <div className="slide-content">
                                <div className="slide-title">
                                    <h1 style={{ color: "white" }}>Su Kaçağı Tespiti</h1>
                                </div>
                                <div className="slide-text">
                                    <p>Evinizde yada ofisinizde tesisatlarda su kaçağı oluşması durumunda hemen firmamızı arayabilirsiniz. Robot cihazla noktasal olarak su kaçaklarını bulmaktayız.</p>
                                </div>
                                <div className="clearfix"></div>
                                <div className="slide-btns">
                                    <Link to="/about" className="theme-btn">Daha Fazlası<span></span></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                
                <SwiperSlide>
                    <div className="slide-inner slide-bg-image" style={{ backgroundImage: `url(${hero3})` }}>
                        <div className="container-fluid">
                            <div className="slide-content">
                                <div className="slide-title">
                                    <h1 style={{ color: "white" }}>Tuvalet Açma</h1>
                                </div>
                                <div className="slide-text">
                                    <p>Evimizde veya ofisimizde bulunan tuvaletlerimiz çeşitli sebeplerden dolayı tıkanabilmektedir. Robotla kırmadan tuvaletleri açmaktayız.</p>
                                </div>
                                <div className="clearfix"></div>
                                <div className="slide-btns">
                                    <Link to="/about" className="theme-btn">Daha Fazlası<span></span></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                </SwiperSlide>
                <SwiperSlide>
                    <div className="slide-inner slide-bg-image" style={{ backgroundImage: `url(${hero4})` }}>
                        <div className="container-fluid">
                            <div className="slide-content">
                                <div className="slide-title">
                                    <h1 style={{ color: "white" }}>Lavabo Açma</h1>
                                </div>
                                <div className="slide-text">
                                    <p>Evinizde veya ofisinizde yer alan giderlere yabancı cisim kaçması gibi durumlarda gidere bağlı pimaşlarda tıkanıklık oluşabilmektedir. Robotla kırmadan pimaşları açmaktayız.</p>
                                </div>
                                <div className="clearfix"></div>
                                <div className="slide-btns">
                                    <Link to="/about" className="theme-btn">Daha Fazlası<span></span></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
               
                <SwiperSlide>
                    <div className="slide-inner slide-bg-image" style={{ backgroundImage: `url(${hero2})` }}>
                        <div className="container-fluid">
                            <div className="slide-content">
                                <div className="slide-title">
                                <h1 style={{ color: "white" }}>Petek Temizliği</h1>                                </div>
                                <div className="slide-text">
                                    <p>Petekler, içerisinde dolaşan sıcak suyun yarattığı kireç ve tortulardan kaynaklı belli periyotlarla temizlenme ihtiyacı duymaktadır. Kimyasal ilaçla garantili petek temizlemekteyiz.</p>
                                </div>
                                <div className="clearfix"></div>
                                <div className="slide-btns">
                                    <Link to="/about" className="theme-btn">Daha Fazlası<span></span></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                </SwiperSlide>
                ...
            </Swiper>
        </section>
    )
}

export default Hero;

// import Swiper core and required modules
import './fundadores.css'
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Card from "../component/card"
import testeImagem from "../assets/usuario.jpg"
export default () => {
    const slides = [
        <Card imagemLocal={testeImagem} nome="Godrick Grifindor" localizacao="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, " />,
        <Card imagemLocal={testeImagem} nome="Joana Dark" localizacao="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, " />,
        <Card imagemLocal={testeImagem} nome="Santa Teresa" localizacao="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, " />
    ];

    return (
        <div className='secaoFundadores'>
            <h1>A alma da ONG</h1>
            <Swiper
                // install Swiper modules
                modules={[Navigation, Pagination, Scrollbar, A11y]}
                spaceBetween={50}
                slidesPerView={1}
                navigation
                pagination={{ clickable: true }}
                scrollbar={{ draggable: true }}
                onSwiper={(swiper) => console.log(swiper)}
                onSlideChange={() => console.log('slide change')}
            >
                {slides.map((item, i) => (
                    <SwiperSlide key={i}>
                        {item}
                    </SwiperSlide>
                ))}
                ...
            </Swiper></div>
    );
};
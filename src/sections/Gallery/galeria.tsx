import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import "./galeria.css"
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export function Galeria() {
  const slides = [
    { tipo: "video", src: "https://www.youtube.com/embed/MHaEazb63CI?si=a8fXcam38IEtdHGF", descricao: "Vídeo 1" },
    { tipo: "video", src: "https://www.youtube.com/embed/hsZVlDQEwnI", descricao: "Vídeo 2" },
    // { tipo: "imagem", src: "https://rounder.pics/assets/img/ui/square-image.webp", descricao: "Imagem 1" },
  ];

  return (
    <div id="Galeria" className="carrossel">
      <h1>Nós fazemos a diferença</h1>
      <Swiper
        className="swipperContainer"
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={5}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
      >
        {slides.map((item, i) => (
          <SwiperSlide key={i}>
            {item.tipo === "video" ? (
              <div className="videoContainer">
                <iframe
                  width="80%"
                  height="70%"
                  src={item.src}
                  title={item.descricao}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                ></iframe>
              </div>
            ) : (
              <img src={item.src} alt={item.descricao} className="imagemSlide" />
            )}
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
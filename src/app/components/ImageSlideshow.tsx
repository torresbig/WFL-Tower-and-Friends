import { useEffect, useRef } from "react";
import Slider from "react-slick";
import { motion } from "motion/react";

// Platzhalter-Bilder - Diese werden durch die echten Bilder aus dem GitHub Ordner bilder/slide ersetzt
const SLIDESHOW_IMAGES = [
  "/public/bilder/slide/team1.jpg",
  "/public/bilder/slide/team2.jpg",
  "/public/bilder/slide/team3.jpg",
  "/public/bilder/slide/team4.jpg",
  "/public/bilder/slide/team5.jpg",
];

export function ImageSlideshow() {
  const sliderRef = useRef<Slider>(null);

  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    fade: true,
    pauseOnHover: true,
    arrows: true,
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="py-20 px-4 bg-white"
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-gray-900">
          Unser Team in Action
        </h2>
        <div className="slideshow-container shadow-2xl rounded-lg overflow-hidden">
          <Slider ref={sliderRef} {...settings}>
            {SLIDESHOW_IMAGES.map((image, index) => (
              <div key={index} className="relative">
                <div className="aspect-video bg-gradient-to-br from-red-100 to-red-50 flex items-center justify-center">
                  <img
                    src={image}
                    alt={`Team Bild ${index + 1}`}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      // Fallback wenn Bild nicht existiert
                      const target = e.target as HTMLImageElement;
                      target.style.display = 'none';
                      const parent = target.parentElement;
                      if (parent) {
                        parent.innerHTML = `<div class="w-full h-full flex items-center justify-center text-gray-400 text-2xl">Bild ${index + 1}</div>`;
                      }
                    }}
                  />
                </div>
              </div>
            ))}
          </Slider>
        </div>
        <p className="text-center mt-6 text-gray-600 italic">
          Bilder aus deinem GitHub Ordner: /bilder/slide/
        </p>
      </div>

      <style>{`
        .slick-prev, .slick-next {
          z-index: 10;
          width: 50px;
          height: 50px;
        }
        .slick-prev:before, .slick-next:before {
          font-size: 50px;
          opacity: 0.5;
        }
        .slick-prev:hover:before, .slick-next:hover:before {
          opacity: 1;
        }
        .slick-dots li button:before {
          font-size: 12px;
        }
        .slick-dots li.slick-active button:before {
          color: #dc2626;
        }
      `}</style>
    </motion.section>
  );
}

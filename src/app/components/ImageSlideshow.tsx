import { useEffect, useRef, useState } from "react";
import Slider from "react-slick";

function shuffleArray<T>(array: T[]) {
  const copy = [...array];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

export function ImageSlideshow() {
  const [slides, setSlides] = useState<string[]>([]);
  const sliderRef = useRef<Slider>(null);

  useEffect(() => {
    // Dynamisch alle Bilder aus dem Ordner /src/assets/bilder/slide/ laden
    const modules = import.meta.glob("../../assets/bilder/slide/*.{jpg,jpeg,png,webp}", {
      eager: true,
      import: "default",
    }) as Record<string, string>;

    const loaded = Object.values(modules);
    if (loaded.length > 0) {
      setSlides(shuffleArray(loaded));
    }
  }, []);

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
    <section className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-gray-900">
          Unser Team in Action
        </h2>
        <div className="slideshow-container shadow-2xl rounded-lg overflow-hidden">
          <Slider ref={sliderRef} {...settings}>
            {slides.length === 0 ? (
              <div className="relative">
                <div className="aspect-video bg-gradient-to-br from-red-100 to-red-50 flex items-center justify-center">
                  <p className="text-gray-500 text-lg">Lade Bilder…</p>
                </div>
              </div>
            ) : (
              slides.map((image, index) => (
                <div key={index} className="relative">
                  <div className="aspect-video bg-gradient-to-br from-red-100 to-red-50 flex items-center justify-center">
                    <img
                      src={image}
                      alt={`Team Bild ${index + 1}`}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.style.display = "none";
                        const parent = target.parentElement;
                        if (parent) {
                          parent.innerHTML = `<div class="w-full h-full flex items-center justify-center text-gray-400 text-2xl">Bild ${
                            index + 1
                          }</div>`;
                        }
                      }}
                    />
                  </div>
                </div>
              ))
            )}
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
    </section>
  );
}

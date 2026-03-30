import { useEffect, useRef } from "react";
import Link from "next/link";
import teamVideo from "../../assets/video/team-video.mp4";
import whatisVideo from "../../assets/video/whatis.mp4";
import missionVideo from "../../assets/video/mission.mp4";


export function VideoSection() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            video.play().catch((error) => {
              console.log("Video autoplay failed:", error);
            });
          } else {
            video.pause();
          }
        });
      },
      { threshold: 0.5 } // 50% des Videos muss sichtbar sein
    );

    observer.observe(video);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <section className="py-20 px-4 bg-red-600">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-white">
          Was ist der Wings for Life World Run?
        </h2>
        <div className="relative rounded-xl overflow-hidden shadow-2xl">
          <div className="aspect-video bg-black flex items-center justify-center">
            <video
              ref={videoRef}
              controls
              loop
              className="w-full h-full"
            >
              <source src={whatisVideo} type="video/mp4" />
              Dein Browser unterstützt das Video-Tag nicht.
            </video>
          </div>
        </div>
        <p className="text-lg text-center mt-4 text-white">
            Video von Wings for Life --{" "}
            <Link
              href="https://www.wingsforlifeworldrun.com/de/race-format"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-300 hover:text-blue-100"
            >
              https://www.wingsforlifeworldrun.com/de/race-format
            </Link>
          </p>
      </div>
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-white">
          Die Mission von Wings for Life
        </h2>
        <div className="relative rounded-xl overflow-hidden shadow-2xl">
          <div className="aspect-video bg-black flex items-center justify-center">
            <video
              ref={videoRef}
              controls
              loop
              className="w-full h-full"
            >
              <source src={missionVideo} type="video/mp4" />
              Dein Browser unterstützt das Video-Tag nicht.
            </video>
          </div>
        </div>
         <p className="text-lg text-center mt-4 text-white">
            Video von Wings for Life --{" "}
            <Link
              href="https://www.wingsforlifeworldrun.com/de/mission"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-300 hover:text-blue-100"
            >
              https://www.wingsforlifeworldrun.com/de/mission
            </Link>
          </p>
      </div>
    </section>
  );
}

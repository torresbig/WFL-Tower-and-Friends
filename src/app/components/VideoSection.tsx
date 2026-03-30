import { useEffect, useRef } from "react";
import Link from "next/link";

export function VideoSection() {
  const whatisVideoRef = useRef<HTMLVideoElement>(null);
  const missionVideoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const setupObserver = (video: HTMLVideoElement | null) => {
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
        { threshold: 0.5 }
      );

      observer.observe(video);

      return () => observer.disconnect();
    };

    const cleanupWhatis = setupObserver(whatisVideoRef.current);
    const cleanupMission = setupObserver(missionVideoRef.current);

    return () => {
      cleanupWhatis?.();
      cleanupMission?.();
    };
  }, []);

  return (
    <>
      <section className="py-20 px-4 bg-red-600">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-white">
            Was ist der Wings for Life World Run?
          </h2>
          <div className="relative rounded-xl overflow-hidden shadow-2xl">
            <div className="aspect-video bg-black flex items-center justify-center">
              <video
                ref={whatisVideoRef}
                controls
                loop
                className="w-full h-full"
              >
                <source src="/assets/video/whatis.mp4" type="video/mp4" />
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
      </section>

      <section className="py-20 px-4 bg-red-600">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-white">
            Die Mission von Wings for Life
          </h2>
          <div className="relative rounded-xl overflow-hidden shadow-2xl">
            <div className="aspect-video bg-black flex items-center justify-center">
              <video
                ref={missionVideoRef}
                controls
                loop
                className="w-full h-full"
              >
                <source src="/assets/video/mission.mp4" type="video/mp4" />
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
    </>
  );
}
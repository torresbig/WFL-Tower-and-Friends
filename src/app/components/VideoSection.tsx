import teamVideo from "../../assets/video/team-video.mp4";

export function VideoSection() {
  return (
    <section className="py-20 px-4 bg-red-600">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-white">
          Erlebe die Atmosphäre
        </h2>
        <div className="relative rounded-xl overflow-hidden shadow-2xl">
          <div className="aspect-video bg-black flex items-center justify-center">
            <video
              controls
              className="w-full h-full"
            >
              <source src={teamVideo} type="video/mp4" />
              Dein Browser unterstützt das Video-Tag nicht.
            </video>
          </div>
        </div>
        <p className="text-center mt-6 text-white/80 italic">
          Video aus deinem GitHub Ordner: /video/
        </p>
      </div>
    </section>
  );
}

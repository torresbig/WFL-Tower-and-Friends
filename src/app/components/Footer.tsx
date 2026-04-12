import { Heart, Instagram } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-[#003056] text-white py-12 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <div className="mb-6">
          <img
            src="https://img.redbull.com/images/e_trim:10:transparent/bo_5px_solid_rgb:00000000/q_auto,f_png/redbullcom/2014/04/29/1331648035613_4/wings-for-life-world-run-logo-large"
            alt="Wings for Life World Run"
            className="h-16 mx-auto mb-6 opacity-80"
          />
        </div>
        
        <h3 className="text-2xl font-bold mb-4">Tower & Friends</h3>
        
        <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
          Gemeinsam laufen wir für eine Welt ohne Querschnittlähmung.
          100% der Spenden und Startgelder fließen in die Forschung.
        </p>

        <div className="flex justify-center items-center space-x-2 mb-8">
          <span className="text-gray-300">Made with</span>
          <Heart className="w-5 h-5 text-[#E2004C] fill-current" />
          <span className="text-gray-300">in Simmern (Hunsrück)</span>
        </div>

        <div className="flex justify-center items-center space-x-6 mb-8">
          <a
            href="https://www.instagram.com/thomas_sborn/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-white hover:text-[#E2004C] transition-colors duration-200"
          >
            <Instagram className="w-6 h-6" />
            <span className="font-semibold">@thomas_sborn</span>
          </a>
        </div>

        <div className="border-t border-white/20 pt-8">
          <a
            href="https://www.wingsforlifeworldrun.com/de/teams/5dpLP5?join=1"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#E2004C] hover:text-[#C20041] font-semibold transition-colors"
          >
            → Jetzt dem Team beitreten
          </a>
        </div>

        <div className="mt-8 text-sm text-gray-400">
          <div id="YFB_" style={{ marginBottom: '16px' }}></div>
          <script async src="https://www.yogizaehler.de/Besucherzaehler/pz_018_2.php?id=1988926568&design=886000003"></script>
          <p>&copy; {new Date().getFullYear()} Tower & Friends · Wings for Life World Run</p>
        </div>
      </div>
    </footer>
  );
}

import { Play, ImageIcon, Mail, Phone, MapPin, Link2, Globe } from "lucide-react";

const galleryPlaceholders = Array.from({ length: 6 }, (_, i) => i + 1);

export default function BottomMediaRow() {
  return (
    <section className="w-full bg-white py-8">
      <div className="max-w-7xl mx-auto px-6 flex gap-5 items-start">

        {/* Featured Video */}
        <div className="flex-1 rounded-lg overflow-hidden border border-gray-100 shadow-sm">
          <div className="bg-[#003d7a] px-4 py-2.5 flex items-center gap-2">
            <Play size={13} className="text-white" />
            <h3 className="text-white font-semibold text-xs tracking-wide">Featured Video</h3>
          </div>
          <div className="bg-[#1a2a3a] aspect-video flex items-center justify-center relative">
            <div className="absolute inset-0 bg-gradient-to-br from-[#003d7a]/70 to-[#001a3a]/80" />
            <div className="relative flex flex-col items-center gap-2">
              <div className="w-10 h-10 rounded-full bg-white/20 border border-white/30 flex items-center justify-center cursor-pointer hover:bg-white/30 transition-colors">
                <Play size={18} className="text-white ml-0.5" />
              </div>
              <p className="text-white/50 text-[10px]">[Video — asset pending]</p>
            </div>
          </div>
        </div>

        {/* Photo Gallery */}
        <div className="flex-1 rounded-lg overflow-hidden border border-gray-100 shadow-sm">
          <div className="bg-[#003d7a] px-4 py-2.5 flex items-center gap-2">
            <ImageIcon size={13} className="text-white" />
            <h3 className="text-white font-semibold text-xs tracking-wide">Photo Gallery</h3>
          </div>
          <div className="p-3 bg-white">
            <div className="grid grid-cols-3 gap-1.5">
              {galleryPlaceholders.map((i) => (
                <div
                  key={i}
                  className="aspect-square bg-[#e8f0f7] rounded flex items-center justify-center cursor-pointer hover:bg-[#d4e6f5] transition-colors"
                >
                  <ImageIcon size={14} className="text-[#003d7a]/30" />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Connect With Me */}
        <div className="w-64 shrink-0 rounded-lg overflow-hidden border border-gray-100 shadow-sm">
          <div className="bg-[#003d7a] px-4 py-2.5">
            <h3 className="text-white font-semibold text-xs tracking-wide">Connect With Me</h3>
          </div>
          <div className="bg-white p-4 flex flex-col gap-3">
            <ul className="flex flex-col gap-2.5">
              <li className="flex items-start gap-2">
                <Phone size={12} className="text-[#003d7a] shrink-0 mt-0.5" />
                <span className="text-xs text-gray-600">+880 1XXX XXXXXXX</span>
              </li>
              <li className="flex items-start gap-2">
                <Mail size={12} className="text-[#003d7a] shrink-0 mt-0.5" />
                <span className="text-xs text-gray-600 break-all">arif.chowdhury@ustc.ac.bd</span>
              </li>
              <li className="flex items-start gap-2">
                <Link2 size={12} className="text-[#003d7a] shrink-0 mt-0.5" />
                <span className="text-xs text-gray-600">linkedin.com/in/arif-chowdhury</span>
              </li>
              <li className="flex items-start gap-2">
                <Globe size={12} className="text-[#003d7a] shrink-0 mt-0.5" />
                <span className="text-xs text-gray-600">www.arifchowdhury.com</span>
              </li>
              <li className="flex items-start gap-2">
                <MapPin size={12} className="text-[#003d7a] shrink-0 mt-0.5" />
                <span className="text-xs text-gray-600">Chittagong, Bangladesh</span>
              </li>
            </ul>
            <a
              href="/contact"
              className="block w-full text-center bg-[#003d7a] hover:bg-[#002d5a] text-white text-xs font-semibold py-2 rounded transition-colors mt-1"
            >
              Send a Message
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}

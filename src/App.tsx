import { Phone, Mail, MapPin, Wrench, Hammer, Package, Leaf, Mountain, Facebook } from 'lucide-react';

const galleryImages = [
  { id: 1, src: '/311446757_109165061980452_5995265051375408806_n.jpg', alt: 'Antik bútor restaurálás 1' },
  { id: 2, src: '/474626833_601704569393163_6865259054366600254_n.jpg', alt: 'Antik bútor restaurálás 2' },
  { id: 3, src: '/474994528_601704486059838_4595563079305724811_n.jpg', alt: 'Antik bútor restaurálás 3' },
  { id: 4, src: '/474811000_601716922725261_8463873141377406838_n.jpg', alt: 'Antik bútor restaurálás 4' }
];

const services = [
  { icon: Wrench, title: 'Antik/stíl bútorok javítása' },
  { icon: Hammer, title: 'Bútor felújítás' },
  { icon: Package, title: 'Bútor restaurálás' },
  { icon: Leaf, title: 'Hagyományos technológia, természetes alapanyagok' }
];

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-900 via-yellow-900 to-amber-800">
      {/* Header */}
      <header className="vintage-texture bg-gradient-to-b from-amber-950 to-amber-900 border-b-4 border-amber-950 sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex-1">
            <h1 className="text-3xl md:text-4xl font-bold text-amber-50" style={{ fontFamily: "'Playfair Display', serif" }}>Nagy Csaba</h1>
            <p className="text-amber-100 text-sm md:text-base">Műbútorasztalos</p>
          </div>
          <a href="tel:+36309070192" className="cta-button text-sm md:text-base">
            <Phone className="inline mr-2" size={18} /> +36 30 907 0192
          </a>
        </div>
        <div className="decorative-line mx-4 md:mx-8"></div>
      </header>

      {/* Hero Section */}
      <section className="section-spacing vintage-texture bg-gradient-to-b from-amber-900 to-yellow-900 relative">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex justify-center gap-2 mb-8">
            <Mountain size={24} className="text-amber-950" />
            <Mountain size={24} className="text-amber-950" />
            <Mountain size={24} className="text-amber-950" />
          </div>

          <div className="decorative-line mb-8"></div>

          <h2 className="text-5xl md:text-6xl font-bold text-amber-50 mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
            Nagy Csaba
          </h2>
          <p className="text-2xl md:text-3xl text-amber-100 mb-2">Műbútorasztalos</p>
          <p className="text-lg md:text-xl text-amber-200 mb-8">Antik-stíl bútor felújítás</p>

          <div className="decorative-line mb-8"></div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <a href="tel:+36309070192" className="cta-button">
              Hívjon most
            </a>
            <a href="mailto:74nagycsaba@gmail.com" className="cta-button">
              Email
            </a>
          </div>

          <div className="flex justify-center gap-2">
            <div className="decorative-dot"></div>
            <div className="decorative-dot"></div>
            <div className="decorative-dot"></div>
          </div>
        </div>
      </section>

      {/* Bemutatkozás Section */}
      <section id="bemutatkozas" className="section-spacing vintage-texture bg-gradient-to-b from-yellow-900 to-amber-900">
        <div className="max-w-3xl mx-auto">
          <h3 className="text-4xl md:text-5xl font-bold text-amber-50 text-center mb-12" style={{ fontFamily: "'Playfair Display', serif" }}>
            Bemutatkozás
          </h3>

          <div className="decorative-line mb-8"></div>

          <p className="text-amber-50 text-lg leading-relaxed text-center md:text-left">
            30 év munkatapasztalattal a hátam mögött szeretnék bemutatkozni. Vállalom antik/stíl bútorok javítását, felújítását, restaurálását. Rengeteg kisebb nagyobb bútor megfordult már kezeim között. Hagyományos technológiával, természetes alapanyagokkal dolgozom.
          </p>
          <p className="text-amber-50 text-lg leading-relaxed mt-6 text-center md:text-left">
            A csodálatos emlékeket idéző nagymama kis varrós dobozától kezdve akár a gyűjtemények barokk darabjainak felújításában is számíthat rám!
          </p>
        </div>
      </section>

      {/* Szolgáltatások Section */}
      <section id="szolgaltatasok" className="section-spacing vintage-texture bg-gradient-to-b from-amber-900 to-yellow-900">
        <div className="max-w-4xl mx-auto">
          <h3 className="text-4xl md:text-5xl font-bold text-amber-50 text-center mb-12" style={{ fontFamily: "'Playfair Display', serif" }}>
            Szolgáltatások
          </h3>

          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <div key={index} className="vintage-frame p-6 bg-gradient-to-br from-amber-800 to-amber-900">
                  <Icon size={32} className="text-amber-950 mb-4" />
                  <p className="text-amber-50 text-lg font-medium">{service.title}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Referencia Munkáim Section */}
      <section id="referenciák" className="section-spacing vintage-texture bg-gradient-to-b from-yellow-900 to-amber-900">
        <div className="max-w-5xl mx-auto">
          <h3 className="text-4xl md:text-5xl font-bold text-amber-50 text-center mb-12" style={{ fontFamily: "'Playfair Display', serif" }}>
            Referencia Munkáim
          </h3>

          <div className="grid md:grid-cols-2 gap-8">
            {galleryImages.map((image) => (
              <div key={image.id} className="vintage-frame overflow-hidden bg-gradient-to-br from-amber-800 to-amber-900">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-80 object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Kapcsolat Section */}
      <section id="kapcsolat" className="section-spacing vintage-texture bg-gradient-to-b from-amber-900 to-yellow-900">
        <div className="max-w-2xl mx-auto text-center">
          <h3 className="text-4xl md:text-5xl font-bold text-amber-50 mb-8" style={{ fontFamily: "'Playfair Display', serif" }}>
            Kapcsolat
          </h3>

          <div className="decorative-line mb-8"></div>

          <h4 className="text-3xl md:text-4xl font-bold text-amber-50 mb-8" style={{ fontFamily: "'Playfair Display', serif" }}>
            Nagy Csaba
          </h4>

          <div className="space-y-6 mb-8">
            <div className="flex items-center justify-center gap-3">
              <MapPin size={24} className="text-amber-950" />
              <p className="text-amber-50 text-lg">Wesselényi u. 6, Szombathely, Magyarország</p>
            </div>

            <div className="flex items-center justify-center gap-3">
              <Phone size={24} className="text-amber-950" />
              <a href="tel:+36309070192" className="text-amber-50 text-2xl font-bold hover:text-amber-200 transition-colors">
                +36 30 907 0192
              </a>
            </div>

            <div className="flex items-center justify-center gap-3">
              <Mail size={24} className="text-amber-950" />
              <a href="mailto:74nagycsaba@gmail.com" className="text-amber-50 text-lg hover:text-amber-200 transition-colors">
                74nagycsaba@gmail.com
              </a>
            </div>
          </div>

          <div className="decorative-line"></div>
        </div>
      </section>

      {/* Footer */}
      <footer className="vintage-texture bg-gradient-to-b from-amber-950 to-stone-900 border-t-4 border-amber-950 py-8">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="flex justify-center mb-4">
            <a href="https://www.facebook.com/p/Nagy-Csaba-m%C5%B1b%C3%BAtor-asztalos-b%C3%BAtor-restaur%C3%A1l%C3%A1s-100086608747233/" target="_blank" rel="noopener noreferrer" className="hover:text-amber-300 transition-colors">
              <Facebook size={28} className="text-amber-100" />
            </a>
          </div>
          <p className="text-amber-200 text-xs">Wesselényi u. 6, Szombathely</p>
          <p className="text-amber-200 text-xs">+36 30 907 0192 • 74nagycsaba@gmail.com</p>
        </div>
      </footer>
    </div>
  );
}

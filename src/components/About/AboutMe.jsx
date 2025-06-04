import useInView from "../../Hooks/useInView";
import DownloadButton from "./DownloadButton";
import SocialLinks from "./SocialLinks";

function SobreMi() {
  const { isVisible, sectionRef } = useInView(0.5);

  return (
    <section
      ref={sectionRef}
      id="sobre-mi"
      className={`transition-all duration-500 max-w-screen-xl mx-auto px-8 pt-32 pb-4 mb-8 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}
    >
      <div className="contenedor flex items-center justify-between">
        <div className="text-container max-w-lg">
          <h2 className="font-mono text-4xl mb-6 relative inline-block text-gray-710">
            Sobre Mí
            <span className="absolute bottom-[-8px] left-0 w-3/5 h-[3px] bg-primary rounded-sm"></span>
          </h2>
          <p className="text-lg leading-7 text-gray-620 mb-8">
            Soy un <strong>desarrollador de software</strong> con enfoque en <em>soluciones digitales eficientes y escalables</em>. Me apasiona el <em>código limpio y optimizado</em>, siempre
            explorando nuevas tecnologías para mejorar la experiencia del usuario.
          </p>
          <div className="flex justify-between items-center gap-4">
            <DownloadButton />
            <SocialLinks />
          </div>
        </div>

        <div className="profile-container hidden md:block">
          <div className="wave-background">
            <img className="hero-img" src="src/assets/img/prof1.png" alt="Foto de perfil" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default SobreMi;

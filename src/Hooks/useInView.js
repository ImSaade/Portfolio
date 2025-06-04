import { useState, useEffect, useRef } from "react";

const useInView = (threshold = 0.5) => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true); // Activar la visibilidad cuando la sección entra en el viewport
          } else {
            setIsVisible(false); // Desactivar la visibilidad cuando la sección sale del viewport
          }
        });
      },
      {
        threshold: threshold, // Umbral de visibilidad
      }
    );

    observer.observe(section);

    return () => {
      observer.disconnect();
    };
  }, [threshold]);

  return { isVisible, sectionRef };
};

export default useInView;

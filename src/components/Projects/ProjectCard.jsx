import { useState } from "react";
import ProjectImage from "./ProjectImage";
import ProjectDetails from "./ProjectDetails";

function ProjectCard({ title, description, imgSrc, navId, codeLink, demoLink, technologies, className }) {
  const [showLightbox, setShowLightbox] = useState(false);

  return (
    <>
      <div id={`proj${navId}`} className="mb-10"></div>

      <div className={`bg-[#f9f9f9] rounded-lg shadow-md mb-0 pt-3 max-w-full ${className}`}>
        <div className={`flex flex-col lg:flex-row ${className}`}>
          <ProjectImage imgSrc={imgSrc} showLightbox={showLightbox} onShow={() => setShowLightbox(true)} onClose={() => setShowLightbox(false)} />
          <ProjectDetails title={title} description={description} technologies={technologies} codeLink={codeLink} demoLink={demoLink} />
        </div>
      </div>
    </>
  );
}

export default ProjectCard;

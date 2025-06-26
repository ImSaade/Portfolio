import React from "react";

function ProjectDetails({ title, description, technologies, codeLink, demoLink }) {
  return (
    <div className="lg:w-5/12 w-full px-6 py-4 flex flex-col justify-center text-center">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">{title}</h2>
      <p className="text-lg text-gray-700">{description}</p>

      <div className="font-bold flex flex-wrap justify-center mt-4">
        {technologies.map((tech, index) => (
          <p key={index} className="text-sm text-indigo-600 mx-2 mb-2 px-3 py-1 border border-indigo-600 rounded">
            {tech}
          </p>
        ))}
      </div>

      <div className="flex justify-around mt-6">
        <a href={codeLink} target="_blank" rel="noopener noreferrer" className="flex items-center text-blue-600 hover:underline">
          <span className="font-bold mr-2">Código</span>
          <svg className="w-6 h-6" viewBox="0 0 20 20" fill="currentColor">
            <path d="M10 0C4.477 0 0 4.485 0 10.002c0 4.418 2.865 8.167 6.839 9.489.5.091.683-.218.683-.483 0-.237-.009-.866-.014-1.7-2.782.605-3.369-1.342-3.369-1.342-.454-1.154-1.11-1.462-1.11-1.462-.909-.62.069-.608.069-.608 1.004.071 1.532 1.031 1.532 1.031.893 1.531 2.341 1.089 2.91.833.092-.647.35-1.09.637-1.34-2.22-.253-4.555-1.112-4.555-4.946 0-1.092.39-1.985 1.03-2.683-.104-.254-.446-1.274.098-2.656 0 0 .84-.269 2.75 1.025a9.564 9.564 0 012.5-.336c.85.004 1.705.115 2.5.336 1.909-1.294 2.748-1.025 2.748-1.025.546 1.382.204 2.402.1 2.656.64.698 1.028 1.591 1.028 2.683 0 3.842-2.338 4.689-4.566 4.938.359.31.678.921.678 1.857 0 1.34-.012 2.419-.012 2.749 0 .267.18.578.688.481C17.138 18.165 20 14.416 20 10.002 20 4.485 15.523 0 10 0z" />
          </svg>
        </a>

        <a href={demoLink} target="_blank" rel="noopener noreferrer" className="flex items-center text-green-600 hover:underline">
          <span className="font-bold mr-2">Demo</span>
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 16 16">
            <path d="M13,1 C14.1046,1 15,1.89543 15,3 L15,13 C15,14.1046 14.1046,15 13,15 L3,15 C1.89543,15 1,14.1046 1,13 L1,3 C1,1.89543 1.89543,1 3,1 L13,1 Z M13,3 L3,3 L3,13 L13,13 L13,3 Z M6,5.98754 C6,5.18568 6.89643,4.70994 7.56049,5.15938 L10.534,7.17184 C11.12,7.56845 11.12,8.43155 10.534,8.82816 L7.56049,10.8406 C6.89642,11.2901 6,10.8143 6,10.0125 L6,5.98754 Z" />
          </svg>
        </a>
      </div>
    </div>
  );
}

export default ProjectDetails;

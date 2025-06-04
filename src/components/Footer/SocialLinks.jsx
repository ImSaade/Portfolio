import React from "react";

const SocialLinks = () => {
  return (
    <nav>
      <ul className="flex justify-center gap-10 flex-wrap mb-10 list-none p-0">
        <li>
          <a
            href="https://github.com/ImSaade"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-[#f0f0f0] text-base font-semibold px-6 py-4 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 shadow-[0px_4px_10px_rgba(255,255,255,0.05)] transition-all duration-300 ease-in-out hover:bg-white/20 hover:-translate-y-1 hover:scale-[1.02]"
          >
            <svg className="w-6 h-6 transition-transform duration-300 ease-in-out group-hover:rotate-6 group-hover:scale-110" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0C5.373 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.6.113.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
            </svg>
            GitHub
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/edd-saavedra"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-[#f0f0f0] text-base font-semibold px-6 py-4 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 shadow-[0px_4px_10px_rgba(255,255,255,0.05)] transition-all duration-300 ease-in-out hover:bg-white/20 hover:-translate-y-1 hover:scale-[1.02]"
          >
            <svg className="w-6 h-6 transition-transform duration-300 ease-in-out group-hover:rotate-6 group-hover:scale-110" fill="currentColor" viewBox="0 0 24 24">
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
            </svg>
            LinkedIn
          </a>
        </li>
        <li>
          <a
            href="https://wa.me/527341167827"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-[#f0f0f0] text-base font-semibold px-6 py-4 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 shadow-[0px_4px_10px_rgba(255,255,255,0.05)] transition-all duration-300 ease-in-out hover:bg-white/20 hover:-translate-y-1 hover:scale-[1.02]"
          >
            <svg className="w-6 h-6 transition-transform duration-300 ease-in-out group-hover:rotate-6 group-hover:scale-110" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.031-.966-.273-.099-.47-.149-.668.149s-.765.966-.939 1.165c-.173.199-.345.223-.642.075-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.763-1.653-2.061-.173-.298-.019-.459.13-.608.134-.133.297-.347.446-.52.148-.174.198-.298.297-.497s.05-.373-.025-.522c-.074-.149-.668-1.607-.916-2.202-.242-.577-.487-.499-.668-.51s-.372-.012-.571-.012a1.093 1.093 0 0 0-.79.373c-.272.298-1.04 1.016-1.04 2.479s1.065 2.869 1.213 3.067c.148.198 2.1 3.012 5.084 4.228 2.52.994 2.52.662 2.971.619.451-.042 1.47-.601 1.677-1.18.207-.579.207-1.074.148-1.18-.06-.106-.223-.173-.52-.322z" />
              <path d="M12.004 2.003a9.917 9.917 0 0 0-9.913 9.92c0 1.748.465 3.467 1.344 4.962l-1.433 5.227 5.367-1.4c1.435.759 3.043 1.158 4.635 1.158h.004a9.922 9.922 0 0 0 9.92-9.92 9.922 9.922 0 0 0-9.92-9.947zm0 18.229h-.004c-1.429 0-2.84-.371-4.082-1.07l-.293-.163-3.181.83.855-3.127-.189-.316a7.978 7.978 0 0 1-1.156-4.131 7.93 7.93 0 0 1 7.924-7.938 7.93 7.93 0 0 1 7.937 7.938 7.93 7.93 0 0 1-7.931 7.977z" />
            </svg>
            WhatsApp
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default SocialLinks;

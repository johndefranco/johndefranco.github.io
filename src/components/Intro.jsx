import React from 'react';

function Intro() {
  return (
    <div className="flex items-center justify-center flex-col text-center pt-20 pb-6">
      <h1 className="text-5xl md:text-7xl mb-1 md:mb-3 font-bold">Hi, I'm John</h1>
      <p className="text-xl md:text-3xl mb-3 font-medium">Computer Science @ UVA</p>
      <div className="flex flex-row items-center justify-center gap-2">
        <a href="https://www.linkedin.com/in/john-defranco-49b746234" target="_blank" rel="noopener noreferrer">
          <img
            src="public/assets/linkedin.png"
            alt="LinkedIn"
            className="block mx-auto h-8 md:h-10 object-cover cursor-pointer"
          />
        </a>
        <a href="https://www.github.com/johndefranco" target="_blank" rel="noopener noreferrer">
          <img
            src="public/assets/github-mark.png"
            alt="Github"
            className="block mx-auto h-7 md:h-9 object-cover cursor-pointer"
          />
        </a>
      </div>
    </div>
  );
}

export default Intro;

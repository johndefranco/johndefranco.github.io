import React from 'react';

function PortfolioPopUp({ visible, title, imgUrl, stack }) {
  if (!visible) return null;

  return (
    <div className="border-2 border-stone-900 rounded-md overflow-hidden bg-white mx-auto w-4/5 max-w-l p-0 md: max-w-4xl">
      <img
        src={imgUrl}
        alt="portfolio"
        className="block mx-auto h-66 md:h-78 object-cover cursor-pointer"
      />
      <h3 className="text-lg md:text-xl mb-2 px-4 pt-4 md:mb-3 font-semibold">{title}</h3>
      <p className="flex flex-wrap gap-2 flex-row items-center justify-start text-xs px-4 pb-4 md:text-sm">
        {stack.map((item) => (
          <span key={item} className="inline-block px-2 py-2 font-semibold border-2 border-stone-900 rounded-md">
            {item}
          </span>
        ))}
      </p>
    </div>
  );
}

export default PortfolioPopUp;

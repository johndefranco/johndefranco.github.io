import React from 'react';

function PortfolioItem({title, imgUrl, stack, onClick}) {
    return (
        <div className="border-2 border-stone-900 rounded-md overflow-hidden">
            <img src={imgUrl} 
            alt="portfolio" 
            className="block mx-auto h-44 md:h-52 object-cover cursor-pointer"
            onClick={onClick}
            />

            <div className="w-full p-4">
                <h3 className="text-lg md:text-xl mb-2 md:mb-3 font-semibold">{title}</h3>
                <p className="flex flex-wrap gap-2 flex-row items-center justify-start text-xs md:text-sm">
                    {stack.map(item => (
                        <span className="inline-block px-2 py-2 font-semibold border-2 border-stone-900 rounded-md">
                            {item}
                        </span>
                    ))}
                </p>
            </div>
        </div>
    )
}

export default PortfolioItem;
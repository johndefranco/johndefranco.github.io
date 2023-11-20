import React, { useState } from 'react';
import portfolio from '../../data/portfolio';
import PortfolioItem from './PortfolioItem';
import PortfolioPopUp from './PortfolioPopUp';

function Portfolio() {
    const [showPopUp, setShowPopUp] = useState(false);
    const [selectedItem, setSelectedItem] = useState(null);

    const handleItemClick = (item) => {
        setSelectedItem(item);
        setShowPopUp(true);
    };

    const handleClosePopup = () => {
        setShowPopUp(false);
    };

    return (
        <div>
            <h1 className="flex items-center justify-center text-center pb-6 text-3xl md:text-4xl mb-1 md:mb-3 font-bold">Projects</h1>
            <div className="flex flex-col px-6 md:flex-row items-center justify-center">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {portfolio.map(project => (
                        <PortfolioItem
                            imgUrl={project.imgUrl}
                            title={project.title}
                            stack={project.stack}
                            onClick={() => handleItemClick(project)}
                        />
                    ))}
                </div>
            </div>
            {showPopUp && (
                <div className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center" onClick={handleClosePopup}>
                    <PortfolioPopUp visible={showPopUp} title={selectedItem.title} imgUrl = {selectedItem.imgUrl} stack={selectedItem.stack} description={selectedItem.description} link={selectedItem.link}/>
                </div>
            )}
        </div>
    );
}

export default Portfolio;
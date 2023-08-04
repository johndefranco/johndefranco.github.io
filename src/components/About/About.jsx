import React from 'react';
import AboutParagraph from './AboutParagraph';
import AboutGraph from './AboutGraph';

function About() {
    return (
            <div className="flex flex-col pb-4 px-8 md:flex-row items-center justify-center w-full">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12">
                    <AboutParagraph />
                    <AboutGraph />
                </div>
            </div>
    )
}

export default About;
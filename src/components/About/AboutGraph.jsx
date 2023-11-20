import React from 'react';
import aboutGraph from '../../data/aboutGraph';
import AboutGraphItem from './AboutGraphItem';

function AboutGraph() {
    return (
        <div className="flex flex-col gap-1 md:items-center justify-center pb-12">
             {aboutGraph.map(project => (
                 <AboutGraphItem 
                     language = {project.language}
                     percent = {project.percent}
                />
            ))}
        </div>
    )
}

export default AboutGraph;
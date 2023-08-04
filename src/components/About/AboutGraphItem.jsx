import React from 'react';

function AboutGraphItem({ language, percent }) {
  const percentWidth = {
    width: `${percent}%`,
  };
  const totalWidth = {
    width: `${100 - percent}%`,
  };

  return (
    <div className="flex flex-col items-left justify-center w-full">
      <h2>{language}</h2>
      <div className="flex flex-row">
        <div style={percentWidth} className="h-3 bg-gray-500 rounded-l-md"></div>
        <div style={totalWidth} className="h-3 bg-gray-300 rounded-r-md"></div>
      </div>
    </div>
  );
}

export default AboutGraphItem;
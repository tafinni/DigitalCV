import React from "react";
import rocket from '../../public/rocket.png'
import astronaut from '../../public/rocket.png'
import { FaLink } from "react-icons/fa6";

export default function SectionBox({ 
    title, 
    link, 
    linkDescription, 
    color, 
    leftColumn = [], 
    rightColumn = [], 
    lgImgSrc, 
    smImgSrc, 
    imgAlt 
}) {
    return (
        <section>

            {/* Title */}
            <div className="outline outline-solid outline-titleBlue mt-20 ml-10 mr-10 mb-2" 
            style={{ outlineWidth: '8px' }}>
                <h3 className="text-titleBlue">
                    {title}
                </h3>
            </div>

            {/* Content box */}
            <div className="outline outline-solid outline-titleBlue max-w-7xl mx-auto my-1 p-6 pr-0 pb-6 pt-0 bg-green0 ml-10 mr-10"
            style={{ outlineWidth: '8px', backgroundColor: color }}>

                {/* Optional link at top of content */}
                {link && (
                    <a href={link} target="_blank" rel="noopener noreferrer">
                        <h4 className="mb-2 text-center flex items-center justify-center text-titleBlue pt-4">
                            {linkDescription}
                            <FaLink className="ml-1 mr-3"/>
                        </h4>
                    </a>
                )}

                {/* Column box */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-2xl text-left">

                    {/* Left column */}
                    <div className="flex flex-col space-y-8 sm:pr-6 h-auto">
                        {leftColumn.map((box, index) =>
                        (
                            <React.Fragment key={index}>
                                {box}
                            </React.Fragment>
                        ))}
                    </div>

                    {/* Right column */}
                    <div className="flex flex-col space-y-8 h-full mr-6">
                        {rightColumn.map((box, index) =>
                        (
                            <React.Fragment key={index}>
                                {box}
                            </React.Fragment>
                        ))}

                        {/* Large image */}
                        {lgImgSrc && (
                            <div className="outline outline-solid outline-titleBlue flex justify-center items-center overflow-hidden mt-6 ml-0"
                            style={{ outlineWidth: '8px'}}>
                                <img
                                    src={lgImgSrc}
                                    alt={imgAlt}
                                    className="object-cover w-full h-full"
                                />
                            </div>
                        )}

                        {/* Small image */}
                        {smImgSrc && (
                            <div className="outline outline-solid outline-titleBlue bg-titleBlue flex justify-center items-center h-full overflow-hidden overflow-hidden"
                            style={{ outlineWidth: '8px', maxHeight: '200px' }}>
                                <img
                                    src={smImgSrc}
                                    alt={imgAlt}
                                    className="overflow-hidden transform scale-150 translate-y-32"
                                />
                            </div>
                        )}
                    </div>
                </ div>
            </ div>
        </section>
    );
}
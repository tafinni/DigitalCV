import React from "react";
import { FaLink } from 'react-icons/fa6';

export default function ProjectBox({ title, link, tech, summary, functionalities_title, description })
{
    return (
        <div className="standardBox text-center">
            <a href={link} target="_blank" rel="noopener noreferrer">
                <div className="outline outline-border outline-titleBlue inline-block bg-white p-5 pt-3 pb-2 hover:bg-pink0 transition-colors duration-300"
                style={{ outlineWidth: '8px' }}>
                <h4 className="font-semibold mb-2 text-center flex items-center justify-center">
                    {title}
                    <FaLink className="ml-5"/>
                </h4>
                </div>
            </a>
            <p className='text-center italic font-roboto mt-7'>{tech}</p>
            <p className='text-center font-semibold font-roboto m-3'>{summary}</p>
            <p className="font-semibold">{functionalities_title}</p>
            <p className="m-3 mt-0">{description}</p>
        </div>
    );
}
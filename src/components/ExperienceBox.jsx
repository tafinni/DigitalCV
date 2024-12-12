import React from "react";

export default function ExperienceBox({ title, places, subjects, times, locations, description })
{
    return (
        <div className="standardBox">
            <h4 className="font-semibold mb-2 text-center">{title}</h4>
            <hr className="border-t-8 border-solid border-titleBlue my-4" />
            
            {places.map((place, index) =>
            (
                <React.Fragment key={index}>
                    <h5 className="font-semibold mb-2 text-center mt-10">{place}</h5>
                    <p className='text-center font-semibold'>{subjects[index]}</p>
                    <p className='text-center italic font-roboto'>{times[index]}</p>
                    <p className='text-center pb-3'>{locations[index]}</p>
                    
                </React.Fragment>
            ))}
            <p className='text-center italic font-roboto mt-5'>{description}</p>
        </div>
    );
}
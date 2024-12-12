import React from "react";

export default function SkillBox({ title, skills })
{
    return (
        <div className="standardBox">
            <h4 className="font-semibold mb-2 text-center">{title}</h4>
            <hr className="border-t-8 border-solid border-titleBlue my-4" />
            <p className="columns-2 gap-4">
                {skills.map((skill, index) =>
                (
                    <React.Fragment key={index}>
                        {skill}
                        <br />
                    </React.Fragment>
                ))}
            </p>
        </div>
    );
}
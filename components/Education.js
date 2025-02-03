import React from 'react';

function Education() {
    const education = [
        {
            title: "Frontend Development", 
            course: "Coursera", 
            year: "2018 - 2019", 
        },
        {
            title: "Backend Development", 
            course: "Udemy", 
            year: "2019 - 2021", 
        },
        {
            title: "UI Design", 
            course: "University", 
            year: "2017 - 2018", 
        }
    ];

    return (
        <div id="education" className="flex flex-col items-center gap-[30px]">
            <span className="position-text flex text-4xl font-bold">Education</span>
            {education.map((item,index) => {
                return (
            
                    <div key={index} data-aos="zoom-in-up" className="experience-box flex flex-col gap-[10px] w-[90%] p-[20px] bg-[#0A0A0A] border-[2px] border-[#252525] rounded-[10px]">
                        <h1 className="text-xl text-white font-bold">{item.year}</h1>
                        <span className="text-xl font-bold text-white">{item.title}</span>
                        <span className="text-[#9B9B9B]">{item.course}</span>
                    </div>
                );
            })}
        </div>
    );
}

export default Education;

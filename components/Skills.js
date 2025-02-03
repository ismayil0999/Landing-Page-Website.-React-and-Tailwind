import React from 'react';

function Skills() {
   const skills = [
      {
         skill_name: "Figma", 
         skill_img: "./figma.svg" 
      },
      {
         skill_name: "Sketch", 
         skill_img: "./sketch.svg" 
      },
      {
         skill_name: "React", 
         skill_img: "./react.svg" 
      },
      {
         skill_name: "Javascript",
         skill_img: "./js.svg" 
      },
      {
         skill_name: "Css", 
         skill_img: "./css.png" 
      },
      {
         skill_name: "Php", 
         skill_img: "./php.png"
      }
   ];

   return (
      <div id="skills" className="flex flex-col gap-[30px] items-center justify-center pb-[70px]">
         <div>
            <span className="position-text text-4xl w-full text-center flex justify-center font-bold">My Skills</span>
         </div>
         <div className="grid w-[70%] max-[447px]:w-[80%] grid-cols-3 gap-[10px] max-[370px]:grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
            {skills.map((skill,index) => {
               return (
                  <div key={index} className="w-1/1 gap-[10px] flex flex-col items-center">
                     <div className="w-[100px] h-[100px]  bg-[#0A0A0A] rounded-[15px] flex items-center justify-center">
                        <img src={skill.skill_img} className="w-[50%] h-[50%]" alt={skill.skill_name}></img>
                     </div>
                     <h1 className="text-white title">{skill.skill_name}</h1>
                  </div>
               );
            })}
         </div>
      </div>
   );
}

export default Skills;

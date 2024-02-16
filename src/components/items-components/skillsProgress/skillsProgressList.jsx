import { useState } from "react";
import {progressData} from "./skillsData"
import SkillProgressItem from "./skillProgressItem";

function SkillsProgress() {
  const [skills,setSkills]=useState(progressData)
  return (
    <div className="skills-progress ">
      {skills.map( (skill)=>{
        return(
          <SkillProgressItem  data={skill} key={skill.id}/>
        )
      } )}
    </div>
  );
}

export default SkillsProgress;

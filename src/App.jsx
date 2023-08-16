import { useState } from "react";
import "./App.css";
import SkillsList from "./SkillsList";
import NewSkillForm from "./NewSkillForm";

export default function App() {
  const [skills, setSkills] = useState([
    { name: "HTML", level: 5 },
    { name: "CSS", level: 3 },
    { name: "JavaScript", level: 4 },
    { name: "Python", level: 2 },
  ]);

  function addSkill(skill) {
    setSkills([skill, ...skills]);
  }

  return (
    <div className="h-full App">
      <h1 className="p-8 text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r to-alpha from-beta">
        React Dev Skills
      </h1>
      <SkillsList skills={skills} />
      <NewSkillForm addSkill={addSkill} />
    </div>
  );
}
<span class="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">
  Better Data
</span>;

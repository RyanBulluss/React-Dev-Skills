import SkillsListItem from "./SkillsListItem"

export default function SkillsList({skills}) {
    return (
        <div className="m-16">
            <h2 className="m-8 text-4xl text-white font-bold">My Skills:</h2>
            <ul>
                {skills.map((skill, idx) => (
                    <SkillsListItem key={idx} skill={skill} />
                ))}
            </ul>
        </div>
    )
} 
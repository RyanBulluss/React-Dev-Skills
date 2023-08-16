export default function SkillsListItem({ skill }) {
    return (
        <li className="flex items-center justify-between p-3 m-2 text-xl border border-epsilon rounded-full shadow-sm shadow-black">
            <span className="text-xl font-bold">{skill.name}</span>
            <span className="p-3 font-bold rounded-full bg-gradient-to-r to-alpha from-beta">LEVEL {skill.level}</span>
        </li>
    )
}
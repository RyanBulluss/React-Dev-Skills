import { useState } from "react";

export default function NewSkillForm({ addSkill }) {
  const [form, setForm] = useState({ name: "", level: 3 });

  const handleLevelChange = (evt, type) => {
    const updatedForm = { ...form, [type]: evt.target.value };
    setForm(updatedForm);
  };

  function handleAddTodo(evt) {
    evt.preventDefault();
    addSkill(form);
    setForm({ name: "", level: 3 });
  }

  return (
    <div className="flex justify-center">
      <form
        className="flex flex-col p-10 my-16 text-lg border border-epsilon rounded-xl shadow-lg shadow-black"
        onSubmit={handleAddTodo}
      >
        <div className="m-4 text-left">
          <label className="font-bold" htmlFor="">
            Skill
          </label>
          <br />
          <input
            value={form.name}
            className="w-80 rounded-lg p-1 my-2 border-epsilon border bg-delta text-white text-xl"
            type="text"
            name="skill"
            id="skill"
            onChange={(evt) => handleLevelChange(evt, "name")}
          />
        </div>

        <div className="m-4 text-left">
          <label className="font-bold" htmlFor="">
            Level
          </label>
          <br />
          <select
            className="w-80 rounded-lg p-1 my-2 border-epsilon border bg-delta text-white text-xl"
            name="level"
            value={form.level}
            id="level"
            onChange={(evt) => handleLevelChange(evt, "level")}
          >
            <option value={1}>1</option>
            <option value={2}>2</option>
            <option value={3}>3</option>
            <option value={4}>4</option>
            <option value={5}>5</option>
          </select>
        </div>
        <button
          type="submit"
          className="p-0.5 inline-flex items-center justify-center group mx-auto mt-8 font-medium hover:text-white rounded-full bg-gradient-to-r to-alpha from-beta"
        >
          <span class="px-10 py-2.5 transition-all ease-in duration-200 bg-white dark:bg-gray-900 rounded-full group-hover:bg-opacity-0">
            Add Skill
          </span>
        </button>
      </form>
    </div>
  );
}

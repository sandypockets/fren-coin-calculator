import { useEffect } from "react";

export default function SelectBox({ label, state, setState }) {

  const nums = Array.from(Array(21).keys())
  const name = label.toLowerCase();

  function handleChange(e) {
    const val = e.target.value;
    if (val >= 0) {
      setState(prev => ({ ...prev, [e.target.name]: val }))
    }
  }

  return (
    <div className="mx-3 w-24">
      <label htmlFor={name} className="block text-sm font-medium text-center">
        {label}
      </label>
      <select
        id={`select-${name}`}
        name={name}
        className="
        mt-1 block w-full pl-3 py-2 text-base border-gray-300
        focus:outline-none focus:ring-indigo-500 focus:border-indigo-500
        sm:text-sm rounded-sm text-center
        border-2"
        value={state[name]}
        onChange={(e) => handleChange(e)}
      >
        {nums.map((num) => (
            <option key={num}>{num}</option>
        ))}
      </select>
    </div>
  )
}
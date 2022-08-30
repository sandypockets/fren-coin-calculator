export default function SelectBox({ label, state, setState }) {

  const name = label.toLowerCase();
  const optionNums = name === 'ufo' ? 3 : 21;
  const nums = Array.from(Array(optionNums).keys())

  function handleChange(e) {
    const val = e.target.value;
    if (val >= 0) {
      setState(prev => ({ ...prev, [e.target.name]: val }))
    }
  }

  return (
    <div className="mx-3 w-24">
      <label htmlFor={name} className="block text-sm font-medium text-center">
        {label === "oneofone" ? "1 of 1" : label}{name === 'ufo' && "🛸"}
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
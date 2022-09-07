export default function SelectBox({ label, state, setState }) {

  const name = label.toLowerCase();
  let optionNums = 0;

  if (name === 'ufo') {
    optionNums = 3
  } else if (name === 'afeoneofone' || name === 'afoneofone') {
    optionNums = 11
  } else {
    optionNums = 151
  }

  const nums = Array.from(Array(optionNums).keys())

  function handleChange(e) {
    const val = Number(e.target.value);
    if (val >= 0) {
      setState(prev => ({ ...prev, [e.target.name]: val }))
    }
  }

  function createLabel(str) {
    if (str === 'ufo') {
      return 'UFO 🛸'
    }
    if (str === 'afoneofone') {
      return "OG 1 of 1"
    }
    if (str === 'afeoneofone') {
      return 'AFE 1 of 1'
    }
    return str
  }

  return (
    <div className="mx-3 w-24">
      <label htmlFor={name} className="block text-sm font-medium text-center">
        {createLabel(name)}
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
export default function Input({ label, state, setState }) {

  function handleChange(e) {
    const val = e.target.value;
    if (val >= 0) {
      setState({
        ...state,
        [e.target.name]: val
      })
    }
  }

  const name = label.toLowerCase();

  return (
    <div className="flex flex-col mx-3 w-full">
      <label className="flex justify-center text-center">{label}</label>
      <input
        className="w-24 h-12 border-2 border-green-500 text-center mx-auto"
        type="number"
        name={name}
        onChange={(e) => handleChange(e)}
        value={state[name]}
      />
    </div>
  )
}
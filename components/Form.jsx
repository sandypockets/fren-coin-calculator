import Input from "./Input";
import { useState } from "react";

export default function Form({ state, setState }) {
  const [isChecked, setIsChecked] = useState(false);

  return (
    <section className="flex justify-center">
      <form className="flex flex-col p-6 max-w-min">
        <div className="flex">
          <Input label="Xenos" state={state} setState={setState} />
          <Input label="Femi" state={state} setState={setState} />
          <Input label="Lochias" state={state} setState={setState} />
          <Input label="Olu" state={state} setState={setState} />
        </div>
        <div className="flex flex-col">
          <div className="flex justify-center">
            <div>
              <span className="flex justify-center my-4">X</span>
              <div className="flex justify-center">
                <Input label="AFE" state={state} setState={setState} />
              </div>
            </div>
          </div>
          <div className="flex justify-center mt-6">
            <div onClick={() => setIsChecked(!isChecked)}>
              <input
                name="ufo"
                className="h-6 w-6"
                type="checkbox"
                checked={isChecked}
                onChange={(e) => setState({ ...state, ufo: e.target.checked })}
              />
              <label className="ml-2 align-top">I have a UFO 🛸 </label>
            </div>
          </div>
        </div>
      </form>
    </section>
  )
}
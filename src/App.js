import { useState } from "react";
import "./App.css";
import usePasswordGenerator from "./hooks/usePasswordGenerator";
import CheckBox from "./components/CheckBox";

function App() {
  const [length, setLength] = useState(4);
  const [copy, setCopy] = useState(false);
  const [checkBoxData, setCheckboxdata] = useState([
    { title: "Include UpperCase Letters", state: false },
    { title: "Include LowerCase Letters", state: false },
    { title: "Include Numbers", state: false },
    { title: "Include Symbols", state: false },
  ]);

  const handleCheckBoxData = (index) => {
    const updatecheckbox = [...checkBoxData];
    updatecheckbox[index].state = !updatecheckbox[index].state;
    setCheckboxdata(updatecheckbox);
  };

  const { password, errormessage, generatepassword } = usePasswordGenerator();

  const handleCopy = () => {
    navigator.clipboard.writeText(password);
    setCopy(true);
    setTimeout(() => {
      setCopy(false);
    }, 1000);
  };
  return (
    <div className="h-[100vh] bg-slate-600 flex items-center justify-center">
      <div className="w-[500px] bg-slate-300 py-7 rounded-md">
        {password && (
          <div className="w-full flex justify-between">
            <h3 className="p-5 flex items-center font-bold">{password}</h3>
            {copy ? (
              <button
                className="rounded-lg bg-red-500 m-5 p-2 hover:bg-red-950 text-white font-bold"
                onClick={handleCopy}
              >
                COPYED
              </button>
            ) : (
              <button
                className="rounded-lg bg-red-500 m-5 p-2 hover:bg-red-950 text-white font-bold"
                onClick={handleCopy}
              >
                COPY
              </button>
            )}
          </div>
        )}
        <div className="w-full">
          <span className="px-5 flex justify-between">
            <label className="font-bold">Character Length</label>
            <label className="font-bold">{length}</label>
          </span>
        </div>
        <div className="w-full p-5">
          <input
            type="range"
            min="4"
            max="20"
            value={length}
            onChange={(e) => setLength(e.target.value)}
            className="w-full "
          />
        </div>
        {errormessage && (
          <div className="px-5 py-5 text-red-700">*{errormessage}</div>
        )}
        <div className="px-5 grid grid-cols-2 gap-2">
          {checkBoxData.map((item, index) => {
            return (
              <div key={index}>
                <CheckBox
                  state={item.state}
                  onChange={() => handleCheckBoxData(index)}
                  title={item.title}
                />
              </div>
            );
          })}
        </div>
        <div className="w-full text-center">
          <button
            className="w-[90%] p-2 m-2 bg-red-600 rounded-lg font-bold text-white hover:bg-orange-700"
            onClick={() => generatepassword(checkBoxData, length)}
          >
            {" "}
            GENERATE{" "}
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;

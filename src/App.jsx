import "./App.css";
import AllNotes from "./components/AllNotes";
import InputBox from "./components/InputBox";
import { TiPlus } from "react-icons/ti";

function App() {
  return (
    <div className="App">
      <div className="h-[80px]">
        <div className="fixed bg-slate-500 w-full py-2">
          <h1 className="text-xl py-3 font-semibold ">Notely</h1>
          <InputBox />
        </div>
      </div>
      <AllNotes />
      <div className="flex justify-center sm:justify-end sm:px-5">
        <div className="add-button fixed rounded-lg p-2 bottom-4 sm:p-4 text-xl text-white bg-black border-2 ">
          <TiPlus />
        </div>
      </div>
    </div>
  );
}

export default App;

import { useState } from "react";
import "./App.css";

function App() {
  let allColors = ["red", "blue", "green", "yellow", "purple"];
  let [color, setColor] = useState("pink");

  return (
    <>
      <div
        style={{ backgroundColor: color }}
        className="w-full h-screen flex justify-center items-end gap-2 flex-wrap"
      >
        {allColors.map((colorItem, i) => (
          <button
            onClick={() => setColor(colorItem)}
            style={{ backgroundColor: colorItem }}
            key={i}
            className="text-black text-sm sm:text-base px-4 sm:px-6 py-2 sm:py-3      rounded-lg sm:rounded-xl shadow-md hover:shadow-lg hover:opacity-50      transition duration-300 mb-4 sm:mb-6"
          >
            {colorItem || "click me"}
          </button>
        ))}
      </div>
    </>
  );
}

export default App;

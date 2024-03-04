import { useState } from "react";
import "./App.css";
import plus_icon from "./assets/icons/172525_plus_icon.svg";
import trash_icon from "./assets/icons/icons8-trash.svg";

function App() {
  const [input, setInput] = useState("");
  const [toDoList, setToDoList] = useState([]);

  const setSingleTask = (e) => {
    setInput(e.target.value);
  };

  const addTask = (e) => {
    e.preventDefault();
    setToDoList([...toDoList, input]);
    setInput("");
  };

  const deleteTask = (index) => {
    const newToDo = [...toDoList];
    newToDo.splice(index, 1);
    setToDoList(newToDo);
  };

  return (
    <div className="bg-[#5973DF] h-screen flex justify-center items-center text-black">
      <div className="bg-white w-96 p-6 rounded-3xl">
        {/* Day, Task count and add task */}
        <div className="flex justify-between mb-7">
          <div>
            <p className="font-bold text-3xl">Friday, 1 Mar</p>
            <p className="font-semo-bold text-xl">{toDoList.length} tasks</p>
          </div>
        </div>

        {/* input task  */}
        <div className="flex justify-between gap-6 mb-6">
          <div className="flex-grow ">
            <input
              type="text"
              placeholder="Enter your task..."
              onChange={setSingleTask}
              value={input}
              name=""
              id=""
              className="h-full w-full shadow-none text-black bg-slate-500 border border-gray-300 px-4 py-2 rounded-md"
            />
          </div>
          <button onClick={addTask} className="bg-[#5973DF] rounded-full">
            <img src={plus_icon} alt="" />
          </button>
        </div>

        {/* display tasks */}
        <div className="text-black">
          <ul>
            {toDoList.map((task, index) => (
              <div key={index} className="flex justify-between mb-3">
                <li>{task}</li>
                <button onClick={() => deleteTask(index)}>
                  <img src={trash_icon} alt="" />
                </button>
              </div>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default App;

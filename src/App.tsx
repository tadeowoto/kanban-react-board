import "./App.css";
import { TodoWrapper } from "./components/TodoWrapper";
import { BoardProvider } from "./context/BoardContext";

function App() {
  return (
    <BoardProvider>
      <section className="w-full min-h-screen bg-mainBG flex flex-col gap-10">
        <div className="w-full flex justify-between flex-col items-center mt-3 gap-3 p-5">
          <h1 className="text-3xl font-body font-semibold tracking-wide">
            Kanban Board
          </h1>
          <button className="w-full bg-black text-white p-3 rounded-xl">
            Add new Note
          </button>
        </div>
        <div className="flex flex-col items-center justify-center gap-10 p-3">
          {}
          <TodoWrapper title="To Do" />
          <TodoWrapper title="In Progress" />
          <TodoWrapper title="Done" />
        </div>
      </section>
    </BoardProvider>
  );
}

export default App;

import "./App.css";
import { TodoWrapper } from "./components/TodoWrapper";

function App() {
  return (
    <>
      <section className="w-full min-h-screen bg-mainBG flex flex-col gap-10">
        <div>
          <h1 className="text-3xl font-body">Kanban Board</h1>
          <button>Add new Note</button>
        </div>
        <div className="flex flex-col items-center justify-center gap-10 p-3">
          <TodoWrapper title="To Do" />
          <TodoWrapper title="In Progress" />
          <TodoWrapper title="Done" />
        </div>
      </section>
    </>
  );
}

export default App;

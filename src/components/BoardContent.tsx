import React, { useState, useContext } from "react";

import { TodoWrapper } from "./TodoWrapper";
import { BoardContext } from "../context/BoardContext";

// Componente separado para manejar el formulario y el contexto
export const BoardContent = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [noteText, setNoteText] = useState("");

  const context = useContext(BoardContext);

  if (!context) {
    throw new Error("TodoWrapper debe usarse dentro de un BoardProvider");
  }

  const { setNotes } = context;

  const showForm = () => {
    if (isFormOpen) {
      return;
    }
    setIsFormOpen(true);
  };

  const handleForm = (e: React.FormEvent) => {
    e.preventDefault();
    setIsFormOpen(false);
    const colorNumber = Math.floor(Math.random() * 9);
    const colors = [
      "bg-pastel-pink",
      "bg-pastel-blue",
      "bg-pastel-green",
      "bg-pastel-yellow",
      "bg-pastel-purple",
      "bg-pastel-peach",
      "bg-pastel-mint",
      "bg-pastel-lavender",
      "bg-pastel-coral",
      "bg-pastel-turquoise",
    ];

    const newNote = {
      id: Date.now().toString(),
      task: noteText,
      state: "todo" as const, // es para decirle a ts que es el valor exacto literal "todo"
      color: colors[colorNumber],
    };
    setNotes((prevNotes) => [...prevNotes, newNote]);
    setNoteText("");
  };

  return (
    <>
      <div className="w-full flex justify-between flex-col items-center mt-3 gap-3 p-5">
        <h1 className="text-3xl font-body font-semibold tracking-wide">
          Kanban Board
        </h1>
        <button
          onClick={showForm}
          className="w-full bg-black text-white p-3 rounded-xl"
        >
          Add new Note
        </button>
        <form
          action="submit"
          className={isFormOpen ? "flex flex-col gap-2" : "hidden"}
          onSubmit={(event) => handleForm(event)}
        >
          <textarea
            name="note"
            id="note"
            value={noteText}
            onChange={(e) => setNoteText(e.target.value)}
            placeholder="Write your note here..."
            className="p-2 rounded-xl border border-gray-400"
          />
          <button
            type="submit"
            className=" bg-mainBG text-black rounded-xl p-1 border border-gray-400"
          >
            Submit
          </button>
        </form>
      </div>
      <div className="flex flex-col items-center justify-center gap-10 p-3">
        <TodoWrapper title="To Do" />
        <TodoWrapper title="In Progress" />
        <TodoWrapper title="Done" />
      </div>
    </>
  );
};

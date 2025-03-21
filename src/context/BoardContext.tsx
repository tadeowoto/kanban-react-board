import { createContext, useState, ReactNode } from "react";

type State = "todo" | "inProgress" | "done";

interface Note {
  id: string;
  task: string;
  desc?: string;
  state: State;
}

type Notes = Note[];

// Tipo del contexto
interface BoardContextType {
  todoNotes: Notes;
  inProgressNotes: Notes;
  doneNotes: Notes;
  setNotes: React.Dispatch<React.SetStateAction<Notes>>;
}

//defino a proposito el undefined asi manejo el error en caso de no existor el context
export const BoardContext = createContext<BoardContextType | undefined>(
  undefined
);

interface BoardProviderProps {
  children: ReactNode;
}

export const BoardProvider = ({ children }: BoardProviderProps) => {
  const [notes, setNotes] = useState<Notes>([
    {
      id: "1",
      task: "Example",
      desc: "Description 1",
      state: "todo",
    },
    {
      id: "2",
      task: "Example",
      desc: "Description 2",
      state: "inProgress",
    },
    {
      id: "3",
      task: "Example",
      desc: "Description 3",
      state: "done",
    },
  ]);

  const todoNotes = notes.filter((note) => note.state === "todo");
  const inProgressNotes = notes.filter((note) => note.state === "inProgress");
  const doneNotes = notes.filter((note) => note.state === "done");

  const contextValue: BoardContextType = {
    todoNotes,
    inProgressNotes,
    doneNotes,
    setNotes,
  };

  return (
    <BoardContext.Provider value={contextValue}>
      {children}
    </BoardContext.Provider>
  );
};

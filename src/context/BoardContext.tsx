import { createContext, useState, ReactNode } from "react";

type State = "todo" | "inProgress" | "done";

interface Note {
  id: number;
  task: string;
  desc?: string;
  state: State;
  color: string;
}

type Notes = Note[];

// Tipo del contexto
interface BoardContextType {
  todoNotes: Notes;
  inProgressNotes: Notes;
  doneNotes: Notes;
  setNotes: React.Dispatch<React.SetStateAction<Notes>>;
  todoCounter: number;
  inProgressCounter: number;
  doneCounter: number;
  setTodoCounter: React.Dispatch<React.SetStateAction<number>>;
  setInProgressCounter: React.Dispatch<React.SetStateAction<number>>;
  setDoneCounter: React.Dispatch<React.SetStateAction<number>>;
  changeNoteStatus: (id: number, state: State) => void;
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
      id: 1,
      task: "Learn React",
      desc: "Description 1",
      state: "todo",
      color: "bg-pastel-pink",
    },
    {
      id: 2,
      task: "Drink Mate 🧉",
      desc: "Description 2",
      state: "inProgress",
      color: "bg-pastel-blue",
    },
    {
      id: 3,
      task: "folow tadeowoto on github",
      desc: "Description 3",
      state: "done",
      color: "bg-pastel-green",
    },
  ]);

  const todoNotes = notes.filter((note) => note.state === "todo");

  const inProgressNotes = notes.filter((note) => note.state === "inProgress");
  const doneNotes = notes.filter((note) => note.state === "done");

  const [todoCounter, setTodoCounter] = useState(todoNotes.length);
  const [inProgressCounter, setInProgressCounter] = useState(
    inProgressNotes.length
  );
  const [doneCounter, setDoneCounter] = useState(doneNotes.length);

  const changeNoteStatus = (id: number, state: State) => {
    setNotes(
      (prevNotes) =>
        prevNotes.map((note) => (note.id === id ? { ...note, state } : note)) //si coincide, que copie todo y sobreescriba el estado y si no, que devuelva la nota
    );

    if (state === "todo") {
      setTodoCounter((prevCount) => prevCount + 1);
      setInProgressCounter((prevCount) => prevCount - 1);
      setDoneCounter((prevCount) => prevCount - 1);
    } else if (state === "inProgress") {
      setTodoCounter((prevCount) => prevCount - 1);
      setInProgressCounter((prevCount) => prevCount + 1);
      setDoneCounter((prevCount) => prevCount - 1);
    } else if (state === "done") {
      setTodoCounter((prevCount) => prevCount - 1);
      setInProgressCounter((prevCount) => prevCount - 1);
      setDoneCounter((prevCount) => prevCount + 1);
    } // TODO MEJORAR LA LOGICA
  };

  const contextValue: BoardContextType = {
    todoNotes,
    inProgressNotes,
    doneNotes,
    setNotes,
    todoCounter,
    inProgressCounter,
    doneCounter,
    setTodoCounter,
    setInProgressCounter,
    setDoneCounter,
    changeNoteStatus,
  };

  return (
    <BoardContext.Provider value={contextValue}>
      {children}
    </BoardContext.Provider>
  );
};

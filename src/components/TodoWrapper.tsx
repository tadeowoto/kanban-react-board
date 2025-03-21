import { TodoPost } from "./TodoPost";
import { useContext } from "react";
import { BoardContext } from "../context/BoardContext.tsx";
type Props = {
  title: string;
};

export const TodoWrapper = ({ title }: Props) => {
  const context = useContext(BoardContext);

  if (!context) {
    throw new Error("TodoWrapper debe usarse dentro de un BoardProvider");
  }

  const { todoNotes, inProgressNotes, doneNotes } = context;

  return (
    <article className="flex flex-col gap-3 bg-wapper w-full h-fit p-3 font-body font-semibold rounded-lg border border-gray-400">
      <div className=" w-9/10 flex justify-between">
        <h1 className="text-xl">{title}</h1>
        <span className="text-sm bg-gray-200 p-1 rounded-full text-gray-500">
          10
        </span>
      </div>
      <div className="w-full flex flex-col gap-3  ">
        {title === "To Do"
          ? todoNotes.map((note) => (
              <TodoPost
                key={note.id}
                task={note.task}
                desc={note.desc}
                color={note.color}
              />
            ))
          : title === "In Progress"
          ? inProgressNotes.map((note) => (
              <TodoPost
                key={note.id}
                task={note.task}
                desc={note.desc}
                color={note.color}
              />
            ))
          : doneNotes.map((note) => (
              <TodoPost
                key={note.id}
                task={note.task}
                desc={note.desc}
                color={note.color}
              />
            ))}
      </div>
    </article>
  );
};

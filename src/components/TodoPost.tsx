import Arrow from "../assets/arrow.svg";
import { useState } from "react";
import { useContext } from "react";
import { BoardContext } from "../context/BoardContext";

type Props = {
  id: number;
  task: string;
  color: string;
  desc?: string;
  state: string;
};

type State = "todo" | "inProgress" | "done";

export const TodoPost = ({ id, task, color, state }: Props) => {
  const [menu, setMenu] = useState(false);

  const context = useContext(BoardContext);

  if (!context) {
    throw new Error("TodoWrapper debe usarse dentro de un BoardProvider");
  }

  const { changeNoteStatus } = context;

  const handleNoteStatus = (id: number, state: State) => {
    changeNoteStatus(id, state);
  };

  return (
    <article
      className={`${color} relative flex justify-between w-full h-20 p-2 font-body rounded-lg`}
    >
      <div>
        <p className="text-md">{task}</p>
      </div>
      <div className="flex flex-col">
        <button
          onClick={() => {
            setMenu(!menu);
          }}
        >
          <img src={Arrow} alt="arrow" className="w-5" />
        </button>
      </div>
      {menu && (
        <div className="w-30 h-20 flex flex-col items-center justify-center rounded-lg shadow-2xl gap-2 absolute left-38 top-8 bg-mainBG text-sm">
          <p>Move to</p>
          {state === "todo" ? (
            <>
              <button onClick={() => handleNoteStatus(id, "inProgress")}>
                In progress
              </button>
              <button onClick={() => handleNoteStatus(id, "done")}>Done</button>
            </>
          ) : state === "inProgress" ? (
            <>
              <button onClick={() => handleNoteStatus(id, "todo")}>Todo</button>
              <button onClick={() => handleNoteStatus(id, "done")}>Done</button>
            </>
          ) : (
            <>
              <button onClick={() => handleNoteStatus(id, "todo")}>Todo</button>
              <button onClick={() => handleNoteStatus(id, "inProgress")}>
                In progress
              </button>
            </>
          )}
        </div>
      )}
    </article>
  );
};

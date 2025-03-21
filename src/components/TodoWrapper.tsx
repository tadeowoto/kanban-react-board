import { TodoPost } from "./TodoPost";

type Props = {
  title: string;
};

export const TodoWrapper = ({ title }: Props) => {
  return (
    <article className="flex flex-col gap-3 bg-wapper w-full h-fit p-3 font-body font-semibold rounded-lg border border-gray-400">
      <div className=" w-9/10 flex justify-between">
        <h1 className="text-xl">{title}</h1>
        <span className="text-sm bg-gray-200 p-1 rounded-full text-gray-500">
          10
        </span>
      </div>
      <div className="w-full flex flex-col gap-3  ">
        <TodoPost task="Task 1" />
        <TodoPost task="Task 2" />
        <TodoPost task="Task 3" />
      </div>
    </article>
  );
};

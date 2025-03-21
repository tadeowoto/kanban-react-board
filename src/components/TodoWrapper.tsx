type Props = {
  title: string;
};

export const TodoWrapper = ({ title }: Props) => {
  return (
    <article className="flex flex-col bg-wapper w-full h-50 p-2 font-body font-semibold rounded-lg border border-gray-400">
      <div className=" w-9/10 flex justify-between">
        <h1 className="text-xl">{title}</h1>
        <span className="text-sm">10</span>
      </div>
      <div className="w-full h-1/2 ">{/* <TodoList /> */}</div>
    </article>
  );
};

type Props = {
  task: string;
  color: string;
  desc?: string;
};

export const TodoPost = ({ task, color }: Props) => {
  return (
    <article
      className={`${color} flex flex-col w-full h-20 p-2 font-body rounded-lg`}
    >
      <p className="text-md">{task}</p>
    </article>
  );
};

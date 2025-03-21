type Props = {
  task: string;
  desc: string;
};

export const TodoPost = ({ task }: Props) => {
  //TODO get random number to randomize the color
  return (
    <article className={`flex flex-col w-full  p-2 font-body rounded-lg`}>
      <h1>{task}</h1>
    </article>
  );
};

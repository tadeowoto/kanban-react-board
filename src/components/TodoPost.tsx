type Props = {
  task: string;
  desc?: string;
};

export const TodoPost = ({ task }: Props) => {
  //TODO get random number to randomize the color

  const colorNumber = Math.floor(Math.random() * 5);
  const colors = [
    "bg-light-blue",
    "bg-light-pink",
    "bg-light-yellow",
    "bg-light-green",
    "bg-light-violet",
  ];

  return (
    <article
      className={`${colors[colorNumber]} flex flex-col w-full h-20 p-2 font-body rounded-lg`}
    >
      <h1>{task}</h1>
    </article>
  );
};

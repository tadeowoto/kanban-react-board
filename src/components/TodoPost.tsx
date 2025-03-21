type Props = {
  task: string;
  desc?: string;
};

export const TodoPost = ({ task }: Props) => {
  //TODO get random number to randomize the color

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

  return (
    <article
      className={`${colors[colorNumber]} flex flex-col w-full h-20 p-2 font-body rounded-lg`}
    >
      <p className="text-md">{task}</p>
    </article>
  );
};

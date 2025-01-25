type Props = {
  content: string;
};

export const Badge = (props: Props) => {
  return (
    <span
      className={`bg-lime-300 border-lime-500 text-lime-800 border-[1px] text-[7pt] w-auto p-[2px] rounded-full min-w-[50px] text-center items-center justify-center`}
    >
      {props.content}
    </span>
  );
};

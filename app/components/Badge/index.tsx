type Props = {
  content: string;
};

export const Badge = (props: Props) => {
  return (
    <span
      className={`bg-neutral-700 text-xs w-auto p-1 rounded-full min-w-[50px] text-center items-center justify-center`}
    >
      {" "}
      {props.content}{" "}
    </span>
  );
};

interface INotationProps {
  text: string;
}

export function Notation(props: INotationProps) {
  const { text } = props;

  return (
    <div className="flex items-center gap-4">
      <h5
        title={text}
        aria-label={"Notation related to " + text}
        className="text-definition-noun-light dark:text-definition-noun-dark text-lg md:text-2xl font-bold italic lowercase"
      >
        {text}
      </h5>

      <hr className="border-definition-divisor-light dark:border-definition-divisor-dark w-full" />
    </div>
  );
}

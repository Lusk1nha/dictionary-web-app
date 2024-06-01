import classNames from "classnames";

interface ISwitchProps {
  name: string;
  active: boolean;
  onClick: () => void;
}

export function Switch(props: ISwitchProps) {
  const { name, active, onClick } = props;

  return (
    <button
      type="button"
      aria-label="Switch button"
      title="Click here to switch"
      name={name}
      className={classNames(
        "w-10 h-5 flex items-center p-[3px] rounded-[10px] transition-all cursor-pointer relative",
        active
          ? "bg-switch-active justify-end"
          : "bg-switch-inactive justify-start"
      )}
      onClick={onClick}
    >
      <div
        className={classNames(
          "bg-switch-ball w-3.5 h-3.5 rounded-full absolute transition-all",
          active ? "right-1" : "left-1"
        )}
      />
    </button>
  );
}

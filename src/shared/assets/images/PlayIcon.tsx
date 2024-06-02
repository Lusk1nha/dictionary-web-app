interface IPlayIconProps {
  svgClassName?: string;
  pathClassName?: string;
}

export function PlayIcon(props: IPlayIconProps) {
  const { svgClassName, pathClassName } = props;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="75"
      height="75"
      viewBox="0 0 75 75"
      className={svgClassName ? svgClassName : ""}
    >
      <g>
        <circle cx="37.5" cy="37.5" r="37.5" />
        <path
          d="M29 27v21l21-10.5z"
          className={pathClassName ? pathClassName : ""}
        />
      </g>
    </svg>
  );
}

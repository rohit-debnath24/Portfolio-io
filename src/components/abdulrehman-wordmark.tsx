export function AbdulRehmanWordmark(props: React.ComponentProps<"svg">) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1700 500"
      fill="none"
      {...props}
    >
      <text
        x="50%"
        y="50%"
        dominantBaseline="middle"
        textAnchor="middle"
        fill="currentColor"
        fontFamily="system-ui, -apple-system, sans-serif"
        fontWeight="800"
        fontSize="240"
        letterSpacing="-0.04em"
      >
        Rohit Debnath
      </text>
    </svg>
  );
}

export function getWordmarkSVG(color: string) {
  return `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 2048 256"><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" font-family="system-ui, -apple-system, sans-serif" font-weight="800" font-size="140" letter-spacing="-0.04em" fill="${color}">Rohit Debnath</text></svg>`;
}

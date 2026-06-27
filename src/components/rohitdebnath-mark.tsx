export function RohitDebnathMark(props: React.ComponentProps<"svg">) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 400 400"
      fill="none"
      {...props}
    >
      <defs>
        <style>
          {`
            @import url('https://fonts.googleapis.com/css2?family=Great+Vibes&display=swap');
            .rd-text {
              font-family: 'Great Vibes', cursive;
              font-size: 240px;
              fill: currentColor;
            }
          `}
        </style>
      </defs>
      <text
        x="50%"
        y="55%"
        textAnchor="middle"
        dominantBaseline="middle"
        className="rd-text"
      >
        rd
      </text>
    </svg>
  );
}

export function getMarkSVG(color: string) {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 400" fill="none"><defs><style>@import url('https://fonts.googleapis.com/css2?family=Great+Vibes&amp;display=swap');.rd-text{font-family:'Great Vibes',cursive;font-size:240px;fill:${color};}</style></defs><text x="50%" y="55%" text-anchor="middle" dominant-baseline="middle" class="rd-text">rd</text></svg>`;
}

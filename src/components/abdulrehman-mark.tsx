export function AbdulRehmanMark(props: React.ComponentProps<"svg">) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 512 256"
      {...props}
    >
      <path
        fill="currentColor"
        d="
            M0 0h64v256H0V0Z
            M64 0h128v64H64V0Z
            M192 64h64v64h-64V64Z
            M64 128h128v64H64v-64Z
            M192 192h64v64h-64v-64Z
            M256 0h64v256h-64V0Z
            M320 0h128v64H320V0Z
            M448 64h64v128h-64V64Z
            M320 192h128v64H320v-64Z
          "
      ></path>
    </svg>
  );
}

export function getMarkSVG(color: string) {
  return `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 256 128"><path fill="${color}" d="M0 0h32v128H0V0ZM32 0h64v32H32V0ZM96 32h32v32H96V32ZM32 64h64v32H32V64ZM96 96h32v32H96V96ZM128 0h32v128H128V0ZM160 0h64v32H160V0ZM224 32h32v64H224V32ZM160 96h64v32H160V96Z"/></svg>`;
}

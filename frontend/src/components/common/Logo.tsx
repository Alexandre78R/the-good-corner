import Image from "next/image";

interface ILogo {
  width?: number;
  height?: number;
}

function Logo({ width = 50, height = 50 }: ILogo) {
  return (
    <Image
      src="/logo.svg"
      width={width}
      height={height}
      alt="Logo de the good corner"
    />
  );
}

export default Logo;
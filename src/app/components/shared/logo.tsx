import Link from "next/link";
import Image from "next/image";

interface LogoProps {
  width: number;
  height: number;
}
export const Logo: React.FC<LogoProps> = ({ width, height }) => {
  return (
    <Link href="#" className="-m-1.5 p-1.5">
      <span className="sr-only">Your Company</span>
      <Image
        width={width}
        height={height}
        src="/svgs/products-nav/ana.jpg"
        alt="Logo"
      />
    </Link>
  );
};

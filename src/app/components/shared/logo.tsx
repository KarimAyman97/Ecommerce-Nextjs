import Link from "next/link";
import Image from "next/image";

export const Logo: React.FC = () => {
  return (
    <Link href="#" className="mx-auto">
      <span className="sr-only">Your Company</span>
      <div className={`relative  w-16 h-16`}>
        <Image priority fill={true} src="/logo.jpg" alt="Logo" />
      </div>
    </Link>
  );
};

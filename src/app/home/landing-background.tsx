import Image from "next/image";

export const Background: React.FC = () => {
  return (
    <div className="absolute top-0 left-0 w-full h-screen z-0">
      <Image key={0} src="/imgs/bg4.jpg" alt="carousel image" fill={true} />
    </div>
  );
};

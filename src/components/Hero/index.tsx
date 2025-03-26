import Image from "next/image";

const Hero = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <Image
        src="/silo.png"
        alt="Logo"
        width={500}
        height={500}
      />
    </div>
  );
};

export default Hero;

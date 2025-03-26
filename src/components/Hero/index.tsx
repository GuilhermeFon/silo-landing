import Image from "next/image";

const Hero = () => {
  return (
    <section className="container mx-auto px-2 py-20 lg:py-20 text-center flex justify-center items-center h-screen">
      <Image src="/silo.png" alt="Logo" width={500} height={500} />
    </section>
  );
};

export default Hero;

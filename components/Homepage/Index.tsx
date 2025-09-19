import React from "react";
import { BackgroundBeamsWithCollision } from "../ui/background-beams-with-collision";
import { FlipWords } from "../ui/flip-words";
import { Button } from "../ui/button";
import { Cover } from "../ui/cover";
import Link from "next/dist/client/link";

const Index = () => {
  const words = ["conversion", "revenue", "visibility", "engagement", "growth"];

  return (
    <BackgroundBeamsWithCollision>
      <div className="h-[50rem] flex flex-col justify-center items-center pt-32 px-4 text-center">
        <div className="text-3xl md:text-4xl font-bold text-neutral-800 dark:text-white">
          We build websites that boost
          <br />
          <FlipWords
            words={words}
            className="text-[#fb2c36] dark:text-[#fb2c36]"
          />
        </div>

        <div>
          <h2 className="text-6xl mt-2 font-bold bg-clip-text text-transparent ">
            <Cover>CeasorCodes</Cover>
          </h2>
        </div>

        <div className="max-w-2xl mx-auto mt-8 text-xl text-neutral-600 dark:text-neutral-300 font-light">
          <p>
            CeasorCodes transforms businesses through cutting-edge web
            applications and digital experiences. We specialize in creating
            responsive, high-performance websites that drive measurable results.
          </p>
          <p>
            Our solutions combine stunning design with powerful functionality to
            elevate your online presence, attract more customers, and accelerate
            your business growth in the digital landscape.
          </p>
        </div>

        <Button className=" mt-4 px-8 py-3 rounded-full bg-gradient-to-r from-[#fb2c36] to-[#fb2c36]/50 text-white text-lg font-medium hover:from-[#fb2c36]/70 hover:to-[#fb2c36]/70 transition-all duration-300 shadow-lg hover:shadow-xl">
          <Link href="/about-me">Learn more about Me</Link>
        </Button>
      </div>
    </BackgroundBeamsWithCollision>
  );
};

export default Index;

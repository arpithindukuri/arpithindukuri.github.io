import type { NextPage } from "next";
import { IPost } from "../types";
import Link from "next/link";
import { Button } from "../components/Button";

// props type
type Props = {
  posts: [IPost];
};

// component render function
const About: NextPage<Props> = () => {
  return (
    <div className="flex min-h-full w-full flex-col space-y-20 p-16 md:flex-row md:space-y-0">
      <div className="flex min-h-full w-full flex-auto items-center justify-center">
        <div className="prose-lg flex h-fit w-fit max-w-none flex-col font-medium text-neutral-400">
          <h3 className="m-0 sm:ml-0 md:ml-16 lg:ml-24 xl:ml-32">
            Hi, I&apos;m
          </h3>
          <h1 className="m-0 font-semibold text-orange-600 sm:ml-0 md:ml-16 lg:ml-24 xl:ml-32">
            Daniel
          </h1>
          <span className="m-0 mt-8 sm:ml-0 md:ml-16 lg:ml-24 xl:ml-32">
            I recently graduated with a double major in Software Engineering and
            Finance from the University of Calgary. I started my career doing
            software contracts as a freelancer, and am currently working on
            CaterQuick, a passion project of mine.
          </span>
          <span className="m-0 mt-2 sm:ml-0 md:ml-16 lg:ml-24 xl:ml-32">
            If you would like to get in touch with me, or learn more about my
            professional experience, please find me Email, LinkedIn, and other
            information in my resume.
          </span>
        </div>
      </div>
      <div className="flex min-h-full w-full items-center justify-center">
        <div className="flex h-fit w-fit flex-col space-y-12">
          <Link href="/">
            <Button className="w-full">Home</Button>
          </Link>
          <Link href="/p">
            <Button className="w-full">Portfolio</Button>
          </Link>
          <Link href="/assets/Resume - Arpith (Daniel) Indukuri.pdf">
            <Button className="w-full">Resume</Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default About;

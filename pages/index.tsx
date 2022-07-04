import type { NextPage } from "next";
import { IPost } from "../types";
import Link from "next/link";
import { Button } from "../components/Button";

// props type
type Props = {
  posts: [IPost];
};

// component render function
const Home: NextPage<Props> = () => {
  return (
    <div className="flex min-h-full w-full flex-col space-y-20 p-16 md:flex-row md:space-y-0">
      <div className="flex min-h-full w-full flex-auto items-center justify-center">
        <div className="prose-lg flex h-fit w-fit max-w-none flex-col font-medium text-neutral-400">
          <h3 className="m-0">Hi, I&apos;m</h3>
          <h1 className="m-0 font-semibold text-orange-600">Danny,</h1>
          <h3 className="m-0 mt-16">Welcome to my</h3>
          <h1 className="m-0 font-semibold text-neutral-700">Portfolio</h1>
        </div>
      </div>
      <div className="flex min-h-full w-full items-center justify-center">
        <div className="flex h-fit w-fit flex-col space-y-12">
          <Link href="/">
            <Button>Home</Button>
          </Link>
          <Link href="/p">
            <Button>Portfolio</Button>
          </Link>
          <Link href="/about">
            <Button>About</Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;

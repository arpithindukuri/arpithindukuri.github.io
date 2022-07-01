import Thumbnail from "../components/Thumbnail";
import type { NextPage, GetStaticProps } from "next";
import { IPost } from "../types/post";
import Link from "next/link";
import { getAllPosts } from "../utils/mdxUtils";
import { Button } from "../components/Button";

// props type
type Props = {
  posts: [IPost];
};

// component render function
const Home: NextPage<Props> = ({ posts }: Props) => {
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
          <Link href="/portfolio">
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

// get posts from serverside at build time
export const getStaticProps: GetStaticProps = async () => {
  const posts = getAllPosts([
    "title",
    "slug",
    "date",
    "description",
    "thumbnail",
  ]);

  // retunr the posts props
  return { props: { posts } };
};

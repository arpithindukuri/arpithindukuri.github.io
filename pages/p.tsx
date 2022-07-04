import type { NextPage, GetStaticProps } from "next";
import { IPost } from "../types";
import { getAllPosts } from "../utils/mdxUtils";
import { PortfolioCard } from "../components/PortfolioCard";

// props type
type Props = {
  posts: IPost[];
};

// component render function
const Portfolio: NextPage<Props> = ({ posts }: Props) => {
  return (
    <div className="space-y-16 px-8 py-4 md:px-16 xl:px-32">
      {/* <div className="prose">
        <h1 className="text-neutral-500">Portfolio</h1>
      </div> */}

      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-12 xl:grid-cols-3 xl:gap-16">
        {posts.map((post) => (
          <PortfolioCard key={post.slug} post={post} />
        ))}
      </div>
    </div>
  );
};

export default Portfolio;

// get posts from serverside at build time
export const getStaticProps: GetStaticProps = async () => {
  const posts = getAllPosts([
    "title",
    "slug",
    "dateCreated",
    "dateUpdated",
    "description",
    "thumbnailPath",
    "tags",
  ]);

  // retunr the posts props
  return { props: { posts } };
};

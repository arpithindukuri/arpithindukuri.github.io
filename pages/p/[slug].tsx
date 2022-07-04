import { serialize } from "next-mdx-remote/serialize";
import { GetStaticProps, GetStaticPaths } from "next";
import { useEffect } from "react";
import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote";

import { useMdxComponentsContext } from "../../context/mdxContext";
import { IPost } from "../../types";
import { getPost, getAllPosts } from "../../utils/mdxUtils";
import { ParsedUrlQuery } from "querystring";
import Tags from "../../components/Tags";
import Image from "next/image";

// props type
type Props = {
  source: MDXRemoteSerializeResult;
  frontMatter: Omit<IPost, "slug">;
};

// components to render
const components = {
  Tags,
};

const PostPage: React.FC<Props> = ({ source, frontMatter }: Props) => {
  // get setters
  const { setTags } = useMdxComponentsContext();

  useEffect(() => {
    // set prerequisites
    setTags(frontMatter.tags);
  }, [setTags, frontMatter.tags]);

  return (
    <div>
      <article className="prose-lg prose-neutral max-w-none p-8">
        <header className="relative flex h-fit w-full flex-col space-y-16 overflow-hidden p-8 pb-24">
          <div className="absolute top-0 left-0 h-full w-full">
            {/* <Image
              className="m-0 max-w-none blur-sm bg-fixed"
              src={frontMatter.thumbnailPath}
              alt={`image: ${frontMatter.thumbnailPath.split(".")[0]}`}
              height={800}
              width={1200}
              layout="responsive"
            /> */}
            <div
              className="absolute top-0 left-0 h-full w-full bg-cover bg-fixed bg-center bg-no-repeat blur-md"
              style={{ backgroundImage: `url(${frontMatter.thumbnailPath})` }}
            />
            <div className="absolute top-0 left-0 h-full w-full bg-slate-900 opacity-50" />
            <div className="absolute top-0 left-0 h-full w-full shadow-image" />
          </div>

          <h1 className="z-10 font-extrabold text-white">
            {frontMatter.title}
          </h1>

          <h2 className="z-10 font-medium text-white">
            {frontMatter.description}
          </h2>

          <div className="z-10 flex w-full justify-between">
            <Tags />
          </div>
        </header>

        <div className="px-8 py-8 md:px-16 lg:px-32">
          <MDXRemote components={components} {...source} />
        </div>
      </article>
    </div>
  );
};

export default PostPage;

interface Iparams extends ParsedUrlQuery {
  slug: string;
}

export const getStaticProps: GetStaticProps = async (context) => {
  const { slug } = context.params as Iparams;
  // get the slug
  const { content, data } = getPost(slug);
  // serialize the data on the server side
  const mdxSource = await serialize(content, { scope: data });
  return {
    props: {
      source: mdxSource,
      frontMatter: data,
    },
  };
};

export const getStaticPaths: GetStaticPaths = () => {
  //only get the slug from posts
  const posts = getAllPosts(["slug"]);

  // map through to return post paths
  const paths = posts.map((post) => ({
    params: {
      slug: post.slug,
    },
  }));

  return {
    paths,
    fallback: false,
  };
};

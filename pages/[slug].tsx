import { serialize } from "next-mdx-remote/serialize";
import { GetStaticProps, GetStaticPaths } from "next";
import { useEffect } from "react";
import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote";

import { useMdxComponentsContext } from "../context/mdxContext";
import { IPost } from "../types";
import { getPost, getAllPosts } from "../utils/mdxUtils";
import { ParsedUrlQuery } from "querystring";
import Tags from "../components/Tags";
import Image from "../components/Image";

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
      <article className="prose prose-green">
        <div className="mb-4">
          <Image src={frontMatter.thumbnailPath} />
        </div>

        <h1>{frontMatter.title}</h1>

        <div>{frontMatter.description}</div>

        <MDXRemote components={components} {...source} />
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

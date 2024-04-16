import { IPost } from "../types";
import Link from "next/link";
import Image from "next/legacy/image";
import Tag from "./Tag";
import { useMdxComponentsContext } from "../context/mdxContext";
import { useEffect } from "react";
import Tags from "./Tags";

// props type
export type Props = {
  post: IPost;
};

export function PortfolioCard({ post }: Props) {
  const href = `/p/${post.slug}`;

  return (
    <Link legacyBehavior href={href}>
      <a aria-label={post.title}>
        <div
          className="
                    group
                    flex
                    h-full
                    flex-col
                    overflow-hidden
                    rounded-2xl
                    p-6
                    text-neutral-600
                    shadow-portfolioCard
                    transition-all
                    hover:-translate-y-1
                    hover:scale-101
                    hover:bg-neutral-100
                    hover:text-neutral-900
                    hover:shadow-portfolioCardHover
                    active:translate-y-0
                    active:scale-100
                    active:shadow-portfolioCardActive"
        >
          <div className="mb-4">
            <div>
              <div className="relative overflow-hidden rounded-lg">
                <Image
                  src={post.thumbnailPath}
                  alt={`image: ${post.thumbnailPath.split(".")[0]}`}
                  height={800}
                  width={1200}
                  layout="responsive"
                  objectFit="cover"
                />
                <div className="absolute top-0 left-0 h-full w-full shadow-image" />
                <div className="absolute top-0 left-0 h-full w-full bg-slate-500 opacity-10 transition-all group-hover:bg-transparent" />
              </div>
            </div>
          </div>

          <div className="py-2">
            <h2 className="text-2xl font-bold group-hover:text-orange-600">
              {post.title}
            </h2>

            <div className="my-4">{post.description}</div>

            <div className="flex max-w-full flex-wrap gap-2">
              {post.tags.map((tag, index) => (
                <Tag
                  key={index}
                  tag={tag}
                  className="saturate-[.85] group-hover:saturate-100"
                />
              ))}
            </div>
          </div>
        </div>
      </a>
    </Link>
  );
}

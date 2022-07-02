import { IPost } from "../types";
import Image from "./Image";
import Link from "next/link";

// props type
export type Props = {
  post: IPost;
};

export function PortfolioCard({ post }: Props) {
  const href = `/${post.slug}`;

  return (
    <div
      key={post.slug}
      className="flex h-full flex-col overflow-hidden rounded-md p-4 text-neutral-600 shadow-1-down transition-all hover:-translate-y-1 hover:scale-101 hover:text-neutral-900 hover:shadow-2 active:translate-y-0 active:scale-100 active:shadow-1-down"
    >
      <div className="mb-4">
        <div>
          <Link href={href}>
            <a aria-label={post.title}>
              <Image src={post.thumbnailPath} />
            </a>
          </Link>
        </div>
      </div>

      <div className="py-2">
        <Link href={href}>
          <a>
            <h2 className="text-2xl font-bold">{post.title}</h2>
          </a>
        </Link>

        <div className="mt-2">{post.description}</div>
      </div>
    </div>
  );
}

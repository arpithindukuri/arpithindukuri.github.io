// import link artifacts
import Link from "next/link";
// import image artifacts
import Image from "next/image";

// Thumbnail properties
type Props = {
  // Thumbnail title
  title: string;
  // Thumbnail image src
  src: string;
  // Thumbnail slug link
  slug?: string;
};

export default function Thumbnail({ title, src, slug }: Props) {
  // Add the Thumbnail cover image
  const image = (
    <Image
      height={720}
      width={1280}
      src={src}
      alt={`Thumbnail cover image ${title}`}
      objectFit="cover"
    />
  );

  // return the Thumbnail cover image slug
  return (
    <>
      {slug ? (
        <Link href={`/portfolio/${slug}`}>
          <a aria-label={title}>{image}</a>
        </Link>
      ) : (
        image
      )}
    </>
  );
}

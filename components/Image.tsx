import { default as NextImage } from "next/image";

interface Props {
  src: string;
  alt: string;
}

export default function Image(props: Props) {
  return (
    <NextImage
      className="overflow-hidden rounded-sm"
      src={props.src}
      alt={props.alt}
      height={800}
      width={1200}
      // width="100%"
      // height="100%"
      layout="responsive"
      objectFit="cover"
    />
  );
}

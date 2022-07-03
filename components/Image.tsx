import { default as NextImage } from "next/image";

interface Props {
  src: string;
  alt: string;
}

export default function Image(props: Props) {
  return (
    <NextImage
      className="overflow-hidden rounded-sm"
      height={800}
      width={1200}
      src={props.src}
      alt={props.alt}
      objectFit="cover"
    />
  );
}

import { default as NextImage } from "next/image";

interface Props {
  src: string;
}

export default function Image(props: Props) {
  return (
    <NextImage
      className="overflow-hidden rounded-sm"
      height={800}
      width={1200}
      src={props.src}
      alt={`Image: ${props.src}`}
      objectFit="cover"
    />
  );
}

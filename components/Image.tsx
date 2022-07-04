import { default as NextImage } from "next/image";

interface Props {
  src: string;
  alt: string;
}

export default function Image(props: Props) {
  return (
    <div className="relative overflow-hidden rounded-sm">
      <NextImage
        src={props.src}
        alt={props.alt}
        height={800}
        width={1200}
        layout="responsive"
        objectFit="cover"
      />
      <div className="absolute top-0 left-0 h-full w-full shadow-image" />
    </div>
  );
}

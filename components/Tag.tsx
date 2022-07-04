import { ITag } from "../types";
import colors from "tailwindcss/colors";
import Image from "next/image";

export default function Tag({ tag }: { tag: ITag }) {
  return (
    <div
      className="flex
      h-max
      items-center
      space-x-4
      rounded-full
      py-2
      px-6
      text-sm
      font-semibold
      uppercase
      text-neutral-100
      shadow-tag"
      style={{ backgroundColor: `${tag.color || colors.neutral[500]}` }}
    >
      {tag.iconPath && (
        <div className="relative flex flex-shrink">
          <Image
            className="m-0 brightness-[1.75]"
            src={tag.iconPath}
            alt=""
            height={20}
            width={20}
            layout="intrinsic"
            objectFit="contain"
          />
        </div>
      )}
      <div className="flex">{tag.name}</div>
    </div>
  );
}

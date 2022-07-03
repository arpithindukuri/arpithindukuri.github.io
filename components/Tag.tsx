import { ITag } from "../types";
import colors from "tailwindcss/colors";
import Image from "next/image";

export default function Tag({ tag }: { tag: ITag }) {
  return (
    <div
      className="flex items-center space-x-4 rounded-full border-2 border-neutral-100 py-2 px-6 text-sm font-semibold uppercase text-neutral-100"
      style={{ backgroundColor: `${tag.color || colors.neutral[500]}` }}
    >
      {tag.iconPath && (
        <div className="relative flex flex-shrink">
          <Image
            className="m-0 brightness-[1.75]"
            src={tag.iconPath}
            alt=""
            height={24}
            width={24}
            objectFit="contain"
          />
        </div>
      )}
      <div className="flex">{tag.name}</div>
    </div>
  );
}

import { useMdxComponentsContext } from "../context/mdxContext";
import Tag from "./Tag";

export default function Tags() {
  const tags = useMdxComponentsContext().tags;
  return (
    <div className="flex max-w-full space-x-8">
      {tags.map((tag, index) => (
        <Tag key={index} tag={tag} />
      ))}
    </div>
  );
}

import { useMdxComponentsContext } from "../context/mdxContext";

export default function Tags() {
  const tags = useMdxComponentsContext().tags;
  return (
    <>
      <h3>Tags</h3>
      <ol>
        {tags.map((tag, index) => (
          <li key={index}>{tag.name}</li>
        ))}
      </ol>
    </>
  );
}

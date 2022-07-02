import {
  createContext,
  useContext,
  useState,
  Dispatch,
  ReactElement,
  ReactNode,
  SetStateAction,
} from "react";
import { ITag } from "../types";

type ContextProps = {
  tags: ITag[];
  setTags: Dispatch<SetStateAction<ITag[]>>;
};

type Props = {
  children: ReactNode;
};

const MdxComponentsContext = createContext({} as ContextProps);

export function MdxComponentsProvider({ children }: Props): ReactElement {
  const [tags, setTags] = useState<ITag[]>([]);

  return (
    <MdxComponentsContext.Provider value={{ tags, setTags }}>
      {children}
    </MdxComponentsContext.Provider>
  );
}

export function useMdxComponentsContext(): ContextProps {
  return useContext(MdxComponentsContext);
}

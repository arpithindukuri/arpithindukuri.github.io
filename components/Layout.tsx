import NavBar from "./NavBar";

type Props = {
  children: React.ReactNode;
};

export default function Layout({ children }: Props) {
  return (
    <div className="relative flex h-screen min-h-screen flex-col font-defaultFont">
      <NavBar />
      <main className="h-full w-full overflow-auto p-4 pb-12">{children}</main>
    </div>
  );
}

import Head from "next/head";
import NavBar from "./NavBar";

type Props = {
  children: React.ReactNode;
};

export default function Layout({ children }: Props) {
  return (
    <div className="relative flex h-screen min-h-screen flex-col bg-neutral-200 font-defaultFont">
      <Head>
        <title>d1dev.io</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <NavBar />
      <main className="h-full w-full overflow-auto">{children}</main>
    </div>
  );
}

import Image from "next/image";

export default function ErrorPage() {
  return (
    <div className="flex h-full w-full items-center justify-center">
      <div className="flex flex-col space-y-12">
        <Image
          className="opacity-30 grayscale"
          src="/assets/thinking.svg"
          layout="responsive"
          height="100%"
          width="100%"
        />
        <div className="flex h-fit w-fit items-center space-x-4 text-xl font-light text-neutral-600">
          <div className="font-semibold">404</div>
          <div className="text-2xl text-neutral-300">|</div>
          <div>PAGE NOT FOUND</div>
        </div>
      </div>
    </div>
  );
}

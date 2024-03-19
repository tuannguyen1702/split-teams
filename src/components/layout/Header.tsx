import Image from "next/image";
import Navbar from "./Navbar";
import Link from "next/link";

const Header = () => {
  return (
    <div className="fixed border-b md:border-b-0 bg-white md:bg-transparent z-20 top-0 w-full md:static">
      <div className="px-2 lg:px-8 md:my-4 z-10 w-full h-16 items-center justify-between text-sm flex">
        <h1 className="mr-4">
          <Link href="/">
            <Image
              src="/images/logo.png"
              alt="Vercel Logo"
              className="dark:invert h-10 w-10 lg:h-16 lg:w-16"
              width={100}
              height={100}
              priority
            />
          </Link>
        </h1>
        <h1 className="flex-1 md:text-lg uppercase">
          {" "}
          Moonlight Park View - FC
        </h1>
        {/* <Navbar /> */}
      </div>
    </div>
  );
};

export default Header;

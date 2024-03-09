import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <div>
        <div className="rounded-lg z-[1] overflow-hidden shadow-lg border-gray-50 relative flex place-items-center before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px] z-[-1]">
          <Image
            className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
            src="/images/albums/AZ5Q7385.jpg"
            alt="Next.js Logo"
            width={1200}
            height={900}
            priority
          />
        </div>
      </div>

      <div className="flex-1 z-10 py-4 text-left mt-4 md:mt-2">
        <div className="flex">
          <h2 className="md:text-lg flex-1">
            Kết quả bình chọn tham gia trận đấu ngày <b>10/12/2023</b> - Sân C1
          </h2>
          <Link className="text-blue-600 hidden md:block" href="/vote">
            Chi tiết bình chọn
          </Link>
        </div>
        <div className="z-10 py-4  mt-2 grid text-center md:w-full md:grid-cols-3 md:text-left space-y-6 md:space-y-0 md:space-x-4">
          <div className="relative rounded-lg px-4 py-2 md:p-4 bg-blue-100 text-left">
            Tham gia{" "}
            <span className="absolute text text-shadow-default text-[50px] md:text-[70px] text-blue-500 -bottom-2 right-4 drop-shadow-3xl">
              23
            </span>
          </div>
          <div className="relative rounded-lg px-4 py-2 md:p-4  bg-red-100 text-left">
            Xin vắng{" "}
            <span className="absolute text text-shadow-default text-[50px] md:text-[70px] text-red-500 -bottom-2 right-4 drop-shadow-3xl">
              13
            </span>
          </div>
          <div className="relative rounded-lg px-4 py-2 md:p-4 bg-orange-100 text-left">
            Chưa bình chọn{" "}
            <span className="absolute text text-shadow-default text-[50px] md:text-[70px] text-orange-500 -bottom-2 right-4 drop-shadow-3xl">
              10
            </span>
          </div>
          <Link
            className="rounded-lg md:hidden px-4 py-2 bg-blue-500 text-white"
            href="/vote"
          >
            Chi tiết bình chọn
          </Link>
        </div>
      </div>
    </>
  );
}

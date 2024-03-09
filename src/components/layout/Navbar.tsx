import Link from "next/link";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../ui/sheet";

const data = [
  {
    name: "Album ảnh",
    slug: "",
  },
  {
    name: "Bình chọn",
    slug: "",
  },
  {
    name: "Chia sẽ",
    slug: "",
  },
  {
    name: "Thành viên",
    slug: "",
  },
];

const Navbar = () => {
  return (
    <div className="flex">
      <ul className="hidden md:flex space-x-8">
        {data.map((item, idx) => (
          <li key={idx}>
            <Link href={item.slug}>{item.name}</Link>
          </li>
        ))}{" "}
      </ul>
      <div className="md:hidden">
        <Sheet>
          <SheetTrigger>
            <svg
              className="h-6 w-6 fill-current"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path
                fill-rule="evenodd"
                d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
              ></path>
            </svg>
          </SheetTrigger>
          <SheetContent>
            <SheetHeader>
              {/* <SheetTitle>Are you sure absolutely sure?</SheetTitle> */}
              <SheetDescription>
                <ul className="space-y-6 text-lg text-left mt-6">
                  {data.map((item, idx) => (
                    <li key={idx}>
                      <Link href={item.slug}>{item.name}</Link>
                    </li>
                  ))}{" "}
                </ul>
              </SheetDescription>
            </SheetHeader>
          </SheetContent>
        </Sheet>
      </div>
    </div>
  );
};

export default Navbar;

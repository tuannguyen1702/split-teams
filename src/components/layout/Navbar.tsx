"use client";

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTrigger,
} from "../ui/sheet";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Label } from "../ui/label";

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
      {/* <ul className="hidden md:flex space-x-8">
        {data.map((item, idx) => (
          <li key={idx}>
            <Link href={item.slug}>{item.name}</Link>
          </li>
        ))}{" "}
      </ul> */}
      <div>
        <Sheet>
          <SheetTrigger asChild>
            {/* <svg
              className="h-6 w-6 fill-current"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path
                fill-rule="evenodd"
                d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
              ></path>
            </svg> */}
            <Button>Thiết Lập Danh Sánh</Button>
          </SheetTrigger>
          <SheetContent>
            <SheetHeader>
              {/* <SheetTitle>Are you sure absolutely sure?</SheetTitle> */}
              <SheetDescription className="p-4">
                {/* <ul className="space-y-6 text-lg text-left mt-6">
                  {data.map((item, idx) => (
                    <li key={idx}>
                      <Link href={item.slug}>{item.name}</Link>
                    </li>
                  ))}{" "}
                </ul> */}
                <div className="grid gap-y-6">
                  <div className="grid gap-2 items-center">
                    <Label htmlFor="totalTeam">Số đội bóng</Label>
                    <Input
                      type="number"
                      id="totalTeam"
                      placeholder="Nhập số lượng đội bóng"
                    />
                  </div>
                  <div className="grid gap-2 items-center">
                    <Label htmlFor="totalMember">Số thành viên trong đội</Label>
                    <Input
                      type="number"
                      id="totalMember"
                      placeholder="Nhập số lượng thành viên trong đội"
                    />
                  </div>
                </div>
              </SheetDescription>
            </SheetHeader>
          </SheetContent>
        </Sheet>
      </div>
    </div>
  );
};

export default Navbar;

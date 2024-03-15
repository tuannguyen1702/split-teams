"use client";

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../ui/sheet";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import MemberList from "../common/Member/MemberList";
import { ScrollArea } from "../ui/scroll-area";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";

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
            <Button>Thành Viên</Button>
          </SheetTrigger>
          <SheetContent>
            <SheetHeader>
              <SheetTitle>Thành Viên</SheetTitle>
              <SheetDescription>
                {/* <ul className="space-y-6 text-lg text-left mt-6">
                  {data.map((item, idx) => (
                    <li key={idx}>
                      <Link href={item.slug}>{item.name}</Link>
                    </li>
                  ))}{" "}
                </ul> */}
                {/* <div className="grid gap-y-6">
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
                </div> */}
                <Tabs defaultValue="account" className="w-full">
                  <TabsList className="w-full">
                    <TabsTrigger value="account">
                      Tham gia{" "}
                      <span className="text text-shadow-default text-base text-blue-500 ml-2">
                        23
                      </span>
                    </TabsTrigger>
                    <TabsTrigger value="password">
                      Vắng{" "}
                      <span className="text text-shadow-default text-base text-red-500 ml-2">
                        23
                      </span>
                    </TabsTrigger>
                    <TabsTrigger value="password1">
                      Chưa bình chọn{" "}
                      <span className="text text-shadow-default text-base text-orange-500 ml-2">
                        23
                      </span>
                    </TabsTrigger>
                  </TabsList>
                  <TabsContent value="account">
                    <ScrollArea className="vote-content vote-content-mobile">
                      Jokester began sneaking into the castle in the middle of
                      the night and leaving jokes all over the place: under the
                      king's pillow, in his soup, even in the royal toilet. The
                      king was furious, but he couldn't seem to stop Jokester.
                      And then, one day, the people of the kingdom discovered
                      that the jokes left by Jokester were so funny that they
                      couldn't help but laugh. And once they started laughing,
                      they couldn't stop. Jokester began sneaking into the
                      castle in the middle of the night and leaving jokes all
                      over the place: under the king's pillow, in his soup, even
                      in the royal toilet. The king was furious, but he couldn't
                      seem to stop Jokester. And then, one day, the people of
                      the kingdom discovered that the jokes left by Jokester
                      were so funny that they couldn't help but laugh. And once
                      they started laughing, they couldn't stop.Jokester began
                      sneaking into the castle in the middle of the night and
                      leaving jokes all over the place: under the king's pillow,
                      in his soup, even in the royal toilet. The king was
                      furious, but he couldn't seem to stop Jokester. And then,
                      one day, the people of the kingdom discovered that the
                      jokes left by Jokester were so funny that they couldn't
                      help but laugh. And once they started laughing, they
                      couldn't stop.Jokester began sneaking into the castle in
                      the middle of the night and leaving jokes all over the
                      place: under the king's pillow, in his soup, even in the
                      royal toilet. The king was furious, but he couldn't seem
                      to stop Jokester. And then, one day, the people of the
                      kingdom discovered that the jokes left by Jokester were so
                      funny that they couldn't help but laugh. And once they
                      started laughing, they couldn't stop.Jokester began
                      sneaking into the castle in the middle of the night and
                      leaving jokes all over the place: under the king's pillow,
                      in his soup, even in the royal toilet. The king was
                      furious, but he couldn't seem to stop Jokester. And then,
                      one day, the people of the kingdom discovered that the
                      jokes left by Jokester were so funny that they couldn't
                      help but laugh. And once they started laughing, they
                      couldn't stop.Jokester began sneaking into the castle in
                      the middle of the night and leaving jokes all over the
                      place: under the king's pillow, in his soup, even in the
                      royal toilet. The king was furious, but he couldn't seem
                      to stop Jokester. And then, one day, the people of the
                      kingdom discovered that the jokes left by Jokester were so
                      funny that they couldn't help but laugh. And once they
                      started laughing, they couldn't stop.Jokester began
                      sneaking into the castle in the middle of the night and
                      leaving jokes all over the place: under the king's pillow,
                      in his soup, even in the royal toilet. The king was
                      furious, but he couldn't seem to stop Jokester. And then,
                      one day, the people of the kingdom discovered that the
                      jokes left by Jokester were so funny that they couldn't
                      help but laugh. And once they started laughing, they
                      couldn't stop.
                    </ScrollArea>
                  </TabsContent>
                  <TabsContent value="password">
                    Change your password here.
                  </TabsContent>
                  <TabsContent value="password1">
                    <ScrollArea className="h-[calc(100vh-120px)] -mx-4 px-4 text-start">
                      <MemberList />
                    </ScrollArea>
                  </TabsContent>
                </Tabs>
              </SheetDescription>
            </SheetHeader>
          </SheetContent>
        </Sheet>
      </div>
    </div>
  );
};

export default Navbar;

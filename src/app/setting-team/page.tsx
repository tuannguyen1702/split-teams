import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";
import MemberList from "./_components/MemberList";
import Icon from "@/components/common/Icon";

const Member = ({ name, isPlus }: { name: string; isPlus?: boolean }) => {
  return (
    <div className="flex rounded-sm bg-white mt-2 py-2 px-4">
      <div className="flex-1">{name}</div>
      <div>{isPlus ? "+" : ""}</div>
    </div>
  );
};

export default function SettingTeam() {
  const data = [
    { name: "Tuấn Nguyen", isPlus: true },
    { name: "Tuấn Nguyen" },
    { name: "Tuấn Nguyen" },
    { name: "Tuấn Nguyen" },
    { name: "Tuấn Nguyen" },
    { name: "Tuấn Nguyen" },
    { name: "Tuấn Nguyen" },
    { name: "Tuấn Nguyen" },
    { name: "Tuấn Nguyen" },
    { name: "Tuấn Nguyen" },
  ];
  return (
    <div>
      <div className="flex-1 z-10 py-4 text-left">
        <div className="z-10 pt-4  mt-2 grid text-center md:w-full grid-cols-2 md:grid-cols-4 md:text-left gap-4">
          <div>
            <div className="relative rounded-lg px-4 py-2 bg-blue-100 text-left">
              <span>Đội 1</span>
              <span className="absolute text text-shadow-default text-[20px] md:text-[70px] text-blue-500 -bottom-2 right-4 drop-shadow-3xl">
                <Icon className="h-[50px] w-[50px]" name="ShirtOutline" />
              </span>
            </div>
            <MemberList data={data} />
          </div>
          <div>
            <div className="relative rounded-lg px-4 py-2  bg-red-100 text-left">
              <span>Đội 1</span>
              <span className="absolute text text-shadow-default text-[20px] md:text-[70px] text-red-500 -bottom-2 right-4 drop-shadow-3xl">
                <Icon className="h-[50px] w-[50px]" name="ShirtOutline" />
              </span>
            </div>
            <MemberList data={data} />
          </div>
          <div>
            <div className="relative rounded-lg px-4 py-2 bg-yellow-100 text-left">
              <span>Đội 1</span>
              <span className="absolute text text-shadow-default text-[20px] md:text-[70px] text-yellow-500 -bottom-2 right-4 drop-shadow-3xl">
                <Icon className="h-[50px] w-[50px]" name="ShirtOutline" />
              </span>
            </div>
            <MemberList data={data} />
          </div>
          <div>
            <div className="relative rounded-lg px-4 py-2 bg-green-100 text-left">
              <span>Đội 1</span>
              <span className="absolute text text-shadow-default text-[20px] md:text-[70px] text-green-500 -bottom-2 right-4 drop-shadow-3xl">
                <Icon className="h-[50px] w-[50px]" name="ShirtOutline" />
              </span>
            </div>
            <MemberList data={data} />
          </div>
        </div>
      </div>
      <Dialog>
        <DialogTrigger asChild>
          <Button size="lg" className="w-full">
            Đổi Bình Chọn
          </Button>
        </DialogTrigger>
        <DialogContent className="max-w-[90%] w-[500px] rounded-lg">
          <DialogHeader>
            <DialogTitle>Edit profile</DialogTitle>
            <DialogDescription>
              Make changes to your profile here. Click save when you're done.
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">sssss</div>
          <DialogFooter>
            <Button type="submit">Save changes</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}

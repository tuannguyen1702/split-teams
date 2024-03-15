import { Label } from "@/components/ui/label";
import Image from "../Image";
import { MemberData } from "./type";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

interface MemberItemProps extends MemberData {}

export default function MemberItem(props: Readonly<MemberItemProps>) {
  const { id, name, isPlus, avatar } = props;
  return (
    <div className="relative overflow-hidden gap-2 mt-2 py-2 px-2 md:px-4 rounded-sm  group hover:cursor-pointer hover:bg-blue-50">
      <div className="flex items-center gap-x-2 ">
        <div className="w-[30px]">
          <Image
            className="w-30 h-30 rounded-full"
            src={avatar || ""}
            alt={id || ""}
          />
        </div>
        <div className="flex-1">{name}</div>
        <div>{isPlus ? "+" : ""}</div>
      </div>
      <RadioGroup className="absolute w-full text-end right-0 px-3 top-0 h-full bg-gradient-to-l from-blue-100 to-transparent items-center hidden group-hover:flex">
        <div className="flex-1"></div>
        <div className="flex items-center space-x-2">
          <RadioGroupItem value={`${name}_tham_gia`} id={`${name}_tham_gia`} />
          <Label htmlFor={`${name}_tham_gia`}>Tham gia</Label>
        </div>
        <div className="flex items-center space-x-2">
          <RadioGroupItem value={`${name}_vang`} id={`${name}_vang`}  />
          <Label htmlFor={`${name}_vang`} >Vắng</Label>
        </div>
      </RadioGroup>
    </div>
  );
}

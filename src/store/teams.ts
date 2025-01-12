import { localStorageGetItem } from "@/lib/localStorage/helpers";
import { create } from "zustand";

const time = localStorageGetItem("time")
  ? parseInt(localStorageGetItem("time") ?? "0")
  : 0;

console.log(
  `localStorageGetItem("data")`,
  localStorageGetItem("data")
    ? JSON.parse(localStorageGetItem("data"))?.data
    : []
);

const data = localStorageGetItem("data")
  ? JSON.parse(localStorageGetItem("data") ?? '{"data": "[]"}').data
  : [
      [
        "Tuấn GC",
        "Tâm Casilas",
      ],
      ["Lê Tín <span class='ml-1 dot-red inline-flex'>+</span>", "Thành Nai Tơ"],
      ["Quyền CC <span class='ml-1 dot-red inline-flex'>+</span>", "Tín Nguyễn"],
      ["Bảo Ford", "Hiếu Thứ 3"],
      ["Tuấn PY", "Thành Neymar"],

      ["Sang Delima", "Lành Nguyễn"],
      ["Tuấn Nguyễn", "Truyền Ford"],
      ["Luka Duy <span class='ml-1 dot-red inline-flex'>+</span>", "Tâm Photo"],
      ["Thiện Mẹc Si", "Hải SV"],
      [
        "Dũng Xavi <span class='ml-1 dot-red inline-flex'>+</span>",
        "Đạt",
      ],
     

     
      ["Du Ford", "--"],
      ["Phú Chủ Tịch", "Ngọc Anh"],
    ];

type TeamState = {
  data: any;
  time: number;
  totalTeam: number;
  totalTeamMember: number;
  setTotalTeam: (value: number) => void;
  setTotalTeamMember: (value: number) => void;
};

export const useTeamStore = create<TeamState>((set) => ({
  data: data,
  time: time,
  totalTeam: 2,
  totalTeamMember: 12,
  setTotalTeam: (value: number) => set({ totalTeam: value }),
  setTotalTeamMember: (value: number) => set({ totalTeamMember: value }),
}));

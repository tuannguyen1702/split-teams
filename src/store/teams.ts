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
        "Tuấn GC <span class='ml-1 dot-red inline-flex'>+</span>",
        "Đức",
      ],
      ["Thuận", "Phú"],
      ["Dũng + Con", "Tín Nguyễn"],
      ["A Lành + Con", "Sang"],
      ["Tuấn PY", "Thành Neymar"],

      ["A Chung", "Lâm Đạt"],
      ["Tuấn Nguyễn", "A Khôi"],
      ["Du <span class='ml-1 dot-red inline-flex'>+</span>", "--"],
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
  totalTeamMember: 8,
  setTotalTeam: (value: number) => set({ totalTeam: value }),
  setTotalTeamMember: (value: number) => set({ totalTeamMember: value }),
}));

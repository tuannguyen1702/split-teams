import { clearStorage, localStorageGetItem } from "@/lib/localStorage/helpers";
import { create } from "zustand";

clearStorage();

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
      //["Tuấn GC", "Lê Đức <span class='ml-1 dot-red inline-flex'>+</span>"],
      ["Bình <span class='ml-1 dot-red inline-flex'>+</span>", "A Thanh <span class='ml-1 dot-red inline-flex'>+</span>", "Cang", "A Lương"],
      ["Quang <span class='ml-1 dot-red inline-flex'>+</span>", "A Thái>", "A Hải", "A Chung"],
      ["A Thắng <span class='ml-1 dot-red inline-flex'>+</span>", "A Vương", "A Tân", "A Khôi"],
      // ["Đạt G", "Đức Máy Xúc"],
      // ["Ngọc Anh", "Tâm Photo"],
      // ["Bảo Nguyễn", "Bảo Ford"],
      // ["Truyền", "Thành Naito"],
      // ["Tuấn Phú Yên", "Philip Lam"],
      // ["Bùi Thiện", "Thành Neymar"],
      // ["Du Ford", "Tuấn Nguyễn"],
      // ["Tín Nguyễn", "Dũng Xavi"],
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
  totalTeam: 4,
  totalTeamMember: 3,
  setTotalTeam: (value: number) => set({ totalTeam: value }),
  setTotalTeamMember: (value: number) => set({ totalTeamMember: value }),
}));

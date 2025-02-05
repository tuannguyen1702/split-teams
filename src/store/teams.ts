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
      //["Tuấn GC", "Lê Đức <span class='ml-1 dot-red inline-flex'>+</span>"],
      ["Tuấn GC", "Khoa De Gea"],
      ["Quyền CC", "Tho Pirlo"],
      ["Phú Chủ Tịch", "Trần Quang"],
      ["Đạt G", "Đức Máy Xúc"],
      ["Ngọc Anh", "Tâm Photo"],
      ["Bảo Nguyễn", "Bảo Ford"],
      ["Truyền", "Thành Naito"],
      ["Tuấn Phú Yên", "Philip Lam"],
      ["Bùi Thiện", "Thành Neymar"],
      ["Du Ford", "Tuấn Nguyễn"],
      ["Tín Nguyễn", "Dũng Xavi"],
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
  totalTeamMember: 10,
  setTotalTeam: (value: number) => set({ totalTeam: value }),
  setTotalTeamMember: (value: number) => set({ totalTeamMember: value }),
}));

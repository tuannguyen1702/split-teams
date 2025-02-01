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
        "Thanh",
        "Phong <span class='ml-1 dot-red inline-flex'>+</span>"
        
      ],
      ["Thuận", "Chung"],
      ["Thọ", "Dương"],
      ["Quyền", "Phú"],
      [
        "Tuấn Nguyễn",
        "Lê Đức <span class='ml-1 dot-red inline-flex'>+</span>"
        
      ],
      ["Đỉnh", "Ngọc Dũng"],
      ["Trịnh Thành", "Tâm Tít"],
      ["A Du", "A Khôi"],
      ["Anh Tân", "Thầy Trình"],
      ["--", "Anh Lành"],
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
  totalTeamMember: 9,
  setTotalTeam: (value: number) => set({ totalTeam: value }),
  setTotalTeamMember: (value: number) => set({ totalTeamMember: value }),
}));

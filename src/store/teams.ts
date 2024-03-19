import { localStorageGetItem } from "@/lib/localStorage/helpers";
import { create } from "zustand";

const time = localStorageGetItem("time")
  ? parseInt(localStorageGetItem("time") ?? "0")
  : 0;

const data = localStorageGetItem("data")
  ? JSON.parse(localStorageGetItem("data") ?? '{"data": "[]"}').data
  : [
      [
        "Trịnh Thành ",
        "Lê Tín <span class='ml-1 dot-red inline-flex'>+</span>",
        "Truyền Ford <span class='ml-1 dot-red inline-flex'>+</span>",
        "Lâm Đạt",
      ],
      [
        "Thầy Huấn <span class='ml-1 dot-red inline-flex'>+</span><span class='dot-blue inline-flex'>G</span>",
        "Lê Ku <span class='ml-1 dot-red inline-flex'>+</span>",
        "Lê Đức <span class='ml-1 dot-blue inline-flex'>G</span>",
        "Tuấn Phú Yên ",
      ],
      ["Bảo Ford <span class='ml-1 dot-blue inline-flex'>G</span>", "A Thái", "Hiếu ", "Đàn <span class='ml-1 dot-blue inline-flex'>G</span>"],
      ["Thầy Trình", "Tuấn Nguyễn <span class='ml-1 dot-blue inline-flex'>G</span>", "A Khôi <span class='ml-1 dot-blue inline-flex'>G</span>", "Thành Neymar"],
      [
        "Tho <span class='ml-1 dot-red inline-flex'>+</span>",
        "Quyền <span class='ml-1 dot-red inline-flex'>+</span>",
        "Jackie Dương <span class='ml-1 dot-red inline-flex'>+</span>",
        "Phú ",
      ],
      [
        "Đỉnh",
        "A Thuận",
        "A Quang <span class='ml-1 dot-red inline-flex'>+</span> ",
        "A Dũng",
      ],
      ["Chung VCB", "Duy", "Ngọc Anh", "Tâm Vũ"],
      ["A Tân", "A Hải ", "Luis", "Bùi Thiện"],
      ["A Lành", "Sang", "A Chung <span class='ml-1 dot-blue inline-flex'>G</span>", "A Hoàng <span class='ml-1 dot-blue inline-flex'>G</span>"],
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
  totalTeamMember: 9,
  setTotalTeam: (value: number) => set({ totalTeam: value }),
  setTotalTeamMember: (value: number) => set({ totalTeamMember: value }),
}));

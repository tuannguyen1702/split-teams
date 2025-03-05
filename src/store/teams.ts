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
      ["Tuấn GC <span class='ml-1 dot-red inline-flex'>+</span>", "Toàn <span class='ml-1 dot-red inline-flex'>+</span>", "Lê Đức", "Minh Khôi"],
      ["Cao Phong", "Truyền Ford", "Lê Tín <span class='ml-1 dot-red inline-flex'>+</span>", "Thành Naito"],
      ["Lâm Đạt<span class='ml-1 dot-red inline-flex'>+</span>", "Lê Ku <span class='ml-1 dot-red inline-flex'>+</span>", "Thái Zindo", "Tuấn Phú Yên"],
      ["Tuấn Nguyễn", "Nguyễn Thanh", "Đức Máy Xúc", "Thành Neymar"],
      ["Quyền CC", "Anh Tho  <span class='ml-1 dot-red inline-flex'>+</span>", "A Bình", "Ngọc Thuận"],
      ["Đỉnh Bùi", "Ngọc Dũng", "Luân TQ", "Tín Nguyễn"],
      ["Jackie Dương <span class='ml-1 dot-red inline-flex'>+</span>", "Tâm Tít", "Trương Phi", "Trần Quang <span class='ml-1 dot-red inline-flex'>+</span>"],
      ["Hiếu Thứ 3", "Anh Hải", "Thầy Trình", "Louis"],
      ["Chung VCB", "Ngọc Anh", "Luka Duy", "Phú Chủ Tịch"],
      ["Bảo Ford", "A Tân", "Bùi Thiện", "Du Ford"],
      ["Anh Hoàng", "Minh Khôi", "Sang Delima", "Lành Nguyễn"],
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
  totalTeamMember: 11,
  setTotalTeam: (value: number) => set({ totalTeam: value }),
  setTotalTeamMember: (value: number) => set({ totalTeamMember: value }),
}));

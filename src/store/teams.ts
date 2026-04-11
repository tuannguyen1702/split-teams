import { clearStorage, localStorageGetItem } from "@/lib/localStorage/helpers";
import { create } from "zustand";

clearStorage();

const time = localStorageGetItem("time")
  ? parseInt(localStorageGetItem("time") ?? "0")
  : 0;

const data = [
  ["Anh Le Ngoc", "Nguyên Van Chung"],
  ["Hải", "Tùng Thái"],
  ["Anh Tho", "Thuan Ngoc"],
  ["Lê Tín", "Nc Quyền"],
  ["Nguyễn Văn Lợi <span class='ml-1 dot-blue inline-flex'>*</span>", "Dinh Bui"],
  ["Minh Khôi + Louis", "LukaDuy + Lanh Nguyen"],
  ["Quang Luân", "Quang Tuấn"],
  ["Nguyen Thanh", "Lê Vũ"],
  ["A Hoàng", "Quốc Bảo Western Ford"],
  ["Tmthành", "Học"],
  ["Thành", "Tuan Nguyen <span class='ml-1 dot-blue inline-flex'>*</span>"]
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

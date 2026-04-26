import { clearStorage, localStorageGetItem } from "@/lib/localStorage/helpers";
import { create } from "zustand";

clearStorage();

const time = localStorageGetItem("time")
  ? parseInt(localStorageGetItem("time") ?? "0")
  : 0;

const data = [

  ["Quang <span class='ml-1 dot-blue inline-flex'>*</span>", "Lương <span class='ml-1 dot-blue inline-flex'>*</span>"],
  ["Sỹ", "Thái <span class='ml-1 dot-blue inline-flex'>*</span>", "Cang <span class='ml-1 dot-blue inline-flex'>*</span>"],
  ["Hải", "Vương","Tân"],

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
  totalTeam: 3,
  totalTeamMember: 3,
  setTotalTeam: (value: number) => set({ totalTeam: value }),
  setTotalTeamMember: (value: number) => set({ totalTeamMember: value }),
}));

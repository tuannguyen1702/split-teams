import { create } from "zustand";


type TeamState = {
  totalTeam: number;
  totalTeamMember: number;
  setTotalTeam: (value: number) => void;
  setTotalTeamMember: (value: number) => void;
};

export const useTeamStore = create<TeamState>((set) => ({
    totalTeam: 4,
    totalTeamMember: 9,
    setTotalTeam: (value: number) => set({totalTeam: value}),
    setTotalTeamMember: (value: number) => set({totalTeamMember: value}),
}));

import { clearStorage, localStorageGetItem } from "@/lib/localStorage/helpers";
import { create } from "zustand";

clearStorage();

const time = localStorageGetItem("time")
  ? parseInt(localStorageGetItem("time") ?? "0")
  : 0;

const data = [
  [
    'Quang Tuấn',
    'Lê Ku',
    'Trịnh Thành',
    'Du Nguyễn',
    'Thái Bùi',
    'Anh Tho',
    'Nguyễn Văn Lợi',
    'Võ Văn Vương',
    'Anh Lê Ngọc',
    'Lanh Nguyen',
    'Trần Đào',
  ],
  [
    'Quang Luân',
    'Nguyễn Thành',
    'Caophong Nguyen',
    'Bùi Thiện',
    'Tuan Nguyen',
    'Nc Quyền',
    'Phùng Vĩnh Phú',
    '------',
    'Anh Chung VCB',
    'Lã Nguyen Thành Sang',
    'Anh Hải SV',
  ],
  [
    'Thủ môn bạn Bin',
    'Lê Tín',
    'Tâm Tít',
    'Nguyễn Minh Khôi',
    '------',
    'Thuan Ngoc',
    'Trần Quang',
    'Tin Nguyen',
    'Hoàng Duy',
    'Thầy Trình-trí Việt-ielts Master',
    'Louis',
  ],
  [
    'TM - NEW',
    'Ford Truyền',
    "Huynh Thanh Tuan + Ken <span class='ml-1 dot-blue inline-flex'>*</span>",
    'Nguyễn Đàn',
    'Lâm Đạt',
    "Jackie Dương <span class='ml-1 dot-blue inline-flex'>*</span>",
    'Đinh Bùi',
    "Khúc Ngọc Dũng + Bin <span class='ml-1 dot-blue inline-flex'>*</span>",
    "Út Nhỏ <span class='ml-1 dot-blue inline-flex'>*</span>",
    'A Hoàng MPFC',
    'Thành Neymar',
  ]
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

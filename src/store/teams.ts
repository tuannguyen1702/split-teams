import { clearStorage, localStorageGetItem } from "@/lib/localStorage/helpers";
import { create } from "zustand";

clearStorage();

const time = localStorageGetItem("time")
  ? parseInt(localStorageGetItem("time") ?? "0")
  : 0;

const data = [
  [
    "Quang Tuấn",
    "Quang Luân",
    "Thủ môn bạn Bin",
    "TM - NEW"
  ],
  [
    "Lê Ku",
    "Nguyễn Thành",
    "Lê Tín",
    "Ford Truyền"
  ],
  [
    "Trịnh Thành",
    "Tuan PY + Ken <span class='ml-1 dot-blue inline-flex'>+</span>",
    "Tâm Tít",
    "Caophong Nguyen",
  ],
  [
    "Du Nguyễn",
    "Bùi Thiện",
    "Nguyễn Minh Khôi",
    "Nguyễn Đàn"
  ],
  [
    "Thái Bùi",
    "Tuan Nguyen",
    "Lâm Đạt",
    "------"
  ],
  [
    "Anh Tho",
    "Nc Quyền",
    "Thuan Ngoc",
    "Jackie Dương <span class='ml-1 dot-blue inline-flex'>+</span>"
  ],
  [
    "Nguyễn Văn Lợi",
    "Phùng Vĩnh Phú",
    "Trần Quang",
    "Đinh Bùi"
  ],
  [
    "Võ Văn Vương",
    "------",
    "Tin Nguyen",
    "Dũng Xavi + Bin <span class='ml-1 dot-blue inline-flex'>+</span>"
  ],
  [
    "Anh Lê Ngọc",
    "Anh Chung VCB",
    "Hoàng Duy",
    "Út Nhỏ <span class='ml-1 dot-blue inline-flex'>+</span>"
  ],
  [
    "Lanh Nguyen",
    "Sang Delima",
    "Thầy Trình",
    "A Hoàng"
  ],
  [
    "Trần Đào",
    "Anh Hải SV",
    "Louis",
    "Thành Neymar"
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

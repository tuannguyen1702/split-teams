import { clearStorage, localStorageGetItem } from "@/lib/localStorage/helpers";
import { create } from "zustand";

clearStorage();

const time = localStorageGetItem("time")
  ? parseInt(localStorageGetItem("time") ?? "0")
  : 0;

const data = [
  [
    "Quang Tuấn",
    "TM Bạn Bin",
    "Quang Luân",
    "TM - NEW"
  ],
  [
    "Lê Ku",
    "Thanh Bình Điền",
    "Lê Tín",
    "Ford Truyền"
  ],
  [
    "Trịnh Thành",
    "Tuấn PY + Ken <span class='ml-1 dot-blue inline-flex'>+</span>",
    "Tâm Tít",
    "Phong Nguyễn",
  ],
  [
    "Du Nguyễn",
    "Bùi Thiện",
    "Minh Khôi",
    "Nguyễn Đàn"
  ],
  [
    "Thái Bùi",
    "Tuấn Nguyễn",
    "Lâm Đạt",
    "------"
  ],
  [
    "Anh Tho",
    "Nc Quyền",
    "Thuận Ngọc",
    "Jackie Dương <span class='ml-1 dot-blue inline-flex'>+</span>"
  ],
  [
    "Ngọc Anh",
    "Chung VCB",
    "Út Nhỏ <span class='ml-1 dot-blue inline-flex'>+</span>",
    "Hoàng Duy",
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
    "Tín Nguyễn",
    "Dũng Xavi + Bin <span class='ml-1 dot-blue inline-flex'>+</span>"
  ],
  [
    "Lành Nguyễn",
    "Sang Delima",
    "Thầy Trình",
    "A Hoàng"
  ],
  [
    "Tân Đào",
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

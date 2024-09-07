import { localStorageGetItem } from "@/lib/localStorage/helpers";
import { create } from "zustand";

const time = localStorageGetItem("time")
  ? parseInt(localStorageGetItem("time") ?? "0")
  : 0;

  console.log(`localStorageGetItem("data")`, localStorageGetItem("data") ? JSON.parse(localStorageGetItem("data"))?.data : [])

const data = localStorageGetItem("data")
  ? JSON.parse(localStorageGetItem("data") ?? '{"data": "[]"}').data
  : [
      [
        "Tuấn GC <span class='ml-1 dot-red inline-flex'>+</span>",
        "A Tân + Toàn <span class='ml-1 dot-red inline-flex'>+</span>",
        "Hùng Baze <span class='ml-1 dot-red inline-flex'>+</span>",
        "A Xuân",
      ],
      [
        "Trịnh Thành ",
        "Lê Tín",
        "Truyền Ford",
        "Lâm Đạt",
      ],
      [
        "Thái Zindo",
        "Tuấn Nguyễn",
        "Minh Khôi",
        "Bảo Nguyễn",
      ],
      [
        "Tho Pirlo",
        "Quyền CC",
        "Jackie Dương",
        "Bình Trần",
      ],
      [
        "Thiện Messi",
        "Bảo Ford",
        "Hoàng Royal",
        "Hiếu Thứ 3",
      ],
      [
        "Tuấn PY",
        "Nguyễn Đàn <span class='ml-1 dot-red inline-flex'>+</span>",
        "Thành Neymar",
        "Đức Máy Xúc",
      ],
      ["Tâm Tít", "Nguyễn Đàn <span class='ml-1 dot-red inline-flex'>+</span>", "Thanh Bình Điền", "Trần Quang <span class='ml-1 dot-red inline-flex'>+</span>",],
      ["Ngọc Dũng", "Phú Chủ Tịch <span class='ml-1 dot-red inline-flex'>+</span>", "Đỉnh", "Tín Nguyễn"],
      [
        "Hải SV <span class='ml-1 dot-red inline-flex'>+</span>",
        "Louis",
        "Lành Nguyễn",
        "Sang Delima",
      ],
      
      ["Ngọc Anh", "Luka Duy", "Chung VCB", "Ngọc Thuận"],
      ["Thầy Trình", "Lê Đức", "----", "----"],
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

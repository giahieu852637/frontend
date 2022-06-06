import HomePage from "../container/HomeTemplate/HomePage";
import Login from "../container/HomeTemplate/ManagerUser/Login";
import CreatAcc from "../container/HomeTemplate/ManagerUser/CreateAcc";
import Introduce from "../container/HomeTemplate/Introduce";
import HoiDap from "../container/HomeTemplate/HoiDap";
import HuongDan from "../container/HomeTemplate/HuongDan";
import TraCuuThuTucHangChinh from "../container/HomeTemplate/TraCuuThuTucHangChinh";
import DetailHoSoPage from "../container/HomeTemplate/DetailHoSoPage";
import SearchPage from "../container/HomeTemplate/SearchPage";
import NopHoSo from "../container/HomeTemplate/NopHoSo";
import TinhTrangHoSo from "../container/HomeTemplate/TinhTrangHoSo";

import AdminPage from "../container/AdminTemplate/AdminPage";
import Dashboard from "../container/AdminTemplate/Dashboard";
import HoiDapForm from "../container/HomeTemplate/HoiDap/HoiDapForm";
import ResendMaXacThuc from "../container/HomeTemplate/ManagerUser/ResendMaXacThuc";
import LoginRestPassword from "../container/HomeTemplate/ManagerUser/LoginRestPassword";
import TinhTrangChiTiet from "../container/HomeTemplate/TinhTrangHoSo/TinhTrangChiTiet";
import DoiMatKhau from "../container/HomeTemplate/DoiMatKhau";

const routeHome = [
  {
    path: "/",
    component: HomePage,
    exact: true,
  },
  {
    path: "/quanlytaikhoan",
    component: DoiMatKhau,
    exact: true,
  },
  {
    path: "/login",
    component: Login,
    exact: false,
  },
  {
    path: "/loginresend",
    component: ResendMaXacThuc,
    exact: false,
  },
  {
    path: "/logins/:token_valid",
    component: LoginRestPassword,
    exact: false,
  },
  {
    path: "/signin",
    component: CreatAcc,
    exact: false,
  },
  {
    path: "/introduce",
    component: Introduce,
    exact: false,
  },
  {
    path: "/hoidap",
    component: HoiDap,
    exact: false,
  },
  {
    path: "/form/hoidap/:type",
    component: HoiDapForm,
    exact: false,
  },
  {
    path: "/thanhvien",
    component: HuongDan,
    exact: false,
  },
  {
    path: "/tracuu",
    component: TraCuuThuTucHangChinh,
    exact: false,
  },
  {
    path: "/detail/:id",
    component: DetailHoSoPage,
    exact: false,
  },
  {
    path: "/search/:pagram",
    component: SearchPage,
    exact: false,
  },
  {
    path: "/nophoso/:id",
    component: NopHoSo,
    exact: false,
  },
  {
    path: "/tinhtranghoso",
    component: TinhTrangHoSo,
    exact: false,
  },
  {
    path: "/resendMaXacThuc",
    component: ResendMaXacThuc,
    exact: false,
  },
  {
    path: "/chititetinhtrang/:id",
    component: TinhTrangChiTiet,
    exact: false,
  },
];

const routesAdmin = [
  {
    path: "/admin",
    component: AdminPage,
    exact: true,
  },
  {
    path: "/admin/dashboard",
    component: Dashboard,
    exact: true,
  },
];

export { routeHome, routesAdmin };

import { combineReducers } from "redux";

import userLoginReducer from "./../../container/HomeTemplate/ManagerUser/Login/modules/reducer";
import userCreateReducer from "./../../container/HomeTemplate/ManagerUser/CreateAcc/modules/reducer";
import listCategoryReducer from "../../container/HomeTemplate/TraCuuThuTucHangChinh/modules/reducer";
import listFieldReducer from "../../container/HomeTemplate/TraCuuThuTucHangChinh/modules/reducerfiels";
import listListHoSoReducer from "../../container/HomeTemplate/TraCuuThuTucHangChinh/modules/reducerFieldHoSo";
import listDetailHoSoReducer from "../../container/HomeTemplate/DetailHoSoPage/modules/reducer";
import searchHoSoReducer from "../../container/HomeTemplate/SearchPage/modules/reducer";
import listCategoryDetailReducer from "../../components/NameCategory/modules/reducer";
import listNopHoSoReducer from "../../container/HomeTemplate/NopHoSo/modules/reducer";
import statusHoSoReducer from "../../container/HomeTemplate/TinhTrangHoSo/modules/reducer";
import listQuestionReducer from "../../container/HomeTemplate/HoiDap/HoiDapForm/modules/reducer";
import listQuestionUserReducer from "../../container/HomeTemplate/HoiDap/HoiDapDuocGoi/modules/reducer";
import listQuestionThuongGapReducer from "../../container/HomeTemplate/HoiDap/HoiDapThuongGap/modules/reducer";
import userResendReducer from "../../container/HomeTemplate/ManagerUser/ResendMaXacThuc/modules/reducer";
import userResetLoginReducer from "../../container/HomeTemplate/ManagerUser/LoginRestPassword/modules/reducer";
import listChiTietHoSoKyReducer from "../../container/HomeTemplate/TinhTrangHoSo/TinhTrangChiTiet/modules/reducer";

import userLoginAdminReducer from "../../container/AdminTemplate/AdminPage/modules/reducer";
import listKyHoSoReducer from "../../container/AdminTemplate/Dashboard/modulesKyFile/reducer";
import listHoSoReducer from "../../container/AdminTemplate/Dashboard/modules/reducer";

const rootReducer = combineReducers({
  userCreateReducer,
  userLoginReducer,
  listCategoryReducer,
  listFieldReducer,
  listListHoSoReducer,
  listDetailHoSoReducer,
  searchHoSoReducer,
  listCategoryDetailReducer,
  listNopHoSoReducer,
  statusHoSoReducer,
  listQuestionReducer,
  listQuestionUserReducer,
  listQuestionThuongGapReducer,
  userResendReducer,
  userResetLoginReducer,
  listKyHoSoReducer,
  listChiTietHoSoKyReducer,

  userLoginAdminReducer,
  listHoSoReducer,
});

export default rootReducer;

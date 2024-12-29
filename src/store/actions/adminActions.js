import actionTypes from "./actionTypes";
import { toast } from "react-toastify";
import {
  getAllCodeService,
  createNewUserService,
  getAllUsers,
  deleteUserService,
  editUserService,
  getDoctorHomeService,
  getAllDoctors,
  saveDetailDoctorService,
} from "../../services/userService";
export const fetchGenderStart = () => {
  return async (dispatch, getState) => {
    try {
      dispatch({ type: actionTypes.FETCH_GENDER_START });
      let gender = await getAllCodeService("gender");

      if (gender && gender.errCode === 0) {
        dispatch(fetchGenderSuccess(gender.data));
      } else {
        dispatch(fetchGenderFailed());
      }
    } catch (error) {
      dispatch(fetchGenderFailed());
      console.log(error);
    }
  };
};
export const fetchGenderSuccess = (genderData) => ({
  type: actionTypes.FETCH_GENDER_SUCCESS,
  data: genderData,
});
export const fetchGenderFailed = () => ({
  type: actionTypes.FETCH_GENDER_FAILED,
});
export const fetchPositionStart = () => {
  return async (dispatch, getState) => {
    try {
      let position = await getAllCodeService("position");

      if (position && position.errCode === 0) {
        dispatch(fetchPositionSuccess(position.data));
      } else {
        dispatch(fetchPositionFailed());
      }
    } catch (error) {
      dispatch(fetchPositionFailed());
      console.log(error);
    }
  };
};
export const fetchPositionSuccess = (positionData) => ({
  type: actionTypes.FETCH_POSITION_SUCCESS,
  data: positionData,
});
export const fetchPositionFailed = () => ({
  type: actionTypes.FETCH_POSITION_FAILED,
});
export const fetchRoleStart = () => {
  return async (dispatch, getState) => {
    try {
      let role = await getAllCodeService("role");
      if (role && role.errCode === 0) {
        dispatch(fetchRoleSuccess(role.data));
      } else {
        dispatch(fetchRoleFailed());
      }
    } catch (error) {
      dispatch(fetchRoleFailed());
      console.log(error);
    }
  };
};
export const fetchRoleSuccess = (roleData) => ({
  type: actionTypes.FETCH_ROLE_SUCCESS,
  data: roleData,
});

export const fetchRoleFailed = () => ({
  type: actionTypes.FETCH_ROLE_FAILED,
});
export const createNewUser = (data) => {
  return async (dispatch, getState) => {
    try {
      let res = await createNewUserService(data);

      if (res && res.errCode === 0) {
        toast.success("Create new user successfully");
        dispatch(saveUserSuccess());
        dispatch(fetchAllUserStart());
      } else {
        dispatch(saveUserFailed());
      }
    } catch (error) {
      dispatch(saveUserFailed());
      console.log(" save failed", error);
    }
  };
};

export const saveUserSuccess = () => ({
  type: actionTypes.CREATE_USER_SUCCESS,
});
export const saveUserFailed = () => ({
  type: actionTypes.CREATE_USER_FAILED,
});

export const deleteAUser = (userId) => {
  return async (dispatch, getState) => {
    try {
      let res = await deleteUserService(userId);

      if (res && res.errCode === 0) {
        toast.success("Delete the user successfully");
        dispatch(fetchAllUserStart());

        dispatch(deleteUserSuccess());
      } else {
        toast.error("Delete the user failed");

        dispatch(deleteUserFailed());
      }
    } catch (error) {
      dispatch(deleteUserFailed());
      console.log(" save failed", error);
    }
  };
};

export const deleteUserSuccess = () => ({
  type: actionTypes.DELETE_USER_SUCCESS,
});
export const deleteUserFailed = () => ({
  type: actionTypes.DELETE_USER_FAILED,
});
export const fetchAllUserStart = () => {
  return async (dispatch, getState) => {
    try {
      let res = await getAllUsers("ALL");
      let res1 = await getDoctorHomeService("");

      if (res && res.errCode === 0) {
        dispatch(fetchAllUsersSuccess(res.users.reverse()));
      } else {
        toast.error("Fetch all user failed");

        dispatch(fetchAllUsersFailed());
      }
    } catch (error) {
      toast.error("Fetch all user failed");

      dispatch(fetchAllUsersFailed());
      console.log(error);
    }
  };
};
export const fetchAllUsersSuccess = (data) => ({
  type: "FETCH_ALL_USERS_SUCCESS",
  users: data,
});
export const fetchAllUsersFailed = () => ({
  type: "FETCH_ALL_USERS_FAILED",
});
export const editAUser = (data) => {
  return async (dispatch, getState) => {
    try {
      let res = await editUserService(data);
      console.log("check res edit user", data);

      if (res && res.errCode === 0) {
        toast.success("update user success");

        dispatch(fetchAllUserStart());

        dispatch(editUserSuccess());
      } else {
        toast.error("Edit the user failed");

        dispatch(editUserFailed());
        console.log("saveUserFailed", res);
      }
    } catch (error) {
      dispatch(editUserFailed());
      console.log(" save failed", error);
    }
  };
};
export const editUserSuccess = () => ({
  type: actionTypes.EDIT_USER_SUCCESS,
});
export const editUserFailed = () => ({
  type: actionTypes.EDIT_USER_FAILED,
});
export const fetchTopDoctor = () => {
  return async (dispatch, getState) => {
    try {
      let res = await getDoctorHomeService("10");

      if (res && res.errCode === 0) {
        dispatch({
          type: actionTypes.FETCH_TOP_DOCTORS_SUCCESS,
          data: res.data,
        });
      } else {
        dispatch({ type: actionTypes.FETCH_TOP_DOCTORS_FAILED });
      }
    } catch (error) {
      console.log(error);
      dispatch({ type: actionTypes.FETCH_TOP_DOCTORS_FAILED });
    }
  };
};
export const fetchAllDoctor = () => {
  return async (dispatch, getState) => {
    try {
      let res = await getAllDoctors();
      console.log("check res", res);

      if (res && res.errCode === 0) {
        dispatch({
          type: actionTypes.FETCH_ALL_DOCTORS_SUCCESS,
          data: res.data,
        });
      } else {
        dispatch({ type: actionTypes.FETCH_ALL_DOCTORS_FAILED });
      }
    } catch (error) {
      console.log(error);
      dispatch({ type: actionTypes.FETCH_ALL_DOCTORS_FAILED });
    }
  };
};
export const saveDetailDoctor = (data) => {
  return async (dispatch, getState) => {
    try {
      let res = await saveDetailDoctorService(data);
      console.log("check res save detail doctor", res);

      if (res && res.errCode === 0) {
        toast.success("save info detail doctor success");

        dispatch({
          type: actionTypes.SAVE_DETAIL_DOCTOR_SUCCESS,
        });
      } else {
        toast.error("save info detail doctor failed");

        dispatch({ type: actionTypes.SAVE_DETAIL_DOCTOR_FAILED });
      }
    } catch (error) {
      console.log("check doctor failed", error);
      toast.error("save info detail doctor failed");

      dispatch({ type: actionTypes.SAVE_DETAIL_DOCTOR_FAILED });
    }
  };
};

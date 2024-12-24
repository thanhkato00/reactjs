import axios from "../axios";
const handleLoginApi = (email, password) => {
  return axios.post("/api/login", { email, password });
};
const getAllUsers = (inputId) => {
  return axios.get(`/api/get-all-users?id=${inputId}`);
};
const createNewUserService = (data) => {
  console.log("check", data);
  return axios.post(`/api/create-new-user`, data);
};
const deteleUserService = (userId) => {
  return axios.delete(`/api/delete-user`, {
    data: {
      id: userId,
    },
  });
};
const editUserService = (inputData) => {
  console.log("check input data", inputData);

  return axios.put(`/api/edit-user`, inputData);
};
const getAllCodeService = (inputData) => {
  console.log("check input data", inputData);

  return axios.get(`/api/allcode?type=${inputData}`);
};
const getDoctorHomeService = (limit) => {
  return axios.get(`/api/top-doctor-home?limit=${limit}`);
};
export {
  handleLoginApi,
  getAllUsers,
  createNewUserService,
  deteleUserService,
  editUserService,
  getAllCodeService,
  getDoctorHomeService,
};

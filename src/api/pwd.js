import service from "@/utils/request.js";

export const usePwdListApi = () => {
  return service.get("/pwd/list");
};

export const usePwdInfoApi = (pwdId) => {
  return service.get(`/pwd/info/${pwdId}`);
};

export const usePwdSaveApi = (dataForm) => {
  if (dataForm.id) {
    return service.put("/pwd/", dataForm);
  }
  return service.post("/pwd/", dataForm);
};

export const usePwdDeleteApi = (pwdId) => {
  return service.delete("/pwd/", { data: [pwdId] });
};

export const usePwdSortApi = (ids) => {
  return service.post("/pwd/sort", ids);
};

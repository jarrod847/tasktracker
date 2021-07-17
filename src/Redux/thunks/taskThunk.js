import { axiosBaseUrl } from "../../util/baseUrl";
import { add } from "../slices/todoListSlice";

export const addTask = (values) => async (dispatch) => {
  console.log(axiosBaseUrl);
  try {
    const { data } = await axiosBaseUrl().post("task/add", values);
    dispatch(add(data.task));
  } catch (e) {
    console.log(e);
  }
};

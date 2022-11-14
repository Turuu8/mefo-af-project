import { UserModel } from "../models/userModel";

export const findUserByKey = async (payload: Object) => {
  return await UserModel.findOne(payload);
};
export const findUserByID = async (payload: string) => {
  return await UserModel.findById(payload);
};
export const updateUserByID = async (id: string, data: object) => {
  return await UserModel.findByIdAndUpdate(id, data);
};

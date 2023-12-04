import { StatusCodes } from "http-status-codes";
import User from "../models/UserModel.js";
import Member from "../models/MemberModel.js";

export const getCurrentUser = async (req, res) => {
  const user = await User.findOne({ _id: req.user.userId });
  const userWithoutPassword = user.toJSON();
  res.status(StatusCodes.OK).json({ user: userWithoutPassword });
};
export const getRegistrationStats = async (req, res) => {
  const users = await User.countDocuments();
  const members = await Member.countDocuments();
  res.status(StatusCodes.OK).json({ users, members });
};
export const updateUser = async (req, res) => {
  const obj = { ...req.body };
  delete obj.password;
  console.log(obj);
  const updateUser = await User.findByIdAndUpdate(req.user.userId, req.body);
  res.status(StatusCodes.OK).json({ msg: "user updated" });
};

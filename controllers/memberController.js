import Member from "../models/MemberModel.js";
import { customAlphabet } from "nanoid";
import { StatusCodes } from "http-status-codes";

const randomMatriculation = customAlphabet("1234567890", 6);

export const getAllMembers = async (req, res) => {
  const members = await Member.find({ createdBy: req.user.userId });
  res.status(StatusCodes.OK).json({ members });
};
export const adminGetAllMembers = async (req, res) => {
  const members = await Member.find({});
  res.status(StatusCodes.OK).json({ members });
};

export const createMember = async (req, res) => {
  req.body.createdBy = req.user.userId;
  // req.body.memberMatriculation = `AS${user.associationCode.toLocaleUpperCase()}${randomMatriculation()}`;
  const member = await Member.create(req.body);
  res.status(StatusCodes.CREATED).json({ member });
};

export const getMember = async (req, res) => {
  const member = await Member.findById(req.params.id);
  res.status(StatusCodes.OK).json({ member });
};

export const updateMember = async (req, res) => {
  const updatedMember = await Member.findByIdAndUpdate(
    req.params.id,
    req.body,
    {
      new: true,
    }
  );
  res
    .status(StatusCodes.OK)
    .json({ msg: "member modified", member: updatedMember });
};

export const deleteMember = async (req, res) => {
  const removedMember = await Member.findByIdAndDelete(req.params.id);

  res
    .status(StatusCodes.OK)
    .json({ msg: "member deleted", member: removedMember });
};

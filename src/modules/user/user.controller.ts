import { catchAsync } from "../../utils/catchAsync";
import sendRes from "../../utils/sendRes";
import { UserServices } from "./user.service";

const getAllUsers = catchAsync(async (req, res) => {
  const result = await UserServices.getAllUsersFromDB();

  sendRes({
    res,
    message: "Users retrieved successfully",
    data: result,
  });
});

const getSingleUser = catchAsync(async (req, res) => {
  const { userId } = req.params;
  const result = await UserServices.getSingleUserFromDB(userId as string);

  sendRes({
    res,
    message: "User retrieved successfully",
    data: result,
  });
});

const updateUser = catchAsync(async (req, res) => {
  const { userId } = req.params;
  const result = await UserServices.updateUserIntoDB(userId, req.body);

  sendRes({
    res,
    message: "Users updated successfully",
    data: result,
  });
});

export const UserControllers = {
  getAllUsers,
  updateUser,
  getSingleUser,
};

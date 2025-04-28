import User from "../models/User";

export const createUserRepository = async ({
  username,
  hashedPassword,
}: {
  username: string;
  hashedPassword: string;
}) => {
  const user = new User({
    username,
    hashedPassword,
  });
  await user.save();
  return user;
};

export const getUserByUsername = async (username: string) => {
  const user = await User.findOne({ username });
  return user;
};

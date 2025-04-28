import mongoose, { Document, Schema } from "mongoose";

export interface IUser extends Document {
  username: string;
  hashedPassword: string;
}

const UserSchema: Schema = new Schema(
  {
    username: { type: String, required: true },
    hashedPassword: { type: String, required: true },
  },
  { timestamps: true }
);

const User = mongoose.model<IUser>("User", UserSchema);

export default User;

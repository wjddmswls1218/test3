import mongoose from "mongoose";

const Schema = mongoose.Schema;

const PostType = new Schema(
  {
    typeName: {
      type: String,
      required: true,
    },

    isDelete: {
      typeBoolean,
      required: true,
      default: false,
    },
  },
  {
    versionKey: false,
  }
);

export default mongoose.model(`PostType`, PostType, `PostType`);

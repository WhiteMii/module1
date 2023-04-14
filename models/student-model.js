import { Schema, model } from "mongoose";

const StudentSchema = new Schema({
  nickName: {
    type: String,
    required: true,
  },
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
});
export default model("Student", StudentSchema);

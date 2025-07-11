import mongoose from "mongoose";

export const ConnectDB = async () => {
  await mongoose.connect(
    "mongodb+srv://interiorDesign:007007007@cluster0.t2jj7yn.mongodb.net/interior-design"
  );
  console.log("DB Connect");
};

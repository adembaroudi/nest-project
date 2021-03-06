import { Types, Schema } from "mongoose";
export const trainingsSchema = new Schema({
  Id: String,
  prix: String,
  picture: String,
  title: String,
  Description: String,
  nbParticipants: String,
  nbHeuresD: String,
  nbHeuresND: String,
  nblike: {type : Number , default : 0}, 
  level: { type: String, enum: ["Begginer", "Intermediate", "Advanced"] },
  TrainingCategory: {
    type: String,
    enum: ["Web_Development", "Data_Science", "AI"],
  },
  trainingRegistrations: [
    { type: Types.ObjectId, ref: "trainingRegistrations" },
  ],   
  user: { type: Types.ObjectId, ref: "user" },   
  voteur : [{type  : Types.ObjectId , ref : "voteur"}]
});
 
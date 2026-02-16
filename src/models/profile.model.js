import mongoose from "mongoose";

const profileSchema = new mongoose.Schema({
  name: String,
  bio: String,
  skills: [String],

  education: [
    {
      degree: String,
      institution: String,
      start: String,
      end: String
    }
  ],

  experience: [
    {
      role: String,
      company: String,
      start: String,
      end: String
    }
  ],

  certifications: [
    {
      title: String,
      issuer: String,
      year: String
    }
  ]
});

export default mongoose.model("Profile", profileSchema);

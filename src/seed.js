import mongoose from "mongoose";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import Profile from "./models/profile.model.js";

dotenv.config();
connectDB();

const seedData = async () => {

  await Profile.create({


    education: [
      {
        degree: "CSE – Full Time",
        institution: "Madras University",
        start: "2022",
        end: "2025"
      }
    ],

    experience: [
      {
        role: "MERN Developer",
        company: "Gidy.Ai",
        start: "2025",
        end: "Present"
      }
    ],

    certifications: [
      {
        title: "AWS Cloud Practitioner",
        issuer: "Amazon",
        year: "2024"
      }
    ]
  });

  console.log("Database Seeded Successfully");
  process.exit();
};

seedData();

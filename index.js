import { GoogleGenerativeAI } from "@google/generative-ai";
import dotenv from 'dotenv';

dotenv.config();


const genAI = new GoogleGenerativeAI(process.env.API_KEY)

const model = genAI.getGenerativeModel({
    model: 'gemini-1.5-pro',
})

const r = await model.generateContent("Top 10 programming language");
console.log(r.response.text());
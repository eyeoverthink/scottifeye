import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';
import helmet from 'helmet';
import morgan from'morgan';
import express from 'express';



dotenv.config();

// Connect to MongoDB   


const MONGO_URI = 'mongodb+srv://eyeoverthink:wolverine@cluster0.zic3y.mongodb.net/scott-not-spotify?retryWrites=true&w=majority&appName=Cluster0';
export const connectDB = async()=>{
    try{
        await mongoose.connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });
        console.log(`MongoDB connected... On http://localhost:${PORT}`);
        
    }catch(err){
        console.error(err);
        process.exit(1);
    }
}

// Initialize app
const app = express();

// Middleware
app.use(helmet());
app.use(cors());
app.use(express.json());
app.use(morgan('tiny'));

// Routes
app.get('/', (req, res) => {
    res.send('Hello, World!');
});

const PORT = process.env.PORT || 5001;
export default connectDB;

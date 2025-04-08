import express from 'express';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import { userRoute } from './routes/userRoute.js';
import { residencyRoute } from './routes/residencyRoute.js';
import { connectToDb } from './config/db.js';
import { prisma, testDB } from './config/prismaConfig.js';

dotenv.config()

const app = express();

const PORT = process.env.PORT || 3000;

app.use(express.json())
app.use((req, res, next) => {
    console.log(`[${req.method}] ${req.url}`);
    next();
});

app.use(cookieParser())

app.use(cors({
    origin: [
        'http://localhost:5173',
        'capacitor://localhost',
        'http://localhost',
        'ionic://localhost',
        'https://realestate-backend-production-e96a.up.railway.app', // if your frontend calls backend directly
        'https://your-frontend.vercel.app' // <-- put your deployed frontend URL here
    ],
    credentials: true
}));

app.listen(PORT, async()=> {
    console.log(`Server is running on port ${PORT}`);
    await connectToDb();
    await testDB();
});
app.get('/',(req,res)=>{
    res.send('Server health is good...');
})
app.use('/api/user', userRoute)
app.use("/api/residency", residencyRoute)
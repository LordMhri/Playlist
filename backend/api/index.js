import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors'; 
import songRoutes from '../routes/songRoutes.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 7000;
const ATLAS_URI = process.env.ATLAS_URI;

mongoose.connect(ATLAS_URI, {
})
.then(() => {
    console.log('Database connected');
    app.listen(PORT, () => {
        console.log('Server is running on port', PORT);       
    });
})
.catch((error) => console.log(error));

app.use(cors());
app.use(express.json());
app.use('/api', songRoutes);

export default app;

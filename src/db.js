import mongoose from 'mongoose'

export const connectDB = async () => {
    try {
        await mongoose.connect('mongodb+srv://root:root@mern-crud-auth.w0dqycd.mongodb.net/?retryWrites=true&w=majority');

        console.log('DB is connected');
    } catch (error) { 
        console.log(error);
    }
};
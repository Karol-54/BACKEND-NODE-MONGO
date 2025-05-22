import mongoose from "mongoose";

const conectarDB = async () => {
    try {
        const connection = await mongoose.connect(process.env.MONGO_URI);
        const url = `CONECTADO A MONGODB EN SERVER: ${connection.connection.host} 
        - EN PUERTO: ${connection.connection.port}`;
        console.log(url);
    } catch (error) {
        console.log(`Error al conectar con MongoDB: ${error.message}`);
        process.exit(1);
    }
};

export default conectarDB;
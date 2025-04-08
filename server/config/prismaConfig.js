import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

export async function testDB() {
    try {
        await prisma.$connect();
        console.log("Connected to MongoDB");
    } catch (error) {
        console.error("Error connecting to MongoDB:", error);
    }
}

export {prisma}
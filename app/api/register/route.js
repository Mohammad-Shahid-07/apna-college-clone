import User from "@models/user";
import { connectToDatabase } from "@utils/database";
import bcrypt from "bcrypt";

export const POST = async (req) => {
  try {
    const { name, email, password, phone } = await req.json();
     


    await connectToDatabase();

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser =  await User.create({
      name,
      email,
      password: hashedPassword, // Store the hashed password in the database
      phone,
    });
    console.log(newUser);

    // Respond with a success message
    return {
      statusCode: 201,
      body: JSON.stringify({ message: "User created successfully" }),
    };
  } catch (error) {
      console.error("Error:", error);
      return {
        statusCode: 500,
        body: JSON.stringify({ error: "Internal Server Error" }),
      };
  }
};

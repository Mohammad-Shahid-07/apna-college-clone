import { connectToDatabase } from "@utils/database";
import Reviews from "@models/reviews";


export const GET = async (req) => {
    try {
        await connectToDatabase();
        const reviews = await Reviews.find({});
        return new Response(JSON.stringify(reviews), {
        status: 200,
        });
    } catch (error) {
        console.error("Error:", error);
        return new Response("Error", { status: 500 });
    }
}

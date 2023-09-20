import { connectToDatabase } from "@utils/database";
import Reviews from "@models/reviews";

export const POST = async (req) => {
  const { name, about, company, pacage } = await req.json();
  try {
    connectToDatabase();
    const NewReview = await Reviews({
      name,
      about,
      company,
      pacage,
    });
    await NewReview.save();
    return new Response(JSON.stringify(NewReview), {
      status: 201,
    });
  } catch (error) {
    console.error("Error creating prompt:", error);
    return new Response("Error creating prompt", { status: 500 });
  }
};

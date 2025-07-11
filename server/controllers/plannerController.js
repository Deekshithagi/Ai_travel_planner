const Plan = require('../models/Plan');
const axios = require("axios");

const generatePlan = async (req, res) => {
  const { destination, budget, interests, days } = req.body;

  const prompt = `Create a ${days}-day travel itinerary for ${destination} with a ${budget} budget. Focus on interests like ${interests.join(", ")}.`;

  console.log("=== Incoming Request ===");
  console.log("Body:", req.body);
  console.log("Using API Key:", process.env.OPENROUTER_API_KEY ? "YES" : "NO");

  try {
    const response = await axios.post(
      "https://openrouter.ai/api/v1/chat/completions",
      {
        model: "mistralai/mistral-7b-instruct", 
        messages: [{ role: "user", content: prompt }]
      },
      {
        headers: {
          "Authorization": `Bearer ${process.env.OPENROUTER_API_KEY}`,
          "Content-Type": "application/json",
          "HTTP-Referer": "http://localhost:3000",  
          "X-Title": "ai-travel-planner"
        }
      }
    );

    const aiReply = response.data.choices[0].message.content;

    await Plan.create({
      userEmail: req.email,  
      destination,
      budget,
      interests,
      days,
      response: aiReply
    });

    res.json({ plan: aiReply });

  } catch (error) {
    console.error("--OpenRouter Error --");

    if (error.response) {
      console.error("Status:", error.response.status);
      console.error("Data:", error.response.data);
    } else {
      console.error("Message:", error.message);
    }

    res.status(500).json({ error: "Something went wrong with OpenRouter" });
  }
};

module.exports = { generatePlan };

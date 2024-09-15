import { NextResponse } from 'next/server';
const { GoogleGenerativeAI } = require('@google/generative-ai');

// Access your API key as an environment variable
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

// Get the generative model for flashcards
const model = genAI.getGenerativeModel({ model: 'gemini-1.5-flash' });

export async function POST(req) {
    const data = await req.json(); // Extract the text input from the request body
    const topic = data.text; // Assuming the text is sent as { text: "your input text" }

    // Construct the prompt for the flashcard generation
    const prompt = `You are a flashcard creator, you take in text and create multiple flashcards from it. Those flashcards are questions which are written on front and answers of those questions on back and those questions and answers are extracted from the inpt given by the user. Make sure to create exactly 10 flashcards. Both front and back should be one sentence long. You should return in the following JSON format: {
      "flashcards":[
        {
          "front": "Front of the card",
          "back": "Back of the card"
        }
      ]
    } Generate flashcards for the topic: "${topic}"`;

    try {
        // Generate content using the model
        const result = await model.generateContent({
            contents: [{ role: 'user', parts: [{ text: prompt }] }],
        });

        // Extract the response text
        const response = result.response;
        const text = await response.text(); // Ensure to await the response text

        // Parse the JSON response from the Gemini API
        const flashcards = JSON.parse(text);

        // Return the flashcards as a JSON response
        return NextResponse.json(flashcards.flashcards);
    } catch (error) {
        console.error('Error generating flashcards:', error);
        return NextResponse.json({ error: 'Failed to generate flashcards' }, { status: 500 });
    }
}
import Together from "together-ai";

class AIService {
  constructor() {
    // Initialize Together AI with API key
    this.together = new Together({
      apiKey: process.env.TOGETHER_API_KEY || "082cd53c56620a8d059c36e43dd7e3ab12e82576e8fd89816319a600ea68659a" // Replace with actual API key or ensure env variable is set
    });
  }

  async generateContent(category) {
    try {
      const response = await this.together.chat.completions.create({
        model: "meta-llama/Llama-Vision-Free",
        messages: [
          {
            role: "system", 
            content: `You are an educational AI assistant generating simple questions for young children in the ${category} category.`
          },
          {
            role: "user", 
            content: `Create an easy and fun educational question related to ${category} that any child can solve.`
          }
        ]
      });
      return response.choices[0].message.content;
    } catch (error) {
      console.error("Content Generation Error:", error);
      return `Unable to generate challenge. Error: ${error.message}`;
    }
  }

  async provideFeedback(userResponse, challenge) {
    try {
      const response = await this.together.chat.completions.create({
        model: "meta-llama/Llama-Vision-Free",
        messages: [
          {
            role: "system", 
            content: "You are a helpful educational AI providing simple and encouraging feedback for children."
          },
          {
            role: "user", 
            content: `Challenge: ${challenge}\nUser's Response: ${userResponse}\nProvide friendly and supportive feedback that helps the child learn.`
          }
        ]
      });
      return response.choices[0].message.content;
    } catch (error) {
      console.error("Feedback Generation Error:", error);
      return "Great effort! Keep going, and you'll get even better!";
    }
  }
}

export default new AIService();

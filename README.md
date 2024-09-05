## Gemini API Explorer

A simple Node.js project demonstrating how to interact with the Google Generative AI API. This project utilizes the `@google/generative-ai` package to integrate with Google's generative AI models and generate content based on user input.

### Features

- **Generative AI Integration**: Connects to the Google Generative AI API to leverage advanced AI models for content generation.
- **Content Generation**: Generates text content using the `gemini-1.5-pro` model.
- **Environment Variable Management**: Uses `dotenv` to securely manage API keys and other sensitive information.

### Setup

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/your-username/gemini-api-explorer.git
   ```

2. **Navigate to the Project Directory**:
   ```bash
   cd index.js
   ```

3. **Install Dependencies**:
   ```bash
   npm install
   ```

4. **Configure Environment Variables**:
   - Create a `.env` file in the root directory and add your API key:
     ```
     API_KEY=your-google-api-key
     ```

5. **Run the Project**:
   ```bash
   node index.js
   ```

### Usage

This project demonstrates how to set up and use the Google Generative AI API to generate content. The main functionality is encapsulated in `index.js`, where the `GoogleGenerativeAI` class is used to interact with the API and produce text content.

# InternMatch AI

This is a Next.js application built in Firebase Studio that uses AI to match internship candidates with companies.

## How to Run Locally

1.  **Install dependencies**:
    ```bash
    npm install
    ```
2.  **Set up your environment variables**: Create a `.env` file in the root of the project and add your Gemini API key:
    ```
    GEMINI_API_KEY="YOUR_API_KEY_HERE"
    ```
3.  **Run the development server**: This single command will start both the AI service and the Next.js application.
    ```bash
    npm run dev
    ```

4.  **Open the application**: You can now access the site at [http://localhost:9002](http://localhost:9002).


## Technology Stack

This website is a modern, AI-powered web application built with a focus on performance, scalability, and user experience.

Here’s a breakdown of the core technologies used:

*   **Frontend Framework (Next.js & React)**: The site is built using **Next.js**, a popular framework for **React**. This allows for a fast, server-rendered application, which is great for performance and SEO. We're using **TypeScript** for safer, more reliable code.

*   **User Interface (ShadCN UI & Tailwind CSS)**: The visual components like buttons, cards, and forms come from **ShadCN UI**. It provides a set of high-quality, accessible components that are styled using **Tailwind CSS**, a utility-first styling library that allows for rapid and consistent UI development.

*   **Artificial Intelligence (Google's Gemini & Genkit)**: The AI-driven features, such as internship matching and content generation, are powered by **Google's Gemini models**. We interact with these models through **Genkit**, an open-source framework from Google that simplifies building AI-powered features in TypeScript.

*   **Hosting**: The application is configured to be deployed on **Firebase App Hosting**, a secure, scalable, and fully-managed hosting service from Google, which is ideal for modern web apps like this one.

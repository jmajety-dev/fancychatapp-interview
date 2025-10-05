# Fancy Chat App

A modern, responsive chat application built with Next.js and powered by OpenRouter API. This app provides a beautiful interface for chatting with various AI models through the OpenRouter platform.

## Features

- 🤖 **Multiple AI Models**: Choose from GPT-3.5, GPT-4, Claude, Llama, and more
- 💬 **Real-time Chat**: Smooth, responsive chat interface
- 🎨 **Modern UI**: Beautiful, mobile-friendly design with Tailwind CSS
- ⚡ **Fast & Efficient**: Built with Next.js 14 and TypeScript
- 🔧 **Model Selection**: Switch between different AI models on the fly
- 📱 **Responsive Design**: Works perfectly on desktop and mobile

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn
- OpenRouter API key

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd fancychatapp-interview
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
Create a `.env.local` file in the root directory:
```env
OPENROUTER_API_KEY=your_openrouter_api_key_here
OPENROUTER_BASE_URL=https://openrouter.ai/api/v1
```

4. Get your OpenRouter API key:
- Visit [OpenRouter.ai](https://openrouter.ai/)
- Sign up for an account
- Get your API key from the dashboard

5. Run the development server:
```bash
npm run dev
```

6. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Available Models

The app supports various AI models through OpenRouter:

- **GPT-3.5 Turbo**: Fast and efficient (default)
- **GPT-4**: Most capable model
- **Claude 3 Sonnet**: Balanced performance
- **Claude 3 Haiku**: Fast and lightweight
- **Llama 2 70B**: Open source alternative

## Usage

1. **Start a conversation**: Type your message in the input field
2. **Select a model**: Use the dropdown in the header to choose your preferred AI model
3. **Send messages**: Press Enter to send, or Shift+Enter for new lines
4. **Clear chat**: Click the "Clear Chat" button to start a new conversation

## Tech Stack

- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **API**: OpenRouter
- **Deployment**: Vercel-ready

## Project Structure

```
├── app/
│   ├── api/chat/route.ts    # API endpoint for chat
│   ├── globals.css           # Global styles
│   ├── layout.tsx            # Root layout
│   └── page.tsx              # Home page
├── components/
│   ├── ChatContainer.tsx     # Main chat container
│   ├── ChatInput.tsx         # Message input component
│   ├── ChatMessage.tsx       # Individual message component
│   └── ModelSelector.tsx     # Model selection dropdown
├── lib/
│   └── openrouter.ts         # OpenRouter API client
└── README.md
```

## API Configuration

The app uses OpenRouter's API to access various AI models. Make sure to:

1. Get your API key from [OpenRouter.ai](https://openrouter.ai/)
2. Add it to your `.env.local` file
3. The app will automatically use the configured models

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is open source and available under the MIT License.

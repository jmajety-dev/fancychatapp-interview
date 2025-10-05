#!/bin/bash

# Setup script for Fancy Chat App
echo "🚀 Setting up Fancy Chat App..."

# Create .env.local file if it doesn't exist
if [ ! -f .env.local ]; then
    echo "📝 Creating .env.local file..."
    cat > .env.local << EOF
# OpenRouter API Configuration
OPENROUTER_API_KEY=your_openrouter_api_key_here
OPENROUTER_BASE_URL=https://openrouter.ai/api/v1
EOF
    echo "✅ Created .env.local file"
    echo "⚠️  Please update OPENROUTER_API_KEY with your actual API key from https://openrouter.ai/"
else
    echo "✅ .env.local file already exists"
fi

# Install dependencies
echo "📦 Installing dependencies..."
npm install

echo "🎉 Setup complete!"
echo ""
echo "Next steps:"
echo "1. Get your OpenRouter API key from https://openrouter.ai/"
echo "2. Update the OPENROUTER_API_KEY in .env.local"
echo "3. Run 'npm run dev' to start the development server"
echo "4. Open http://localhost:3000 in your browser"

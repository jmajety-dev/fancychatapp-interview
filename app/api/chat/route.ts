import { NextRequest, NextResponse } from 'next/server';
import { OpenRouterClient, ChatMessage } from '@/lib/openrouter';

export async function POST(request: NextRequest) {
  try {
    const { messages, model } = await request.json();

    if (!messages || !Array.isArray(messages)) {
      return NextResponse.json(
        { error: 'Messages array is required' },
        { status: 400 }
      );
    }

    const openRouterClient = new OpenRouterClient();
    const response = await openRouterClient.sendMessage(messages, model);

    return NextResponse.json({ message: response });
  } catch (error) {
    console.error('Chat API error:', error);
    return NextResponse.json(
      { error: error instanceof Error ? error.message : 'Internal server error' },
      { status: 500 }
    );
  }
}

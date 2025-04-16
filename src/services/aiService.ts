import axios from 'axios';

interface GenerateCardRequest {
  prompt: string;
  style?: string;
  count?: number;
}

interface GenerateCardResponse {
  cards: {
    imageUrl: string;
    style: string;
    prompt: string;
  }[];
}

export async function generateCards(request: GenerateCardRequest): Promise<GenerateCardResponse> {
  try {
    // In production environment, make actual API calls
    if (process.env.NODE_ENV === 'production' && process.env.OPENAI_API_KEY) {
      const response = await axios.post(
        'https://api.openai.com/v1/images/generations',
        {
          prompt: `${request.prompt} Style: ${request.style || 'modern'}`,
          n: request.count || 4,
          size: '512x512',
          response_format: 'url'
        },
        {
          headers: {
            Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
            'Content-Type': 'application/json'
          }
        }
      );

      const cards = response.data.data.map((item: any, index: number) => ({
        imageUrl: item.url,
        style: request.style || 'modern',
        prompt: request.prompt
      }));

      return { cards };
    } else {
      // In development, use mock data with placeholder images from Lorem Picsum
      const mockStyles = ['modern', 'elegant', 'natural', 'business'];
      const mockCards = Array(request.count || 4).fill(0).map((_, index) => ({
        // Use Lorem Picsum for placeholder images
        imageUrl: `https://picsum.photos/seed/card${index + 1}/512/512`,
        style: mockStyles[index % mockStyles.length],
        prompt: request.prompt
      }));

      return { cards: mockCards };
    }
  } catch (error) {
    console.error('Failed to generate AI cards:', error);
    throw error;
  }
} 
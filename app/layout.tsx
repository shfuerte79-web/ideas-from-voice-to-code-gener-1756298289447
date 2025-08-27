import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Ideas from: Voice-to-Code Generator',
  description: '[
  {
    "title": "Voice-Powered Game Engine Builder",
    "one_liner": "Create and prototype games by simply speaking commands.",
    "why_now": "The rise of voice interfaces in everyday life makes voice coding a natural next step.",
    "novel_mechanism": "Integrating voice recognition with game engine frameworks to allow for instant game design.",
    "ai_stack": [
      "GPT-4",
      "RAG",
      "Speech",
      "Embeddings"
    ],
    "edge_use_cases": [
      "Creating game mechanics on-the-fly",
      "Collaborative game design sessions through voice"
    ],
    "blue_ocean": true,
    "execution_72h": {
      "mvp_scope": [
        "Basic voice command integration",
        "Game asset generation",
        "Simple UI for game previews"
      ],
      "tools": [
        "Unity",
        "Dialogflow",
        "Firebase"
      ],
      "data_bootstrap": [
        "open-source game assets",
        "game development guidelines"
      ],
      "risk": [
        "Technical limitations in voice recognition",
        "User adoption challenges"
      ],
      "mitigation": [
        "Implement feedback loops for voice commands",
        "Offer extensive tutorials and demos"
      ]
    },
    "go_to_market": {
      "hooks": [
        "Instant game prototype demos",
        "Show off user-created games"
      ],
      "channels": [
        "Indie game development forums",
        "Twitch streams",
        "Reddit gaming subreddits"
      ],
      "pricing": {
        "free": "Limited game creation features",
        "pro": "$29/month for advanced tools",
        "business": "$199/month for team collaboration features"
      }
    },
    "moat": [
      "Community contributions",
      "Educational partnerships with game design schools",
      "User-generated content"
    ],
    "scores": {
      "novelty": 8,
      "72h_feasibility": 9,
      "revenue_potential": 7,
      "defensibility": 8
    },
    "total_score": 32,
    "reasoning": "This product brings a new dimension to game development that existing tools do not support, attracting a niche community eager for innovation."
  }
]',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ar" dir="rtl">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
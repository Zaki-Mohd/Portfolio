export interface ProjectItem {
  title: string;
  description: string;
  image: string;
  tech: string[];
  github?: string;
  live?: string;
  slug: string;
  longDescription?: string;
  features?: string[];
  challenges?: string;
  images?: string[];
}
// Andar
export const projectsData: ProjectItem[] = [
  {
    title: "Ai-Recruiter",
    description:
      "AI-powered voice agent that conducts interviews, helping recruiters save time, reduce bias, and hire smarter.",
    longDescription:
      "AI Recruiter is an advanced AI-powered voice assistant designed to transform the traditional hiring process. Built with Next.js, OpenAI, and Supabase, this tool autonomously conducts candidate interviews through natural voice interactions. Recruiters no longer need to spend hours screening candidates manually — AI Recruiter listens, evaluates, and analyzes responses in real time, providing unbiased insights and recommendations.",
      features: [
      "Automated Voice-Based Interviews",
      "Real-Time Candidate Evaluation",
      "Bias-Free Screening",
      "Detailed Interview Summaries",
      "Recruiter Dashboard",
      "OpenAI-Powered Intelligence",
      "Customizable Interview Questions",
    ],
    challenges:
    "I implemented a natural, voice-based interview system powered by OpenAI that could adapt dynamically to varied candidate responses, ensuring a human-like and engaging experience. To support real-time interaction with minimal latency, I optimized backend performance and introduced asynchronous data handling strategies. A key focus was designing a fair and unbiased evaluation mechanism, for which I developed a transparent scoring framework based on clarity, relevance, and coherence. To make the platform scalable, I implemented an architecture using Supabase that enabled real-time operations and efficient handling of multiple concurrent interviews without performance issues.",  
    image:
      "/images/ai-recruiter3.png",
    images: [
      "/images/ai-recruiter3.png",
      "/images/ai2.png",
         "/images/ai1.png",
    ],
    tech: ["Next.js", "JavaScript", "Tailwind CSS", "Supabase", "OpenAI","Vapi"],
    github: "https://github.com/Zaki-Mohd/ai-recruiter",
    live: "https://ai-recruiter-azure.vercel.app/",
    slug: "ai-recruiter",
  },
  {
    title: "Z++ Code Editor",
    description:
      "An AI powered code editor that provides real-time code suggestions, error detection, and debugging assistance.",
    longDescription:
      "AI Code Companion is an intelligent, AI-powered code editor designed to enhance the developer experience through real-time code suggestions, smart error detection, and contextual debugging assistance. Built using cutting-edge AI models, it analyzes your code as you type, offering intelligent autocompletions, flagging potential issues, and recommending best practices tailored to the specific programming language and context.",
     features: [
      "Instant Error Detection",
      "AI-Powered Debugging Assistance",
      "Multi-language Support",
      "Customizable Themes and Keybindings",
      "Lightweight and Fast Interface",
      "Beginner-Friendly Learning Prompts",
    ],
    challenges:
     "One of the main challenges I faced while developing the AI-powered code editor was ensuring real-time performance during complex code analysis across multiple languages. I implemented optimized token parsing and asynchronous processing to deliver instant code suggestions without any noticeable lag. Another key challenge was building a reliable error detection and debugging system that could adapt to various programming styles and logic structures. To overcome this, I fine-tuned AI prompts and integrated contextual understanding to provide accurate, language-specific assistance. Ensuring the editor remained lightweight and responsive while delivering these advanced features required careful architecture design and efficient state management.",
     image:
      "/images/zplusplus.png",
    images: [
      "/images/zp3.png",
      "/images/zplusplus.png",
     "/images/zp2.png",   ],
    tech: ["React", "Node.js","Express.js", "Tailwind CSS", "ContextAPI"],
    github: "https://github.com/Zaki-Mohd/Z_Plus_Plus",
    live: "https://z-plus-plus.vercel.app/",
    slug: "code-editor",
  },
  {
    title: "WanderLust - Under Maintenance",
    description:
      "A travel planning app that helps users discover and plan their next adventure with personalized recommendations.",
    longDescription:
      "Wanderlust is an intelligent travel planning app crafted to inspire, organize, and simplify every step of your journey. Whether you're dreaming of a spontaneous weekend escape or meticulously planning a multi-country adventure, Wanderlust helps you discover destinations, build custom itineraries, and explore experiences tailored just for you.",
    features: [
      "Smart Itinerary Builder",
      "Interactive Maps and Navigation",
      "Collaborative Trip Planning",
      "In-App Booking Integrations",
      "Travel Journal and Media Uploads",
      "Personalized Recommendations",
      "Offline Access to Itineraries",
    ],
    challenges:
      "Building a personalized recommendation system was challenging, as it needed to adapt to varied user preferences in real time. I implemented user profiling and content filtering to improve accuracy. Developing a collaborative itinerary planner with drag-and-drop support across devices also required UI optimization and efficient state handling. Managing dynamic travel data like weather and safety alerts involved integrating reliable APIs with smart caching to ensure performance and reliability.",
     image:
      "/images/wanderlust.png",
    images: [
      "/images/wanderlust1.png",
      "/images/wanderlust.png",
      "/images/wanderlust3.png",
    ],
    tech: ["MongoDB", "Express.js", "Node.js", "EJS","JavaScript"],
    github: "https://github.com/Zaki-Mohd/delta-project-1",
     live: "https://delta-project-1-efgd.onrender.com/listings",
    slug: "wander-lust",
  },
  {
    title: "MCP-X-Poster",
    description:
      "A demonstration of Model Context Protocol (MCP) server and client that uses Google Gemini to post tweets (formerly on Twitter, now X) and run dynamic tools." ,
    longDescription:
      "A practical demo of using the Model Context Protocol (MCP) to integrate Google Gemini for generating tweets and posting them to X (formerly Twitter). Built with Node.js, Express, and twitter-api-v2, it showcases real-time AI interaction, secure API usage, and tool execution in an MCP-compliant environment.",
    features: [
      "Interactive CLI chat that uses Google Gemini to understand user prompts",
      "MCP tools dynamically listed and called via Gemini",
      "Posts tweets using Twitter API",
      "Real-time communication with the server via Server-Sent Events (SSE)",
      "Easy to extend: add your own tools quickly.",
      
    ],
    challenges:
      "Designing seamless interactions between the MCP server, Google Gemini, and Twitter’s API posed multiple technical hurdles. Ensuring secure and consistent OAuth authentication for dynamic tweet posting required careful token handling and API rate-limit management. Building a responsive tool execution flow within the Model Context Protocol demanded custom logic for maintaining conversation state and tool outputs. Lastly, real-time communication between the client and Gemini, while keeping latency low, required efficient streaming strategies and backend optimization.",
    image:
      "/images/mcp4.jpg",
    images: [
      "/images/mcp2.jpg",
      "/images/mcp5.jpg",
      "/images/mcp3.jpg",
    ],
    tech: ["Google-Gemini", "Express.js", "Node.js", "X-API","JavaScript"],
    github: "https://github.com/Zaki-Mohd/mcp-x-poster",
    slug: "mcp-x-poster",
  },
  {
    title: "Assignment Buddy",
    description:
      "Assignment Buddy is a smart, AI-powered academic assistant built using Google ADK (Agent Development Kit). It combines multiple specialized agents to help students solve queries, simplify concepts, fetch research facts, generate formulas, and create quizzes — all with a single input.",
    longDescription:
      "Assignment Buddy is an AI-powered academic assistant built using Google’s Agent Development Kit (ADK), designed to help students with a wide range of tasks through a single input. It intelligently combines multiple specialized agents to solve academic queries, simplify complex concepts, fetch accurate research facts, auto-generate formulas, and create personalized quizzes. By streamlining these capabilities into one seamless tool, Assignment Buddy enhances learning efficiency, supports better understanding, and empowers students to tackle assignments with confidence and ease.",
     features: [
      "Solver Agent – Provides accurate academic solutions to diverse subject-related queries",
      "Simplifier Agent – Breaks down complex answers into easy-to-understand explanations",
      "Web Research Agent – Gathers real-time, credible facts and sources directly from the web",
      "Formula Finder – Detects relevant mathematical or scientific formulas and explains their application",
      "Quiz Maker Agent – Automatically generates MCQs and practice questions from user-provided text",
      
    ],
    challenges:
      "Coordinating multiple agents to work seamlessly in one flow was complex. Ensuring accurate responses, real-time web data, and maintaining context between agents required smart routing and prompt tuning. Optimizing for speed while handling dynamic queries also posed backend performance challenges.",
    image:
      "/images/ab1.png",
    images: [
      "/images/ab2.png",
      "/images/ab3.png",
      "/images/ab1.png",
    ],
    tech: ["Google-Gemini", "Python", "Google-ADK", "Agents","AI Agents"],
    github: "https://github.com/Zaki-Mohd/Assignment_Buddy",
    slug: "assignment-buddy",
  },
   {
    title: "Stall OS",
    description:
      "StallOS is a groundbreaking AI-powered assistant designed for Indian street food vendors. Built with Chaat-GPT, it helps optimize recipes, reduce ingredient waste, and boost daily profits — all through simple voice input. It's not just a helper — it's a smart kitchen partner in their pocket.",
    longDescription:
      "StallOS is an AI-powered assistant designed for Indian street food vendors, built using a custom-trained model called Chaat-GPT. Through simple voice inputs, it helps vendors adjust recipes based on ingredient quality, optimize profit margins using real-time pricing, and reduce daily waste by suggesting new dishes from leftovers. By combining smart cooking, cost analysis, and inventory usage into one tool, StallOS acts as a trusted kitchen companion — helping vendors serve consistent taste, make smarter decisions, and grow their daily profits with ease.",
        features: [
      "AI Sous-Chef – Provides smart recipe adjustments based on ingredient taste and quality to maintain flavor consistency",
      "Profit Optimizer – Calculates real-time profit margins and suggests pricing strategies to maximize daily earnings",
      "Performance Analytics – Displays dynamic sales charts and performance trends to track business growth",
      "Zero-Waste Genius – Suggests new recipes using leftover ingredients to minimize waste and increase profit",
      "Chaat-GPT Voice – Enables voice-driven interaction with the system using natural, local language input",
      "Daily Sales Strategy – Recommends which items to promote based on ingredient prices and potential profit"

      
    ],
    challenges:
      "Building StallOS involved key challenges like enabling accurate voice input in regional languages, translating subjective taste descriptions into precise recipe changes, and dynamically calculating profit margins from daily price fluctuations. Generating usable recipes from leftovers and ensuring all features worked seamlessly and fast required smart AI orchestration and efficient backend design.",
      image:
      "/images/s1.png",
    images: [
      "/images/s2.png",
      "/images/s4.png",
      "/images/s5.png",
    ],
    tech: ["Google-Gemini", "Vapi", "React", "Agents","AI Agents"],
    github: "https://github.com/Zaki-Mohd/StallOs.git",
     live: "https://stall-os.vercel.app/",
    slug: "stall-os",
  },
];

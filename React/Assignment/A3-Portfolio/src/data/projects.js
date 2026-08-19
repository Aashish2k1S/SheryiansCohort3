const projects = [
    {
        id: 1,
        title: "ScrapeFlow",
        slug: "scrapeflow",
        category: "AI / Data Processing",

        description:
            "LLM-powered web scraping and entity extraction platform for transforming unstructured web content into structured data.",

        overview:
            "ScrapeFlow explores how unstructured web content can be transformed into structured, deduplicated entities using LLM-powered extraction pipelines.",

        problem:
            "Web content is messy, inconsistent and difficult to process reliably. Extracting useful entities manually becomes slow and difficult to scale.",

        solution:
            "Built a Python-based processing pipeline that combines web scraping, LLM extraction, entity deduplication and relationship visualization.",

        features: [
            "Web content extraction",
            "LLM-powered entity extraction",
            "Entity deduplication",
            "Structured CSV output",
            "Markdown graph generation",
            "Mermaid relationship visualization",
        ],

        technologies: [
            "Python",
            "LLM",
            "Data Processing",
            "Mermaid",
        ],

        image: "../../Image/Projects/ScrapeFlow.png",

        github: "https://github.com/Aashish2k1S/ScrapeFlow",

        live: null,
    },

    {
        id: 2,
        title: "ERP Platform",
        slug: "erp-platform",
        category: "Full Stack / Backend",

        description:
            "A modular business management platform designed around inventory, accounts, reporting, and real-time insights.",

        overview:
            "A modular ERP platform designed to bring core business operations into a unified application.",

        problem:
            "Business workflows often become fragmented across multiple tools, making inventory, accounting and reporting difficult to manage consistently.",

        solution:
            "Designed a modular architecture where business domains can evolve independently while sharing a common backend and data layer.",

        features: [
            "Inventory management",
            "Accounts management",
            "Reporting",
            "Real-time dashboard updates",
            "Modular backend architecture",
        ],

        technologies: [
            "React",
            "FastAPI",
            "MS SQL",
            "Docker",
        ],

        image: "../../Image/Projects/ERP-Platform.png",
        github: null,
        live: null,
    },

    {
        id: 3,
        title: "AI Summarizer",
        slug: "ai-summarizer",
        category: "AI / Backend",

        description:
            "A FastAPI-based application for generating concise summaries using modern LLM APIs.",

        overview:
            "A lightweight API service that accepts text and generates concise summaries using an LLM.",

        problem:
            "Large amounts of textual information can be difficult to consume efficiently when users only need the key points.",

        solution:
            "Built a FastAPI backend that integrates an LLM API to process input text and return concise summaries.",

        features: [
            "REST API",
            "LLM integration",
            "Text summarization",
            "FastAPI backend",
        ],

        technologies: [
            "Python",
            "FastAPI",
            "Gemini",
            "REST API",
        ],

        image: "../../Image/Projects/AI-Summarizer.png",

        github: "https://github.com/Aashish2k1S/SummarizerAPI",

        live: null,
    },

    {
        id: 4,
        title: "Employee API",
        slug: "employee-api",
        category: "Backend / API",

        description:
            "A backend API demonstrating REST API design, database operations, and application architecture using .NET.",

        overview:
            "A backend-focused project demonstrating REST API development, database operations and clean application structure using .NET.",

        problem:
            "Backend applications need predictable API contracts, proper database interaction and maintainable application structure.",

        solution:
            "Implemented a structured .NET API with database operations and RESTful endpoints.",

        features: [
            "REST API",
            "CRUD operations",
            "SQL Server integration",
            "Backend architecture",
        ],

        technologies: [
            ".NET",
            "ASP.NET Core",
            "SQL Server",
            "REST API",
        ],

        image: "../../Image/Projects/EmployeeAPI.png",
        github: null,
        live: null,
    },
];

export default projects;
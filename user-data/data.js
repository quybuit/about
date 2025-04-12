export const bio = [
  "Hello, I'm Quy Bui!",
  "I possess a robust background in crafting enterprise-level web applications utilizing C# and the .NET Framework accumulated focus on the MicroServices architecture.",
  "My expertise lies in developing high-performance, scalable applications with a strong emphasis on code quality and maintainability.",
  "Skilled in TypeScript, ReaactJS, Vuejs... performance optimization, I aim to leverage my expertise in delivering innovative solutions that drive measurable business outcomes.",
  "Passionate about mentoring, teamwork, and continuous improvement in engineering processes.",
];

export const skills = [
  "C#, .NET, .NET Core, ASP.NET MVC, WPF, WinForms",
  "Microservices Architecture, Domain-Driven Design, SOLID, DRY, Clean Architecture",
  "Entity Framework, Microsoft SQL Server, MySQL, PostgreSQL, MongoDB",
  "Unit Testing (NUnit, XUnit, Moq, NSubstitute)",
  "JavaScript, MERN Stack, NestJS, NextJS, ReactJS",
  "Microsoft Azure (SQL Database, Message Bus, Azure Functions, Storage, Kubernetes)",
  "CI/CD Pipelines (Azure DevOps, GitLabCI)",
  "Database Performance Optimization, Indexing Strategies, Database Tuning",
  "Database Design, Migration, Backup and Recovery, Security Management",
  "WordPress CMS, Payment Gateways (Authorize.net, PayPal, VNPAY, Momo)"
];

export const experience = [
  {
    title: "CoverGo",
    duration: "May 2024 - Present",
    subtitle: "Full Stack Software Engineer",
    details: [
      "Developed and maintained enterprise-grade SAAS platform features using Vue.js, .NET Core, and GraphQL, serving major insurance clients",
      "Implemented Domain-Driven Design principles in microservices architecture, resulting in a more maintainable and scalable codebase handling high-volume insurance transactions.",
      "Optimized application performance through MongoDB query optimization and caching strategies, reducing response times by 50% for high-traffic scenarios.",
      "Led test-driven development initiatives, achieving 90% test coverage through unit and integration tests using Jest and xUnit.",
      "Containerized applications using Docker and orchestrated deployments on Azure cloud, ensuring high availability and scalability.",
    ],
    tags: ["Vue.js", ".NET Core", "GraphQL", "MongoDB", "Docker", "Azure", "TDD", "DDD"],
    icon: "building"
  },
  {
    title: "Property Guru",
    duration: "June 2023 - April 2024",
    subtitle: "Senior Software Engineer",
    details: [
      "Architected and developed microservices handling millions of daily requests using .NET Core and Domain-Driven Design principles, improving system scalability by 40%.",
      "Implemented CI/CD pipelines using Azure DevOps, reducing deployment time by 30% and improving release reliability.",
      "Led database optimization initiatives that reduced query response times by an average of 60% through indexing strategies and query tuning.",
      "Mentored 3 junior developers in clean code practices and microservices architecture, improving team velocity by 25%.",
      "Designed high-availability infrastructure solutions that reduced system downtime by 99.5% during peak traffic periods."
    ],
    tags: [".NET Core", "Microservices", "Azure", "DDD", "SQL Server", "CI/CD"],
    icon: "building"
  },
  {
    title: "Positive Thinking Company",
    duration: "April 2022 - August 2023",
    subtitle: "Senior Software Engineer",
    details: [
      "Developed a property rental platform for Australian market using ASP.NET Core microservices, handling 50,000+ daily transactions.",
      "Integrated Azure services (Service Bus, Functions, Kubernetes) to create event-driven architecture, improving system responsiveness by 35%.",
      "Redesigned database schema and migration strategy that reduced data retrieval times by 45% for complex queries.",
      "Implemented comprehensive unit testing coverage (85%+) using XUnit and Moq, reducing production bugs by 60%.",
      "Provided 24/7 production support and optimized cloud resource usage, saving $15,000 monthly in Azure costs."
    ],
    tags: ["ASP.NET Core", "Azure Functions", "Kubernetes", "PostgreSQL", "XUnit"],
    icon: "home"
  },
  {
    title: "NashTech",
    duration: "January 2021 - June 2022",
    subtitle: "Senior Software Engineer",
    details: [
      "Led development of car rental system serving US/UK markets, implementing real-time pricing algorithms that increased revenue by 18%.",
      "Architected payment processing platform handling $2M+ monthly transactions with 99.99% uptime.",
      "Optimized data visualization dashboards reducing load times from 8s to under 1s through query optimization and caching.",
      "Collaborated with global teams across 5 time zones using Scrum methodology, consistently delivering features 2 weeks ahead of schedule.",
      "Troubleshot and resolved critical production issues within SLA, maintaining 100% client satisfaction rating."
    ],
    tags: [".NET", "WPF", "SQL Server", "Redis", "SCRUM", "Payment Systems"],
    icon: "car"
  },
  {
    title: "SumServices",
    duration: "January 2019 - December 2020",
    subtitle: "Technical Lead",
    details: [
      "Built company-wide ERP system using .NET and React that automated 80% of manual processes, saving 200+ hours monthly.",
      "Developed WordPress template automation system that reduced website development time from 2 weeks to 3 days.",
      "Integrated multiple payment gateways (PayPal, VNPAY) processing $500k+ monthly with 100% transaction reliability.",
      "Led team of 5 developers, implementing code review processes that improved code quality by 40%.",
      "Created GIS mapping solutions that improved logistics planning efficiency by 30% for client operations."
    ],
    tags: [".NET", "React", "WordPress", "ERP", "Payment Gateways", "Team Lead"],
    icon: "cogs"
  }
];

export const trekking = [
  "<strong>Kheerganga Trek</strong>, Himachal Pradesh (9,711 feet)",
  "<strong>Triund Trek</strong>, Himachal Pradesh (9,350 feet)",
  "<strong>Kedarkantha Trek</strong>, Uttarakhand (12,500 feet)",
  "<strong>Jalori Pass Trek</strong>, Himachal Pradesh (10,800 feet)",
  "<strong>Vaishno Devi Trek</strong>, Jammu & Kashmir (5,200 feet)",
];

export const education = [
  {
    title: "Bachelor of Computer Science",
    duration: "2013 - 2017",
    subtitle: "Ho Chi Minh University of Industrial",
    details: [],
    tags: [
      "Data Structures & Algorithms",
      "Database Systems",
      "Software Engineering",
      "Computer Networks",
      "Object-Oriented Programming",
      "Web Development"
    ],
    icon: "graduation-cap",
  }
];

export const footer = [
  {
    label: "Links",
    data: [
      {
        text: "Email",
        link: "mailto:quybuit@gmail.com",
      },
      {
        text: "LinkedIn",
        link: "https://www.linkedin.com/in/quybuit",
      },
      {
        text: "Skype",
        link: "skype:live:buitanquy?chat",
      },
      {
        text: "Phone",
        link: "tel:+84857096994",
      }
    ],
  },
  {
    label: "copyright-text",
    data: ["Made with &hearts; by Quy Bui Tan | © " + new Date().getFullYear()],
  },
];

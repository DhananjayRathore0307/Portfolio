import {
    contact,
    css,
    express,
    git,
    github,
    html,
    javascript,
    linkedin,
    mongodb,
    nextjs,
    nodejs,
    pricewise,
    react,
    redux,
    tailwindcss,
    threads,
} from "../assets/icons";

export const skills = [
    {
        imageUrl: css,
        name: "CSS",
        type: "Frontend",
    },
    {
        imageUrl: express,
        name: "Express",
        type: "Backend",
    },
    {
        imageUrl: git,
        name: "Git",
        type: "Version Control",
    },
    {
        imageUrl: github,
        name: "GitHub",
        type: "Version Control",
    },
    {
        imageUrl: html,
        name: "HTML",
        type: "Frontend",
    },
    {
        imageUrl: javascript,
        name: "JavaScript",
        type: "Frontend",
    },
    {
        imageUrl: mongodb,
        name: "MongoDB",
        type: "Database",
    },
    
    {
        imageUrl: nextjs,
        name: "Next.js",
        type: "Frontend",
    },
    {
        imageUrl: nodejs,
        name: "Node.js",
        type: "Backend",
    },
    {
        imageUrl: react,
        name: "React",
        type: "Frontend",
    },
    {
        imageUrl: redux,
        name: "Redux",
        type: "State Management",
    },
    
    {
        imageUrl: tailwindcss,
        name: "Tailwind CSS",
        type: "Frontend",
    },
    
];


export const socialLinks = [
    {
        name: 'Contact',
        iconUrl: contact,
        link: '/Contact',
    },
    {
        name: 'GitHub',
        iconUrl: github,
        link: 'https://github.com/DhananjayRathore0307',
    },
    {
        name: 'LinkedIn',
        iconUrl: linkedin,
        link: 'https://www.linkedin.com/in/dhananjayrathore0307',
    }
];

export const projects = [
    {
        iconUrl: pricewise,
        theme: 'btn-back-red',
        name: 'AI Finance Platform',
        description: 'The Finance Tracker is a full-stack web application hat helps users manage and visualize their personal finances. It allows users to track income and expenses, categorize transactions, set budgets, and view financial insights through interactive dashboards',
        link: 'https://github.com/DhananjayRathore0307/Ai-finance-tracker.git',
    },
    {
        iconUrl: threads,
        theme: 'btn-back-green',
        name: 'Zoom-Clone',
        description: 'Built with the Next.js, this project replicates Zoom, a widely used video conferencing tool. It enables users to securely log in, create meetings and access various meeting functionalities such as recording, screen sharing, and managing participants..',
        link: 'https://github.com/DhananjayRathore0307/Zoom-clone',
    },
    
];
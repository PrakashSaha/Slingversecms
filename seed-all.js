/**
 * Seed script: Populates all Strapi content types from defaultContent.ts data.
 * Run after starting Strapi: node cms/seed-all.js
 * Requires STRAPI_ADMIN_EMAIL and STRAPI_ADMIN_PASSWORD env vars (or edit below).
 */

const BASE_URL = 'http://127.0.0.1:1337';
const ADMIN_EMAIL = process.env.STRAPI_ADMIN_EMAIL || 'admin@slingverse.in';
const ADMIN_PASSWORD = process.env.STRAPI_ADMIN_PASSWORD || 'Admin1234!';

// ─── ALL CONTENT DATA ────────────────────────────────────────────────────────

const hero = {
  titlePrefix: "Global AI & Software Development Company ",
  titleHighlighted: "Delivering Excellence",
  titleSuffix: " for Enterprises",
  description: "Slingverse is a premier AI and custom software development agency. We empower startups and enterprises across the US, UK, Europe, Australia, and the Middle East with high-performance web, mobile, and cloud solutions.",
  ctaLabel: "Schedule Consultation",
  ctaHref: "#contact",
  trustedStackLabel: "Trusted Technology Stack",
  marqueeLogos: [
    { name: "AWS", logo: "https://www.vectorlogo.zone/logos/amazon_aws/amazon_aws-icon.svg" },
    { name: "Google Cloud", logo: "https://www.vectorlogo.zone/logos/google_cloud/google_cloud-icon.svg" },
    { name: "Azure", logo: "https://www.vectorlogo.zone/logos/microsoft_azure/microsoft_azure-icon.svg" },
    { name: "Redis", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg" },
    { name: "React", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
    { name: "Next.js", logo: "https://www.vectorlogo.zone/logos/nextjs/nextjs-icon.svg" },
    { name: "Node.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
    { name: "TypeScript", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
    { name: "Docker", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
    { name: "Kubernetes", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg" }
  ]
};

const servicesSection = {
  headerPrefix: "Our Core Expertise in ",
  headerHighlighted: "AI & Software Development",
  description: "We combine technical excellence with futuristic design to deliver SEO-optimized web and native products that stand out in the digital landscape.",
  ctaLabel: "Ignite Your Innovation",
  ctaHref: "#contact"
};

const services = [
  { iconName: "Cpu", title: "Custom AI Development", desc: "We build bespoke intelligence systems—including custom machine learning models, NLP tools, and generative AI—tailored to optimize and automate your unique business operations." },
  { iconName: "Bot", title: "AI Automation", desc: "Replace repetitive manual tasks with intelligent algorithms. We integrate automated decision-making and smart agents to eliminate bottlenecks and accelerate enterprise workflows." },
  { iconName: "Rocket", title: "MVP Development", desc: "Launch your product concept rapidly with a robust Minimum Viable Product (MVP). Validate hypotheses with real users, collect critical feedback, and scale your application securely." },
  { iconName: "Cloud", title: "Cloud Solutions & DevOps Services", desc: "Migrate, orchestrate, and optimize your systems with high-availability, secure, and cost-effective serverless and multi-cloud architectural frameworks." },
  { iconName: "Code2", title: "Software Solutions", desc: "Custom-engineered enterprise software designed to solve complex operational challenges, optimize internal productivity, and grow sustainably." },
  { iconName: "Globe", title: "SEO-Optimized Web Development with React & Next.js", desc: "Fast, highly interactive, and search-optimized web applications built on modern frameworks with high-fidelity performance that scales perfectly." },
  { iconName: "Smartphone", title: "Mobile App Development for iOS & Android", desc: "Stunning, high-performance native and cross-platform mobile apps for iOS and Android that deliver engaging and intuitive user experiences." },
  { iconName: "Settings", title: "Product Engineering", desc: "Full-lifecycle engineering from initial validation, structural design, prototyping, to rigorous testing and robust long-term maintenance cycles." },
  { iconName: "Wifi", title: "IoT Engineering", desc: "Architect secure embedded logic and software interfaces that connect smart devices, collect telemetry, and power real-time cloud data insights." }
];

const techStackSection = {
  headerPrefix: "Deep Impact ",
  headerHighlighted: "Across",
  headerBlueHighlighted: "Technologies",
  description: "We combine deep vertical knowledge with horizontal technical excellence to deliver solutions that navigate complex digital landscapes.",
  ctaLabel: "Build Your Vision",
  ctaHref: "#contact"
};

const techCategories = [
  {
    title: "Web Development", subtitle: "MODERN FRONTEND",
    description: "We build blazing fast, SEO-optimized web applications using the latest frontend frameworks and performance patterns.",
    features: ["React & Next.js Ecosystem", "TypeScript for Type Safety", "Tailwind CSS & Modern Styling", "Performance Optimization"],
    iconName: "Globe2", accent: "text-cyan-600", bgAccent: "bg-cyan-50", borderAccent: "border-cyan-200",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=800",
    logos: [
      { name: "HTML5", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
      { name: "CSS3", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
      { name: "JavaScript", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
      { name: "TypeScript", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
      { name: "React", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
      { name: "Next.js", logo: "https://www.vectorlogo.zone/logos/nextjs/nextjs-icon.svg" },
      { name: "Vue", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg" },
      { name: "Angular", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg" },
      { name: "Tailwind", logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/tailwindcss/tailwindcss-original.svg" }
    ]
  },
  {
    title: "Mobile Development", subtitle: "CROSS-PLATFORM & NATIVE",
    description: "High-performance mobile applications for iOS and Android with seamless user experiences and native performance.",
    features: ["React Native & Flutter", "Swift & Kotlin Native", "Offline-First Architecture", "Biometric Authentication"],
    iconName: "Smartphone", accent: "text-pink-600", bgAccent: "bg-pink-50", borderAccent: "border-pink-200",
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&q=80&w=800",
    logos: [
      { name: "React Native", logo: "https://cdn.jsdelivr.gh/devicons/devicon/icons/react/react-original.svg" },
      { name: "Flutter", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg" },
      { name: "Swift", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/swift/swift-original.svg" },
      { name: "Kotlin", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kotlin/kotlin-original.svg" },
      { name: "Dart", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dart/dart-original.svg" }
    ]
  },
  {
    title: "Cloud & Infrastructure", subtitle: "SCALABLE SYSTEMS",
    description: "Cloud-native solutions designed for high availability, security, and global scale with automated scaling.",
    features: ["Multi-cloud Strategy", "Serverless Architecture", "Global Content Delivery", "Disaster Recovery"],
    iconName: "Cloud", accent: "text-blue-600", bgAccent: "bg-blue-50", borderAccent: "border-blue-200",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=800",
    logos: [
      { name: "AWS", logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/amazonwebservices/amazonwebservices-original-wordmark.svg" },
      { name: "Google Cloud", logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/googlecloud/googlecloud-original.svg" },
      { name: "Azure", logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/azure/azure-original.svg" },
      { name: "Firebase", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg" },
      { name: "Cloudflare", logo: "https://www.vectorlogo.zone/logos/cloudflare/cloudflare-icon.svg" }
    ]
  },
  {
    title: "AI & Data Science", subtitle: "INTELLIGENT SOLUTIONS",
    description: "Leveraging machine learning and artificial intelligence to drive business insights and automation at scale.",
    features: ["Generative AI & LLMs", "Computer Vision", "Natural Language Processing", "Data Engineering"],
    iconName: "Cpu", accent: "text-purple-600", bgAccent: "bg-purple-50", borderAccent: "border-purple-200",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800",
    logos: [
      { name: "Python", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
      { name: "TensorFlow", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg" },
      { name: "PyTorch", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg" },
      { name: "OpenAI", logo: "https://www.vectorlogo.zone/logos/openai/openai-icon.svg" }
    ]
  },
  {
    title: "Backend & APIs", subtitle: "ROBUST ARCHITECTURE",
    description: "Secure and performant server-side logic, high-throughput APIs, and complex database management.",
    features: ["Microservices Architecture", "GraphQL & REST APIs", "Real-time Data Sync", "Distributed Systems"],
    iconName: "Server", accent: "text-emerald-600", bgAccent: "bg-emerald-50", borderAccent: "border-emerald-200",
    image: "https://images.unsplash.com/photo-1597733336794-12d05021d510?auto=format&fit=crop&q=80&w=800",
    logos: [
      { name: "Node.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
      { name: "Go", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/go/go-original.svg" },
      { name: "PostgreSQL", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
      { name: "MongoDB", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
      { name: "GraphQL", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain.svg" },
      { name: "NestJS", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nestjs/nestjs-plain.svg" }
    ]
  },
  {
    title: "DevOps & Automation", subtitle: "CONTINUOUS DELIVERY",
    description: "Automating workflows and infrastructure to ensure rapid, secure, and reliable software delivery cycles.",
    features: ["CI/CD Pipelines", "Infrastructure as Code", "Container Orchestration", "Security Automation"],
    iconName: "Settings", accent: "text-slate-600", bgAccent: "bg-slate-50", borderAccent: "border-slate-200",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&q=80&w=800",
    logos: [
      { name: "Docker", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
      { name: "Kubernetes", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg" },
      { name: "Terraform", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/terraform/terraform-original.svg" },
      { name: "GitHub", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" },
      { name: "Jenkins", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jenkins/jenkins-original.svg" }
    ]
  }
];

const industriesSection = {
  headerPrefix: "Industries We ",
  headerHighlighted: "Power with AI & Software Solutions",
  description: "We specialize in engineering high-performance software for complex sectors that demand precision, trust, and AI-driven efficiency.",
  ctaLabel: "Pioneer Your Industry",
  ctaHref: "#contact"
};

const industries = [
  { iconName: "Truck", title: "AI & Software Solutions for Logistics and Supply Chain", color: "text-orange-600", bgColor: "bg-orange-50", desc: "We build logistics management software, AI route optimization engines, and fleet tracking systems for carriers and 3PLs.", items: ["Fleet tracking Software", "Load Planning Software", "Warehouse Management System"] },
  { iconName: "HeartPulse", title: "HIPAA-Compliant Healthcare Software Development", color: "text-rose-600", bgColor: "bg-rose-50", desc: "From telemedicine apps to EHR, EMR, and patient portals, we build compliant healthcare software for hospitals and healthtech startups.", items: ["Telemedicine App", "EHR, EMR, Patient Portal", "Medical Billing Software"] },
  { iconName: "ShoppingCart", title: "eCommerce & Marketplace App Development", color: "text-indigo-600", bgColor: "bg-indigo-50", desc: "Custom eCommerce platforms engineered for conversion optimization, B2B marketplaces, and automated inventory systems.", items: ["B2B, B2C, C2C, & PoS Marketplaces", "Order Management software (OMS)", "Inventory Management Software (IMS)"] },
  { iconName: "Plane", title: "Travel & Hospitality Software Solutions", color: "text-sky-600", bgColor: "bg-sky-50", desc: "We design scalable booking engines and dynamic pricing algorithms to power the modern travel and hospitality industry.", items: ["Booking Engine Software", "Travel Itinerary App", "Loyalty Management Software"] },
  { iconName: "CreditCard", title: "Fintech Software Development & Payment Solutions", color: "text-emerald-600", bgColor: "bg-emerald-50", desc: "We engineer secure, audit-ready fintech platforms including digital wallets, KYC/AML software, and high-throughput payment cores.", items: ["Digital Wallet Platforms", "KYC AML Software", "P2P Payment Solutions"] },
  { iconName: "PlayCircle", title: "Entertainment", color: "text-purple-600", bgColor: "bg-purple-50", items: ["OTT Streaming Apps", "Music Streaming Apps", "Content Management Solutions"] },
  { iconName: "GraduationCap", title: "Education", color: "text-teal-600", bgColor: "bg-teal-50", items: ["School Management System", "LMS Software Development", "Online Assessment Platform"] },
  { iconName: "Home", title: "Real Estate", color: "text-amber-600", bgColor: "bg-amber-50", items: ["Property Management Software", "Real Estate CRM System", "Brokers & Agents Tools"] },
  { iconName: "Car", title: "Automotive", color: "text-blue-600", bgColor: "bg-blue-50", items: ["Telematics Solutions", "Dealership Management", "EV Charging Software"] },
  { iconName: "Droplets", title: "Oil & Gas", color: "text-yellow-600", bgColor: "bg-yellow-50", items: ["SCADA Software Tools", "Asset Monitoring Systems", "HSE Compliance Tech"] },
  { iconName: "Utensils", title: "Restaurant", color: "text-red-600", bgColor: "bg-red-50", items: ["POS Integration Services", "Reservation System Development", "Cloud Kitchen Software"] },
  { iconName: "Trophy", title: "Sports", color: "text-lime-600", bgColor: "bg-lime-50", items: ["Live Score Platforms", "Performance Analytics", "Fantasy Sports App"] }
];

const processSection = {
  headerPrefix: "How We ",
  headerHighlighted: "Operate",
  description: "Our streamlined workflow ensures rapid delivery without compromising on quality or innovation.",
  ctaLabel: "Create Your Platform",
  ctaHref: "#contact"
};

const processSteps = [
  { stepId: "01", title: "Discovery", desc: "Deep dive into your business goals and user needs.", iconName: "Lightbulb", color: "bg-blue-500/10 text-blue-500" },
  { stepId: "02", title: "Design", desc: "High-fidelity prototypes that push UI/UX boundaries.", iconName: "Layers", color: "bg-purple-500/10 text-purple-500" },
  { stepId: "03", title: "Agile Build", desc: "Iterative development with continuous feedback.", iconName: "Zap", color: "bg-accent/10 text-accent" },
  { stepId: "04", title: "Scale", desc: "Precision deployment and ongoing growth support.", iconName: "Rocket", color: "bg-green-500/10 text-green-500" }
];

const trustSection = {
  header: "Leadership Message",
  description: "Our Founder & Managing Director, Mr. Souvik Roy Chowdhury, outlines Sling Verse's core commitment to high-integrity engineering and seamless customer transformations.",
  ctaLabel: "Discuss With Leadership",
  ctaHref: "#contact",
  badgeLabel: "from the director",
  quote: "At Sling Verse, we don't just write source code—we build the resilient, AI-powered infrastructure that will secure and navigate your business through tomorrow's industries.",
  directorName: "Mr. Souvik Roy Chowdhury",
  directorTitle: "Founder & Managing Director",
  directorImage: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=400&h=500",
  activeStatusLabel: "Active Leadership",
  meetTeamCtaLabel: "Meet The Team",
  meetTeamCtaHref: "#company-details"
};

const testimonialsSection = {
  headerPrefix: "Client ",
  headerHighlighted: "Success",
  headerSuffix: " Stories",
  description: "Hear from the industry leaders who have partnered with our AI and software development company to drive innovation and achieve measurable results.",
  ctaLabel: "Start Your Story",
  ctaHref: "#contact"
};

const testimonials = [
  { name: "Sarah Jenkins", title: "CTO, HealthTech Solutions", company: "Healthcare Software Development Client", quote: "Sling Verse transformed our legacy systems into a modern, AI-driven platform. Their expertise in healthcare compliance was exactly what we needed.", image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=200" },
  { name: "Marcus Chen", title: "Founder, SwiftLogistics", company: "Logistics Software & Real-Time Tracking Client", quote: "The real-time tracking system they built for us has reduced our operational costs by 25%. Their team is responsive, professional, and highly skilled.", image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=200" },
  { name: "Elena Rodriguez", title: "Product Director, FinStream", company: "Fintech App Development Client", quote: "Security was our top priority. Sling Verse delivered a robust, scalable fintech solution that exceeded our expectations and passed every audit with flying colors.", image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=200" },
  { name: "David Smith", title: "Operations Manager, Global Retailers", company: "eCommerce Platform Development Client", quote: "Their eCommerce platform integration was seamless. We saw an immediate 40% increase in mobile conversions after launch. Truly a game-changer.", image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=200" }
];

const contactSection = {
  headerPrefix: "READY TO ",
  headerHighlighted: "INNOVATE?",
  headerSuffix: " LET'S TALK.",
  description: "Headquartered in India – delivering AI and software development services to clients worldwide. Whether you have a specific project in mind or just want to explore the possibilities, our team is ready to help you navigate the future of technology.",
  features: [
    { iconName: "Zap", title: "Fast Response", desc: "We typically respond to all inquiries within 24 business hours.", color: "accent" },
    { iconName: "ShieldCheck", title: "Secure & Confidential", desc: "Your data and project ideas are protected by our strict NDA protocols.", color: "accent-blue" }
  ],
  formTitlePrefix: "SEND US A ",
  formTitleHighlighted: "MESSAGE",
  fields: {
    name: { label: "Full Name", placeholder: "John Doe" },
    email: { label: "Email Address", placeholder: "john@example.com" },
    country: { label: "Country", placeholder: "e.g. United States" },
    phone: { label: "Phone Number", placeholder: "+1 (555) 000-0000" },
    message: { label: "Message", placeholder: "Tell us about your project..." }
  },
  submitButtonLabel: "Send Message",
  submitButtonSuccess: "Message Sent Successfully!",
  faqSection: {
    headerPrefix: "Frequently Asked ",
    headerHighlighted: "Questions",
    description: "Find answers to the most common questions regarding our custom AI solutions, development processes, and how we help startups scale.",
    items: [
      { question: "What services does an AI development company for healthcare startups in India typically offer?", answer: "We specialize in engineering HIPAA-compliant patient portals, AI-driven telemedicine applications, and custom electronic health record (EHR) systems that scale with the rapid growth of healthcare startups globally." },
      { question: "Do you provide dedicated software development teams for enterprise projects?", answer: "Yes, we provide scalable, highly specialized engineering teams. From microservices architecture to AI automation logic, our developers embed seamlessly into your existing workflows to accelerate your roadmap." },
      { question: "How long does it take to deploy a custom AI solution or mobile app?", answer: "A standard MVP (Minimum Viable Product) typically launches in 8 to 12 weeks. Complex enterprise integrations require 4 to 6 months depending on regulatory compliances." },
      { question: "Do you offer post-launch maintenance and DevOps support?", answer: "Absolutely. We offer complete lifecycle support, including CI/CD pipeline management, Kubernetes orchestration, and continuous AI model tuning." },
      { question: "Can you migrate legacy applications to modern cloud architecture?", answer: "Yes, our cloud engineering teams frequently re-architect legacy monolithic systems into scalable, serverless, or containerized microservices using AWS, Azure, and Google Cloud." }
    ]
  }
};

const footerData = {
  copyrightText: "Copyright 2026 Sling Verse. All Rights Reserved.",
  socialLinks: [
    { platform: "LinkedIn", url: "https://linkedin.com/company/slingverse" },
    { platform: "Instagram", url: "https://instagram.com/slingverse" },
    { platform: "X", url: "https://twitter.com/slingverse" },
    { platform: "YouTube", url: "https://youtube.com/@slingverse" },
    { platform: "Website", url: "https://slingverse.in" }
  ],
  footerLinks: [
    { label: "Privacy Policy", url: "/privacy-policy" },
    { label: "Terms of Use", url: "/terms-of-use" },
    { label: "Sitemap", url: "/sitemap" },
    { label: "Blog", url: "/blog" }
  ]
};

const globalSetting = {
  defaultMetaTitle: "SlingVerse - AI & Software Development Company",
  defaultMetaDescription: "SlingVerse is an AI and custom software development company in India serving startups and enterprises worldwide.",
  siteName: "SlingVerse"
};

const companyPage = {
  heroImage: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=2000",
  heroHeadlinePrefix: "Democratizing advanced intelligence systems to solve ",
  heroHeadlineHighlighted: "enterprise friction",
  heroHeadlineSuffix: ".",
  heroDescription: "We design the intelligent operating layers of tomorrow's market leaders.",
  visionTitle: "Our Vision",
  visionDesc: "We recognize that computing is shifting from static CRUD operations to proactive, intelligent systems. Sling Verse structures customized software ecosystems that integrate natural language AI, real-time edge processing, and ultra-scalable web and mobile applications under absolute security metrics.",
  visionIconName: "Compass",
  missionTitle: "Core Mission Statement",
  missionDesc: "To deliver transparent, scalable, and high-performance custom code alongside practical AI modeling that translates directly into business value, lower margins, and sustainable technical assets.",
  missionIconName: "Target",
  valuesBadge: "HOW WE DEVELOP",
  valuesTitle: "Our Fundamental Engineering Beliefs",
  valuesList: [
    { iconName: "Cpu", title: "Impact-Driven AI", color: "accent", desc: "We look beyond artificial intelligence buzzwords. Our algorithms deliver high-integrity predictive logic and immediate daily efficiency savings." },
    { iconName: "Zap", title: "Velocity with Integrity", color: "accent-blue", desc: "Our agile engineering stacks are built modularly. We avoid bloated monoliths to deploy systems that are instantly faster and simple to scale." },
    { iconName: "ShieldCheck", title: "Data Sovereignty", color: "accent", desc: "Enterprise intellectual property is sacred. We formulate closed loop, secure cloud deployments that safeguard business telemetry perfectly." }
  ],
  teamBadge: "PEOPLE BEHIND THE SYSTEM",
  teamTitle: "The Leadership & Engineering Core",
  teamDesc: "We align top-tier AI researchers, reliable software engineers, and visionary product strategists to ensure every digital element contains pure operational focus.",
  bentoBadge: "OUR ENVIRONMENT",
  bentoTitle: "Active Engineering Studio",
  bentoImages: [
    { src: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=800", alt: "Clean Engineering Desk", className: "col-span-1 md:col-span-2 row-span-1 h-72" },
    { src: "https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&q=80&w=800", alt: "Collaborative UX Session", className: "col-span-1 row-span-1 h-72" },
    { src: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&q=80&w=800", alt: "Server Deployment Rack", className: "col-span-1 row-span-1 h-72" },
    { src: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=800", alt: "Creative Meeting", className: "col-span-1 md:col-span-2 row-span-1 h-72" }
  ]
};

const teamMembers = [
  { name: "Mr. Souvik Roy Chowdhury", role: "Founder & Managing Director", bio: "An industry visionary driving enterprise AI adoption. Mr. Souvik combines strategic deep tech insight with solid operational rigor to structure frictionless client transformation frameworks.", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=400&h=400", skills: ["AI Systems Strategy", "Enterprise Architecture", "Product Operations"] },
  { name: "Ananya Sen", role: "Chief AI Systems Architect", bio: "Ex-Meta AI researcher specializing in high-throughput Retrieval-Augmented Generation (RAG) and dense neural network integrations customized for heavy industrial logic.", image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=400&h=400", skills: ["Large Language Models", "Neural Search", "Model Optimization"] },
  { name: "Vikram Malhotra", role: "VP of Cloud & DevOps Engineering", bio: "Kubernetes expert and multi-cloud orchestration leader. Vikram ensures all IoT and software solution environments achieve 99.99% active production availability.", image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=400&h=400", skills: ["Kubernetes", "AWS/Azure Systems", "Data Sovereignty Encryption"] },
  { name: "Sophia Chen", role: "Lead Digital Product Designer", bio: "Crafts engaging and intuitive design interfaces that render complex machinery data flows readable, responsive, and aesthetically outstanding.", image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=400&h=400", skills: ["UI/UX Systems", "Fidelity Prototyping", "Aesthetic Rhythm"] }
];

const caseStudiesPage = {
  heroBadge: "CASE STUDIES",
  heroTitle: "Real-World Impact",
  heroDesc: "A ledger of enterprise problems solved through resilient, secure cloud architecture and custom-tailored AI intelligence layers.",
  filters: ["All", "Healthcare", "Fintech", "E-commerce", "Logistics", "AI Tech"]
};

const caseStudies = [
  { title: "AI Chatbot Deployed in 3 Weeks", industry: "E-commerce Leader", category: "E-commerce", image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80&w=800", iconName: "Zap", challenge: "Needed customer support AI integrated with existing inventory system.", solution: "Built custom RAG pipeline with Azure OpenAI, vector search on product catalog, streaming responses.", fullChallenge: "Our client, a top-tier e-commerce leader handling millions of daily sessions, was facing a severe backlog in customer support tickets.", fullSolution: "We engineered a robust Retrieval-Augmented Generation (RAG) pipeline utilizing Azure OpenAI's advanced LLMs, intricately connected to their real-time SQL inventory databases.", results: ["40% reduction in support tickets", "<500ms average response time", "85% customer satisfaction score", "Deployed 2x faster than estimated"], techStack: ["Azure OpenAI", "LangChain", "Supabase Vector", "Next.js"] },
  { title: "Secured HIPAA Patient Portal", industry: "Healthcare Pioneer", category: "Healthcare", image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=800", iconName: "Activity", challenge: "Fragmented patient portal data and strict compliance regulations slowed down clinic consultation speeds.", solution: "Developed integrated real-time microservices with HL7/FHIR security parameters.", fullChallenge: "A leading network of rural healthcare clinics struggled with fragmented legacy systems.", fullSolution: "Our team architected a unified, real-time microservices ecosystem powered by FastAPI and PostgreSQL.", results: ["100% HIPAA and SOC2 compliance", "45% increase in rural patient reach", "30% reduction in administrative intake", "Zero latency on high-fidelity visual streams"], techStack: ["React Native", "FastAPI", "AWS Cognito", "PostgreSQL"] },
  { title: "AI Route Optimization Hub", industry: "Logistics Hub", category: "Logistics", image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=800", iconName: "Truck", challenge: "Manual route assignment of international shipping freights caused severe delays and high error rates.", solution: "Implemented active drone sensory monitoring coupled with AI-driven reinforcement schedules.", fullChallenge: "Handling over 10,000 daily international freight shipments, this global logistics provider was hitting a hard ceiling on efficiency.", fullSolution: "We replaced manual dispatching with a completely autonomous AI scheduling hub.", results: ["25% faster delivery times", "10k+ daily shipments supported", "18% total reduction in fuel metrics", "Automated dynamic route recalculation in <1s"], techStack: ["Python", "TensorFlow", "Docker", "Apache Kafka"] },
  { title: "High-Throughput Payment Core", industry: "Fintech Leader", category: "Fintech", image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=800", iconName: "ShieldCheck", challenge: "High checkout failure rates and slow transaction parsing during high-volume international trading periods.", solution: "Built a distributed settlement core using caching arrays and dedicated verification ledgers.", fullChallenge: "A rapidly growing fintech platform was experiencing critical bottlenecks during peak international trading hours.", fullSolution: "We performed a surgical rewrite of their core settlement engine utilizing Go for its unparalleled concurrency performance.", results: ["99.99% transaction success rate", "<200ms transaction settlement latency", "$4.2M daily processed volume supported", "Zero payment security breaches reported"], techStack: ["Go", "Kubernetes", "Redis", "Hyperledger"] },
  { title: "Autonomous Inspection Visual Engine", industry: "AI Deep Tech", category: "AI Tech", image: "https://images.unsplash.com/photo-1508614589041-895b88991e3e?auto=format&fit=crop&q=80&w=800", iconName: "Cpu", challenge: "Slow and highly hazardous manual human checks on high-altitude wind turbine components.", solution: "Created robust embedded computer vision models running real-time thermal scanning feeds.", fullChallenge: "Conducting structural integrity checks on offshore wind turbines is a dangerous, slow, and expensive process.", fullSolution: "We developed a lightweight, highly accurate computer vision pipeline using YOLOv8, trained specifically on composite material stress fractures.", results: ["80% reduction in downtime inspects", "100% human risk elimination", "5x faster defect localization loops", "Deployed in underwater rig fleets"], techStack: ["YOLOv8", "Nvidia Jetson", "C++", "ROS2"] }
];

// ─── SEEDING LOGIC ────────────────────────────────────────────────────────────

async function getAdminToken() {
  const res = await fetch(`${BASE_URL}/admin/login`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email: ADMIN_EMAIL, password: ADMIN_PASSWORD })
  });
  if (!res.ok) throw new Error(`Admin login failed: ${await res.text()}`);
  const json = await res.json();
  return json.data?.token;
}

async function upsertSingle(token, uid, data) {
  const url = `${BASE_URL}/content-manager/single-types/${uid}`;
  const res = await fetch(url, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${token}` },
    body: JSON.stringify(data)
  });
  const text = await res.text();
  if (!res.ok) {
    console.error(`  ✗ Failed to upsert ${uid}: ${res.status} ${text}`);
  } else {
    console.log(`  ✓ Upserted single: ${uid}`);
  }
}

async function deleteAll(token, uid) {
  const res = await fetch(`${BASE_URL}/content-manager/collection-types/${uid}?pageSize=200`, {
    headers: { Authorization: `Bearer ${token}` }
  });
  if (!res.ok) {
    console.error(`  ✗ Failed to list ${uid}: ${res.status}`);
    return;
  }
  const json = await res.json();
  const items = json.results || [];
  for (const item of items) {
    await fetch(`${BASE_URL}/content-manager/collection-types/${uid}/${item.id}`, {
      method: 'DELETE',
      headers: { Authorization: `Bearer ${token}` }
    });
  }
  if (items.length > 0) console.log(`  ✓ Deleted ${items.length} existing ${uid}`);
}

async function createMany(token, uid, items) {
  let count = 0;
  for (const item of items) {
    const res = await fetch(`${BASE_URL}/content-manager/collection-types/${uid}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${token}` },
      body: JSON.stringify(item)
    });
    if (res.ok) {
      count++;
    } else {
      console.error(`  ✗ Failed to create in ${uid}: ${res.status} ${await res.text()}`);
    }
  }
  console.log(`  ✓ Created ${count}/${items.length} ${uid}`);
}

async function seed() {
  console.log('\n🌱 Starting Strapi Content Manager seed...\n');

  let token;
  try {
    token = await getAdminToken();
    console.log('✅ Admin authenticated via Content Manager\n');
  } catch (e) {
    console.error('❌ Could not authenticate admin. Is Strapi running on port 1337?');
    console.error('   Set STRAPI_ADMIN_EMAIL and STRAPI_ADMIN_PASSWORD env vars.');
    process.exit(1);
  }

  // --- Singles ---
  console.log('📄 Seeding single types...');
  await upsertSingle(token, 'api::hero.hero', hero);
  await upsertSingle(token, 'api::services-section.services-section', servicesSection);
  await upsertSingle(token, 'api::tech-stack-section.tech-stack-section', techStackSection);
  await upsertSingle(token, 'api::industries-section.industries-section', industriesSection);
  await upsertSingle(token, 'api::process-section.process-section', processSection);
  await upsertSingle(token, 'api::trust-section.trust-section', trustSection);
  await upsertSingle(token, 'api::testimonials-section.testimonials-section', testimonialsSection);
  await upsertSingle(token, 'api::contact-section.contact-section', contactSection); // FAQ is embedded as faqSection JSON
  await upsertSingle(token, 'api::footer.footer', footerData);
  await upsertSingle(token, 'api::global-setting.global-setting', globalSetting);
  await upsertSingle(token, 'api::company-page.company-page', companyPage);
  await upsertSingle(token, 'api::case-studies-page.case-studies-page', caseStudiesPage);

  // --- Collections ---
  console.log('\n📚 Seeding collections (deleting existing first)...');

  await deleteAll(token, 'api::service.service');
  await createMany(token, 'api::service.service', services);

  await deleteAll(token, 'api::tech-category.tech-category');
  await createMany(token, 'api::tech-category.tech-category', techCategories);

  await deleteAll(token, 'api::industry.industry');
  await createMany(token, 'api::industry.industry', industries);

  await deleteAll(token, 'api::process-step.process-step');
  await createMany(token, 'api::process-step.process-step', processSteps);

  await deleteAll(token, 'api::testimonial.testimonial');
  await createMany(token, 'api::testimonial.testimonial', testimonials);

  await deleteAll(token, 'api::team-member.team-member');
  await createMany(token, 'api::team-member.team-member', teamMembers);

  await deleteAll(token, 'api::case-study.case-study');
  await createMany(token, 'api::case-study.case-study', caseStudies);

  console.log('\n✅ All content seeded successfully!\n');
}

seed().catch(console.error);

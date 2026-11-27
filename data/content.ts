// All site content lives here. Edit this file to update the portfolio.
const base = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export const profile = {
  name: "Md. Monowarul Amin",
  tagline: "Operating Systems and Systems Security",
  portrait: "/profile.jpg" as string | null, // e.g. "/profile.jpg" (put the file in /public)
  cv: "/cv.pdf", // put your CV PDF at /public/cv.pdf
  affiliations: [
    "Junior Software Engineer, US-Bangla Airlines.",
    "BSc in Software Engineering, Islamic University of Technology, Gazipur",
  ],
  location: "Dhaka, Bangladesh",
  email: "monowarul@iut-dhaka.edu",
  links: [
    { label: "Email", href: "mailto:monowarul@iut-dhaka.edu" },
    { label: "GitHub", href: "https://github.com/Md-Monowarul-Amin" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/md-monowarul-amin-a673a0203/" },
    { label: "Blog", href: "https://dev.to/md_monowarulamin200042" },
    { label: "CV", href: "/cv.pdf" },
  ],
  bio: [
    "Md. Monowarul Amin is a Junior Software Engineer at US-Bangla Airlines. He received his BSc in Software Engineering from the Islamic University of Technology (IUT), Gazipur in 2025.",
    "His research interests lie in operating systems, memory safety, and secure OS kernel development. His undergraduate thesis, supervised by [Dr. Muhammad Mahbub Alam](https://cse.iutoic-dhaka.edu/profile/mahbub/education), proposed an allocator-level defense against use-after-free exploitation in glibc.",
  ],
  interests: ["Operating Systems", "Memory Safety", "Secure OS Kernel Development"],
};

export const research = {
  title: "Mitigating Use-After-Free Exploitation in glibc via Trie-Based tcache Forward Pointer Validation",
  period: "January 2024 – September 2025",
  context: "Undergraduate thesis · Networking Lab, Dept. of CSE, IUT",
  supervisor: "Dr. Muhammad Mahbub Alam, Professor, Dept. of CSE, IUT",
  repo: "https://github.com/Md-Monowarul-Amin/Glbc-Modified",
  keywords: ["Memory safety", "Heap security", "tcache poisoning", "Use-after-free", "glibc", "Trie"],
  summary:
    "A software-only, allocator-level defense against use-after-free (UAF) and tcache poisoning in GNU libc (ptmalloc) that needs no hardware extensions, kernel modifications, or compiler instrumentation.",
  points: [
    "Designed the defense: every tcache free-list pointer is recorded in a trie on free() and validated on malloc(); an unrecognized or corrupted forward pointer aborts immediately.",
    "Implemented a lightweight trie with a custom slab allocator inside glibc 2.41, avoiding recursive allocation and remaining thread-safe under concurrent heap access.",
    "Evaluated with micro-benchmarks (LMBench) and macro-benchmarks (Phoronix Test Suite) to assess impact on memory operations and system-level workloads.",
    "Conducted as a three-member team and documented as a full research paper manuscript.",
  ],
};

export const experience = [
  {
    role: "Junior Software Engineer",
    org: "US-Bangla Airlines",
    href: "https://usbair.com/",
    period: "Oct 2025 – Present",
    place: "Dhaka, Bangladesh",
    stack: "Java, PostgreSQL, Redis, Elasticsearch, RabbitMQ, H3",
    groups: [
      {
        title: "Airline Engineering Management System",
        points: [
          "Contributed to developing CAMO (Continuing Airworthiness Management) functionalities for aircraft maintenance planning and maintenance tracking.",
          "Developed Identity and Access Management (IAM) functionalities, including multi-device login support, access configuration, and user authorization management.",
        ],
      },
      {
        title: "Ride-Share Platform",
        points: [
          "Used Uber’s H3 geospatial indexing to partition the service area into multi-level geofences for efficient spatial queries.",
          "Implemented an event-driven driver search pipeline to identify nearby drivers for real-time pickup requests.",
          "Developed “bird’s-eye view”, a real-time monitoring system for users and drivers using geospatial algorithms.",
          "Designed a multi-resolution H3 storage strategy that reduced PostgreSQL storage usage by approximately 90%.",
        ],
      },
    ],
  },
  {
    role: "AI/ML Intern",
    org: "Orange Business Development",
    href: "https://orangebd.com/",
    period: "Jun 2024 – Sep 2024",
    place: "Dhaka, Bangladesh",
    stack: "",
    groups: [
      {
        title: "",
        points: [
          "Developed a Retrieval-Augmented Generation (RAG) chatbot for the National Curriculum portal.",
          "Contributed to an AI-based search tool using sentence embeddings, word expansion, and a spell corrector.",
        ],
      },
    ],
  },
];

export const projects = [
  {
    name: "mCertikOS: An Operating System Kernel",
    period: "Aug – Dec 2024",
    stack: "CertiKOS template, gdb",
    href: "https://github.com/Md-Monowarul-Amin/mcertikOs_Solve",
    text: "Implemented core OS components from scratch following Yale’s CS422/522: physical and virtual memory management, process/thread management, interrupt handling, and the system call interface.",
  },
  {
    name: "CCTV Video Compression for Smart Surveillance",
    period: "Aug 2024 – Jan 2025",
    stack: "YOLO11, Python, OpenCV",
    href: "https://github.com/Md-Monowarul-Amin/CCTV-Video-Compression-for-Smart-Surveillance",
    text: "A surveillance system that detects entry and exit events with YOLO11 and keeps only relevant frames, significantly reducing video storage and letting users review key moments quickly.",
  },
];

export const writing = [
  { title: "Exploiting Use-After-Free: A Step-by-Step Attack Walkthrough", date: "Jun 2025", href: "https://dev.to/md_monowarulamin200042/exploiting-use-after-free-a-step-by-step-attack-walkthrough-pma" },
  { title: "Glibc Heap Overview", date: "Jan 2025", href: "https://dev.to/md_monowarulamin200042/glibc-heap-overview-487m" },
  { title: "Stack and Buffer Overflow", date: "Nov 2024", href: "https://dev.to/md_monowarulamin200042/stack-and-buffer-overflow-3m5n" },
];

export const teaching = [
  { role: "Teaching Assistant, Operating Systems Lab", org: "CSE Dept., IUT", period: "Oct 2024 – Jan 2025", text: "Prepared lecture notes and code templates for 50+ undergraduates; developed solutions with detailed explanations for each lab task." },
  { role: "Python Instructor, Research-Driven Python and ML Basics", org: "IUT Al Biruni Society of Scientific Studies", period: "Apr – May 2025", text: "Taught Python fundamentals, OOP, and data visualization with matplotlib and pandas." },
];

export const education = [
  { degree: "BSc in Software Engineering", school: "Islamic University of Technology, Gazipur", period: "Jul 2021 – Sep 2025", note: "CGPA 3.05 / 4.00" },
  { degree: "Higher Secondary Certificate (HSC)", school: "Notre Dame College, Dhaka", period: "Jun 2018 – Jun 2020", note: "GPA 5.00 / 5.00" },
];

export const skills = [
  { group: "Languages", items: "C, Python, Java" },
  { group: "Systems & Security", items: "Linux, GDB, Ghidra, x86 Assembly, Pwntools" },
  { group: "Frameworks", items: "Spring Boot, FastAPI" },
  { group: "Databases", items: "PostgreSQL, MySQL, Elasticsearch" },
  { group: "Research Tools", items: "LaTeX, Git" },
];

export const service = [
  "Former Vice-President, Al Biruni Research and Innovation Society, IUT (Aug 2024 – Sep 2025)",
  "Former Event Management Executive, IUT Debating Society (Jul 2023 – Jun 2024)",
  "CS50’s Introduction to Artificial Intelligence (Jul 2023)"
];

export const references = [
  { name: "Dr. Muhammad Mahbub Alam", detail: "Professor, Dept. of CSE, Islamic University of Technology", email: "mma@iut-dhaka.edu" },
  { name: "S. M. Sabit Bananee", detail: "Lecturer, Dept. of CSE, Islamic University of Technology", email: "smsabitbananee@iut-dhaka.edu" },
];

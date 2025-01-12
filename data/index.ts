export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Testimonials", link: "#testimonials" },
  { name: "Contact", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title:
      "Hey, I'm Yash! A tech enthusiast and problem solver from Pune, India.",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName:
      "w-35% h-85% absolute right-0 bottom-0 object-contain object-center",
    titleClassName:
      "text-sm md:text-base lg:text-lg font-semibold text-[#E3E4E8] font-['Poppins', sans-serif] leading-relaxed tracking-wide justify-end",
    img: "/dp.png",
    spareImg: "",
  },
  {
    id: 2,
    title: "I'm very flexible with time zone communications",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "My tech stack",
    description: "I constantly try to improve",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Tech enthusiast with a passion for development.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },

  {
    id: 5,
    title: "Currently building Logistics Compilance Dashboard",
    description: "The Inside Scoop",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Do you want to start a project together?",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const projects = [
  {
    id: 1,
    title: "Find Your Guide",
    des: "Explore the wonders of our solar system with this captivating 3D simulation of the planets using Three.js.",
    img: "/FYG.png",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/fm.svg"],
    link: "https://findguide.vercel.app/",
  },
  {
    id: 2,
    title: "GreenGridIn",
    des: "Simplify your video conferencing experience with Yoom. Seamlessly connect with colleagues and friends.",
    img: "/GGI.png",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/stream.svg", "/c.svg"],
    link: "https://greengridin.vercel.app/",
  },
  {
    id: 3,
    title: "BoatHead",
    des: "A REAL Software-as-a-Service app with AI features and a payments and credits system using the latest tech stack.",
    img: "/BH.png",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/c.svg"],
    link: "https://boathead.netlify.app/",
  },
  {
    id: 4,
    title: "Billify",
    des: "Recreated the Apple iPhone 15 Pro website, combining GSAP animations and Three.js 3D effects..",
    img: "/Billify.png",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/three.svg", "/gsap.svg"],
    link: "https://billify-nu.vercel.app/",
  },
];

export const testimonials = [
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
];

export const companies = [
  {
    id: 1,
    name: "cloudinary",
    img: "/cloud.svg",
    nameImg: "/cloudName.svg",
  },
  {
    id: 2,
    name: "appwrite",
    img: "/app.svg",
    nameImg: "/appName.svg",
  },
  {
    id: 3,
    name: "HOSTINGER",
    img: "/host.svg",
    nameImg: "/hostName.svg",
  },
  {
    id: 4,
    name: "stream",
    img: "/s.svg",
    nameImg: "/streamName.svg",
  },
  {
    id: 5,
    name: "docker.",
    img: "/dock.svg",
    nameImg: "/dockerName.svg",
  },
];

export const workExperience = [
  {
    id: 1,
    title: "Product Development Intern -",
    company: "Proacure",
    desc: `
    • Developed a scalable and multi-threaded backend using FastAPI and Python, integrated with a PostgreSQL database through SQLAlchemy for efficient data management.\n  
    • Collaborated with cross-functional teams to design and develop a responsive React.js frontend, leveraging Tailwind CSS to enhance performance and streamline development workflows.\n    
    • Integrated OpenAI’s GPT-4.0-mini into the backend to parse unstructured documents and collaborated on developing a Retrieval-Augmented Generation (RAG) model using PostgreSQL.\n  
    • Designed and executed test cases, deploying the application on an ASGI server hosted on AWS EC2 to ensure scalability and reliability.\n  
    • Integrated QuickBooks Online to record invoices and bill payments for seamless financial management.\n  
    
    Tech Stack: React.js, Python, FastAPI, PostgreSQL, Tailwind CSS, OpenAI GPT-4, AWS EC2.
  `,
    className: "md:col-span-2",
    thumbnail:
      "https://media.licdn.com/dms/image/v2/C560BAQHMKKhkDMe4_g/company-logo_200_200/company-logo_200_200/0/1630659910229/proacure_corp_logo?e=1744848000&v=beta&t=tK7o7lCTrORNTmTXJtCywjREJT0XGSWh_KbmPd4cHjQ",
  },
  {
    id: 2,
    title: "Research Intern -",
    company: "Meritshot",
    desc: `• Conducted in-depth research and analysis on data science applications in business, producing actionable insights that informed content development and strategic decision-making.\n • Collaborated and executed exploratory data analysis (EDA) workflows using Python to identify patterns and trends, contributing to data-driven strategies.`,
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail:
      "https://media.licdn.com/dms/image/v2/C4D0BAQEXia6YgEtYDA/company-logo_200_200/company-logo_200_200/0/1679546762372/meritshot_logo?e=1744848000&v=beta&t=dysPzbuB0ETXtqGMV_k3YC1EnSDV_xn_W4eekb8SiVQ",
  },
];

export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
    link: "https://github.com/yashdargude",
  },
  {
    id: 2,
    img: "/twit.svg",
  },
  {
    id: 3,
    img: "/link.svg",
    link: "https://www.linkedin.com/in/yash-dargude-326a9622a/",
  },
];

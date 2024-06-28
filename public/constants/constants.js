import home from "../assets/icons/home.png";
import about from "../assets/icons/about.png";
import projects from "../assets/icons/projects.png";
import github from "../assets/icons/GitHub.png";
import linkedin from "../assets/icons/LinkedIn.png";
import instagram from "../assets/icons/Instagram.png";
import brainwave from "../assets/icons/brainwave.png";
import apple from "../assets/icons/apple.png";
import securely from "../assets/icons/securely.png";
import razerIcon from "../assets/icons/razer.png";
import wegoIcon from "../assets/icons/wego.png";
import tamembersIcon from "../assets/icons/tamembers.png";
import tamimDev from "../favicon-32x32.png";
import appleMockup from "../assets/images/apple-mockup.png";
import brainwaveMockup from "../assets/images/Brainwave-Mockup.png";
import securelyMockup from "../assets/images/securely-mockup.png";
import mimflixMockup from "../assets/images/mimflix-mockup.png";
import wegoMockup from "../assets/images/wego-mockup.png";
import nftsMockup from "../assets/images/nftsfeo-mockup.png";
import razerMockup from "../assets/images/razer-mockup.png";
import tamembersMockup from "../assets/images/tamembers-mockup.png";
import tamimDevMockup from "../assets/images/portfolio-mockup.png";

export const loaderText = [
  "Elegant",
  "Sleek",
  "Aesthetic",
  "Modern",
  "Creative",
  "Artistic",
  "Simple",
  "Minimalistic",
  "Award-winning",
  "Elegant",
  "Sleek",
  "Aesthetic",
  "Modern",
  "Creative",
  "Artistic",
  "Simple",
  "Minimalistic",
  "Award-winning",
  "Elegant",
  "Sleek",
  "Aesthetic",
  "Modern",
  "Creative",
  "Artistic",
  "Simple",
  "Minimalistic",
  "Award-winning",
  "Elegant",
  "Sleek",
  "Aesthetic",
  "Modern",
  "Creative",
  "Artistic",
  "Simple",
  "Minimalistic",
  "Award-winning",
  "Elegant",
  "Sleek",
  "Aesthetic",
  "Modern",
  "Creative",
  "Artistic",
  "Simple",
  "Minimalistic",
  "Award-winning",
];

export const menuItems = [
  {
    icon: home,
    title: "Home",
    url: "/",
  },
  {
    icon: about,
    title: "About",
    url: "/about",
  },
  {
    icon: projects,
    title: "Projects",
    url: "/projects",
  },
];

export const socials = [
  {
    icon: linkedin,
    title: "Linkedin",
    url: "https://www.linkedin.com/in/tamim-rizvi/",
  },
  {
    icon: github,
    title: "Github",
    url: "https://github.com/tamimthememe",
  },
  {
    icon: instagram,
    title: "Instagram",
    url: "https://www.instagram.com/tamimdameme/",
  },
];

export const heroShortcuts = [
  {
    hook: "Get to see modern and aesthetic websites on this portfolio.",
    desc: "Click here to teleport to the projects page.",
    url: "/projects",
  },
  {
    hook: "Don’t Know me ?",
    desc: "Get to know about me and my life journey in the about page.",
    url: "/about",
  },
  {
    hook: "Wondering how I made this portfolio website?",
    desc: "Check Out the source Code of this Website here",
    url: "/",
  },
];

export const work = [
  {
    category: "Live Site",
    name: "tamim.dev() : This Website",
    sub: "Portfolio - My corner of the internet",
    icon: tamimDev,
    date: "June 2024",
    width: 35,
    tech: ["HTML", "Tailwind CSS", "React", "GSAP", "Vercel"],
    mockup: tamimDevMockup,
    background: "../assets/images/gradients/gray-gradient.png",
    url: "https://brainwave-seven-murex.vercel.app/",
  },
  {
    category: "Live Site",
    name: "Brainwave : Coding Project ",
    sub: "Landing Page for an AI-based Company called Brainwave with Animations",
    icon: brainwave,
    date: "June 2024",
    width: 35,
    tech: ["HTML", "Tailwind CSS", "React", "GSAP"],
    mockup: brainwaveMockup,
    background: "../assets/images/gradients/purple-gradient.png",
    url: "https://brainwave-seven-murex.vercel.app/",
  },
  {
    category: "Live Site",
    name: "Apple Website",
    sub: "Clone of the Apple Website with 3D models and Videos.",
    icon: apple,
    width: 28,
    date: "June 2024",
    tech: ["HTML", "Tailwind CSS", "React", "GSAP", "Three.js", "Sentry"],
    mockup: appleMockup,
    background: "../assets/images/gradients/gray-gradient.png",
    url: "https://apple-website-one-rose.vercel.app/",
  },
  {
    category: "Live Site",
    name: "Securely Innovations Website",
    sub: "Animated and Modern Website Implementation for a Private Tech Agency.",
    width: 45,
    icon: securely,
    date: "May 2024",
    tech: ["HTML", "CSS", "React", "Framer Motion", "Email.js"],
    mockup: securelyMockup,
    background: "../assets/images/gradients/gray-gradient.png",
  },
  {
    category: "Design",
    name: "Securely Innovations Design",
    sub: "Animated and Modern Website Design for a Private Tech Agency.",
    width: 45,
    icon: securely,
    date: "May 2024",
    tech: ["Figma"],
    mockup: securelyMockup,
    background: "../assets/images/gradients/gray-gradient.png",
  },
  {
    category: "Website",
    name: "Mimflix",
    sub: "Clone of Netflix Website with API realtime data",
    width: 45,
    date: "January 2024",
    tech: ["HTML", "CSS", "React", "Framer Motion", "API"],
    mockup: mimflixMockup,
    background: "../assets/images/gradients/red-gradient.png",
  },
  {
    category: "Design",
    name: "WeGo App Design",
    sub: "UI/UX design for travel and transportation mobile app",
    width: 45,
    icon: wegoIcon,
    date: "November 2023",
    tech: ["Figma"],
    device: "mobile",
    mockup: wegoMockup,
    background: "../assets/images/gradients/green-gradient.png",
  },
  {
    category: "Website",
    name: "NftsFeo",
    sub: "Landing Page Website for Selling and Buying NFTs",
    width: 45,
    date: "October 2023",
    tech: ["HTML", "CSS", "React", "Framer Motion"],
    mockup: nftsMockup,
    background: "../assets/images/gradients/purple-gradient.png",
  },
  {
    category: "Design",
    name: "Razer Landing Page Design",
    sub: "UI/UX Web Design for Razer x Lamborghini Laptop",
    width: 45,
    icon: razerIcon,
    date: "October 2023",
    tech: ["Figma"],
    mockup: razerMockup,
    background: "../assets/images/gradients/orange-gradient.png",
  },
  {
    category: "Design",
    name: "Tamembers App Design",
    sub: "UI/UX design for membership management mobile app",
    width: 45,
    icon: tamembersIcon,
    date: "November 2023",
    tech: ["Figma"],
    device: "mobile",
    mockup: tamembersMockup,
    background: "../assets/images/gradients/purple-gradient.png",
  },
];

import {
  HeartPulse,
  ConciergeBell,
  GraduationCap,
  HardHat,
  ShoppingCart,
  Server,
  type LucideIcon,
} from "lucide-react";

export type Sector = {
  slug: string;
  icon: LucideIcon;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
};

export const SECTORS: Sector[] = [
  {
    slug: "healthcare",
    icon: HeartPulse,
    title: "Healthcare",
    description:
      "AB Technologies delivers specialist network infrastructure for healthcare environments where reliability, safety and minimal disruption are essential. We support hospitals, clinics, care settings and specialist facilities with structured cabling, WiFi, bedside TV, CCTV, cellular and connected infrastructure, all planned carefully around live clinical operations. From survey and design through to installation, testing and handover, we focus on clean delivery, strong communication and dependable systems that support staff, patients and day-to-day healthcare services.",
    image:
      "https://images.pexels.com/photos/6010873/pexels-photo-6010873.jpeg?auto=compress&cs=tinysrgb&w=1200",
    imageAlt: "Doctor reviewing information on a digital screen in a clinical setting",
  },
  {
    slug: "hospitality",
    icon: ConciergeBell,
    title: "Hospitality",
    description:
      "Hospitality environments rely on connectivity that supports guest experience, operational continuity and presentation all at once.  works across hotels, leisure venues, serviced accommodation, restaurants and event spaces, delivering structured cabling, WiFi, CCTV, bedside TV, AV and connected infrastructure with minimal disruption to live trading environments. Through careful planning, installation, testing and handover, we provide dependable systems that support guests, staff and back-of-house operations, helping hospitality spaces stay connected, responsive and ready for day-to-day service.",
    image:
      "https://images.pexels.com/photos/3770110/pexels-photo-3770110.jpeg?auto=compress&cs=tinysrgb&w=1200",
    imageAlt: "Hotel staff member assisting a guest",
  },
  {
    slug: "education",
    icon: GraduationCap,
    title: "Education",
    description:
      "Education environments need reliable infrastructure, strong wireless coverage and the flexibility to support changing teaching demands. AB Technologies supports schools, colleges, universities and specialist learning spaces with structured cabling, WiFi, CCTV, AV, network hardware and connected infrastructure serving classrooms, shared spaces, administration areas and wider campus operations. Through planning, survey, installation, testing and handover, we deliver practical systems that support staff, students and teaching technology, helping education sites stay connected, organised and ready for modern learning.",
    image:
      "https://images.pexels.com/photos/12197311/pexels-photo-12197311.jpeg?auto=compress&cs=tinysrgb&w=1200",
    imageAlt: "Students using computers together in a modern classroom",
  },
  {
    slug: "commercial-industrial",
    icon: HardHat,
    title: "Commercial & Industrial",
    description:
      "Commercial and industrial sites demand infrastructure that is safe, well-coordinated and dependable under real operational pressure. AB Technologies works across offices, warehouses, workshops, production spaces, plant environments and mixed use commercial sites, installing structured cabling, WiFi, CCTV, network hardware and connected infrastructure around active operations and site constraints. Our approach combines organised delivery, thorough testing and strong health and safety standards, giving clients reliable systems that support staff, operations and future growth, backed by a CHAS certified commitment to safe working.",
    image:
      "https://images.pexels.com/photos/28196526/pexels-photo-28196526.jpeg?auto=compress&cs=tinysrgb&w=1200",
    imageAlt: "Construction worker in safety gear holding a hard hat on an industrial site",
  },
  {
    slug: "retail",
    icon: ShoppingCart,
    title: "Retail",
    description:
      "In retail, uptime, responsiveness and customer experience have a direct effect on day-to-day trading. AB TechnologiesAB Technologies supports shops, retail parks, showrooms, supermarkets and customer facing spaces with structured cabling, WiFi, CCTV, network hardware and connected infrastructure powering POS systems, tills, PCDs, smart scales, ESL (electronic shelf labels), IoT devices and wider in-store technology. From planning and installation through to testing and handover, we deliver dependable systems that support staff, stock control and the customer journey, helping retail environments stay connected, efficient and ready for trade.",
    image:
      "https://images.pexels.com/photos/4484151/pexels-photo-4484151.jpeg?auto=compress&cs=tinysrgb&w=1200",
    imageAlt: "Worker using a handheld scanner and tablet to check stock",
  },
  {
    slug: "it-data-centres",
    icon: Server,
    title: "IT & Data Centres",
    description:
      "IT rooms, comms spaces and data centre environments demand precision, resilience and consistently high performance. AB Technologies supports server rooms, enterprise IT spaces, edge locations and data centre facilities with structured cabling, pre-terminated copper and fibre solutions, network hardware and connected infrastructure built for clean routing, clear labelling and dependable long-term use. From CAT7 and CAT8 copper through to fibre optic systems including OM3, OM4, OM5 and OS2, we install, test and hand over deployment environments that support live operations, future scalability and high-performance connectivity.",
    image:
      "https://images.pexels.com/photos/17323801/pexels-photo-17323801.jpeg?auto=compress&cs=tinysrgb&w=1200",
    imageAlt: "Modern server room with illuminated network racks",
  },
];

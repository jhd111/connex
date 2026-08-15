import {
  Cable,
  Wifi,
  RadioTower,
  Camera,
  Satellite,
  Building2,
  MonitorPlay,
  Sparkles,
  type LucideIcon,
} from "lucide-react";

export type Service = {
  slug: string;
  icon: LucideIcon;
  title: string;
  description: string;
  detail: string;
  image: string;
  imageAlt: string;
  leftPoints: string[];
  rightPoints: string[];
  tags: string[];
};

export const SERVICES: Service[] = [
  {
    slug: "data-cabling-structured-cabling",
    icon: Cable,
    title: "Data Cabling & Structured Cabling",
    description:
      "Installation, expansion and remediation of copper and fibre cabling systems for commercial, industrial, hospitality, healthcare and specialist environments.",
    detail:
      "Installation, expansion and remediation of copper and fibre cabling systems for commercial, industrial, hospitality, healthcare and specialist environments.",
    image:
      "https://images.pexels.com/photos/4716292/pexels-photo-4716292.jpeg?auto=compress&cs=tinysrgb&w=1200",
    imageAlt:
      "Blue structured cabling connected to a patch panel in a data centre",
    leftPoints: [
      "Cat5e, Cat6, CAT6A, CAT7 and fibre optic cabling",
      "Testing, labelling, certification and hardware packs",
      "Fibre optic types OS1, OS2, OM1, OM2, OM3, OM4 and OM5",
      "Fibre certification testing using OTDR and Fluke DSX OLTS",
    ],
    rightPoints: [
      "Containment, cabinet work and patching infrastructure",
      "New builds, extensions, refurbishment and fit-out",
      "Copper certification testing using Fluke DSX series",
      "End-to-end structured cabling installed in all environments",
    ],
    tags: [
      "Copper & fibre",
      "Installation & upgrades",
      "Testing & certification",
      "10 year systems warranty",
      "Panel Partner",
      "Fluke DSX certification",
    ],
  },

  {
    slug: "wifi-surveys-wlan-design",
    icon: Wifi,
    title: "WiFi Surveys / WLAN Design",
    description:
      "Survey-led wireless design, deployment and optimisation for reliable coverage, capacity and user experience across demanding sites.",
    detail:
      "Survey-led wireless design, deployment and optimisation for reliable coverage, capacity and user experience across demanding sites.",
    image:
      "https://images.pexels.com/photos/6615095/pexels-photo-6615095.jpeg?auto=compress&cs=tinysrgb&w=1200",
    imageAlt:
      "Hand reviewing architectural and network plans on a desk",
    leftPoints: [
      "Site surveys and predictive planning",
      "Coverage, roaming and interference troubleshooting",
      "Ekahau AI Pro and Ekahau Sidekick 2",
      "Surveying in all sectors and complex environments",
    ],
    rightPoints: [
      "Access point placement and performance tuning",
      "Installation and post-deployment optimisation",
      "All WiFi hardware manufacturers installed",
      "Installation following clients' designs",
    ],
    tags: [
      "Survey led design",
      "Deployment & optimisation",
      "Troubleshooting",
      "Ekahau AI Pro survey",
    ],
  },

  {
    slug: "cellular",
    icon: RadioTower,
    title: "Cellular",
    description:
      "In-building cellular support and coverage improvement work where mobile signal reliability matters to staff, guests or operational teams.",
    detail:
      "In-building cellular support and coverage improvement work where mobile signal reliability matters to staff, guests or operational teams.",
    image:
      "https://images.pexels.com/photos/32489862/pexels-photo-32489862.jpeg?auto=compress&cs=tinysrgb&w=1200",
    imageAlt:
      "Communication tower rising above a green forest",
    leftPoints: [
      "Coverage assessment and weak signal investigation",
      "Coordination with wider network and building systems",
      "4G/5G site survey and detailed reports",
      "5G SA and NSA network testing",
    ],
    rightPoints: [
      "Infrastructure support for better in-building service",
      "Remedial works and practical deployment support",
      "Femtocell configuration and deployment",
      "Large environment 4G/5G booster installations",
    ],
    tags: [
      "Signal support",
      "Building assessments",
      "Remedial works",
      "Site surveys",
      "Boosters",
      "WAN backup",
    ],
  },

  {
    slug: "cctv-infrastructure-installation",
    icon: Camera,
    title: "CCTV Infrastructure Installation",
    description:
      "CCTV infrastructure planning, cabling, installation support and corrective work as part of wider network and security deployments.",
    detail:
      "CCTV infrastructure planning, cabling, installation support and corrective work as part of wider network and security deployments.",
    image:
      "https://images.pexels.com/photos/5966513/pexels-photo-5966513.jpeg?auto=compress&cs=tinysrgb&w=1200",
    imageAlt:
      "Technician installing a surveillance camera",
    leftPoints: [
      "Camera infrastructure and network connectivity",
      "Upgrade paths for existing estates",
      "Large choice of camera manufacturers installed",
      "Low-light cameras with day/night image technology",
    ],
    rightPoints: [
      "Power, containment and back-end hardware support",
      "Fault-finding and remediation",
      "Protect property and personnel in all environments",
      "Full range of digital video recorders installed (NVR)",
    ],
    tags: [
      "Security infrastructure",
      "Network connected systems",
      "Install & remediate",
      "Axis",
      "Hikvision",
      "Uniview",
      "Pavilion",
      "Motorola",
    ],
  },

  {
    slug: "starlink-satellite-dtt",
    icon: Satellite,
    title: "Starlink, Satellite & DTT",
    description:
      "Survey, design, supply, installation, configuration and corrective work for Starlink, satellite dish and digital terrestrial antenna infrastructure.",
    detail:
      "Survey, design, supply, installation, configuration and corrective work for Starlink, satellite dish and digital terrestrial antenna infrastructure.",
    image:
      "https://images.pexels.com/photos/7633266/pexels-photo-7633266.jpeg?auto=compress&cs=tinysrgb&w=1200",
    imageAlt:
      "Satellite dish mounted on a rooftop",
    leftPoints: [
      "Site checks, mounting considerations and mapping",
      "Satellite dish and DTT aerial installation and correction",
      "Digital terrestrial aerial installation",
      "Fibre optic transceiver installation",
    ],
    rightPoints: [
      "Starlink installation, configuration and live service checks",
      "Coastal cabling installation where required",
      "Large satellite dish installation",
      "Full installation and configuration service",
    ],
    tags: [
      "Remote connectivity",
      "Starlink & DTT systems",
      "Install, configure & correct",
      "Satellite dish install",
      "Aerial install",
      "Starlink",
    ],
  },

  {
    slug: "bms-building-control",
    icon: Building2,
    title: "BMS & Building Control",
    description:
      "Network and connectivity support for building management and control systems where visibility, integration and serviceability matter.",
    detail:
      "Network and connectivity support for building management and control systems where visibility, integration and serviceability matter.",
    image:
      "https://images.pexels.com/photos/28950842/pexels-photo-28950842.jpeg?auto=compress&cs=tinysrgb&w=1200",
    imageAlt:
      "Organised circuit breaker panel with colour-coded wiring",
    leftPoints: [
      "Connectivity for BMS and building control hardware",
      "Upgrade and extension works",
      "Fire safety and sprinkler oversight monitoring",
      "Hot water and central heating monitoring",
    ],
    rightPoints: [
      "Infrastructure support across plant and comms spaces",
      "Practical fault correction and on-site support",
      "HVAC management and monitoring",
      "Lighting control and electrical consumption tracking",
      "Working with BMS installation and supplier partners",
    ],
    tags: [
      "Building systems",
      "Infrastructure support",
      "Fault correction",
      "Lighting automation",
      "Monitoring",
    ],
  },

  {
    slug: "av-monitors-tvs-projectors",
    icon: MonitorPlay,
    title: "AV Monitors, TVs & Projectors",
    description:
      "Display and projection infrastructure support covering supply, installation, correction and maintenance activity.",
    detail:
      "Display and projection infrastructure support covering supply, installation, correction and maintenance activity.",
    image:
      "https://images.pexels.com/photos/542993/pexels-photo-542993.jpeg?auto=compress&cs=tinysrgb&w=1200",
    imageAlt:
      "Wall mount bracket being installed for a television",
    leftPoints: [
      "Display positioning and installation support",
      "Commercial and specialist environment deployments",
      "Installation of TVs into healthcare and hospitality",
      "Careful planning and structured installation approach",
    ],
    rightPoints: [
      "Associated cabling and network connectivity",
      "Correction, replacement and maintenance support",
      "Bespoke bracket TVs within live hospitals",
      "Large TVs and monitors installed into complex environments",
    ],
    tags: [
      "AV infrastructure",
      "Installation support",
      "Maintenance",
      "Bedside TV",
      "Hospitality TVs",
    ],
  },

  {
    slug: "ai-assisted-delivery",
    icon: Sparkles,
    title: "AI-Assisted Delivery",
    description:
      "Use of AI-assisted workflows to improve planning, consistency and speed across selected survey, design, supply and maintenance tasks.",
    detail:
      "Use of AI-assisted workflows to improve planning, consistency and speed across selected survey, design, supply and maintenance tasks.",
    image:
      "https://images.pexels.com/photos/8386437/pexels-photo-8386437.jpeg?auto=compress&cs=tinysrgb&w=1200",
    imageAlt:
      "Futuristic robotic hand touching a glowing digital network",
    leftPoints: [
      "Sharper documentation and defined workflow",
      "Better consistency across repeatable tasks",
    ],
    rightPoints: [
      "Faster turnaround and delivery speed",
      "Practical support to engineering delivery, not fluff",
    ],
    tags: [
      "Process improvement",
      "Delivery speed",
      "Real-world application",
      "Configuration automation",
      "AI support",
    ],
  },
];
import commersalimage123 from '../assets/useCase/commersial/image123.png';
import commersalimage207 from '../assets/useCase/commersial/image207.png';
import commersalimage208 from '../assets/useCase/commersial/image208.png';
import commersalimage209 from '../assets/useCase/commersial/image209.png';

import constructionImg231 from '../assets/useCase/construction/image231.png';
import constructionImg232 from '../assets/useCase/construction/image232.png';
import constructionImg233 from '../assets/useCase/construction/image233.png';
import constructionImg237 from '../assets/useCase/construction/image237.png';

import healthcareImg216 from '../assets/useCase/healthCare/image216.png';
import healthcareImg217 from '../assets/useCase/healthCare/image217.png';
import healthcareImg218 from '../assets/useCase/healthCare/image218.png';
import healthcareImg219 from '../assets/useCase/healthCare/image220.png';

import manufacturingImg222 from '../assets/useCase/manufacturing/image222.png';
import manufacturingImg223 from '../assets/useCase/manufacturing/image223.png';
import manufacturingImg224 from '../assets/useCase/manufacturing/image224.png';
import manufacturingImg225 from '../assets/useCase/manufacturing/image225.png';

import smartCityImg211 from '../assets/useCase/smartCities/image211.png';
import smartCityImg212 from '../assets/useCase/smartCities/image212.png';
import smartCityImg213 from '../assets/useCase/smartCities/image213.png';
import smartCityImg214 from '../assets/useCase/smartCities/image214.png';

import warehouseImg226 from '../assets/useCase/warehouse/image226.png';
import warehouseImg228 from '../assets/useCase/warehouse/image228.png';
import warehouseImg229 from '../assets/useCase/warehouse/image229.png';

import manufacturing from  '../assets/useCase/front/manufacturing.png';
import construction from  '../assets/useCase/front/construction.png'; 
import healthcare from  '../assets/useCase/front/healthcare.png';
import smartCity from  '../assets/useCase/front/smartcities.png';
import commercial from  '../assets/useCase/front/commercial.png';
import warehouse from  '../assets/useCase/front/warehouse.png';



export const useCasesMain = [
  { id: 1, title: "Manufacturing", image: manufacturing },
  { id: 2, title: "Construction", image: construction },
  { id: 3, title: "Healthcare", image: healthcare },
  { id: 4, title: "Smart Cities", image: smartCity },
  { id: 5, title: "Commercial", image: commercial },
  { id: 6, title: "Warehouses & Logistics", image: warehouse }
]



export const useCasesDetails = [
  {
    id: 1,
    title: "Aksha In Manufacturing",
    description:
      "In manufacturing environments, safety, compliance, and operational visibility are essential. Aksha uses AI-powered video intelligence to monitor PPE usage, fire risks, and restricted access. It helps managers detect unsafe behavior, unauthorized movement, and crowding in real-time. No need to manually scan every zone, Aksha watches it all for you. Stay alert, prevent accidents, and improve overall plant efficiency.",
    features: [
      {
        id: 1,
        title: "Helmet & Safety Compliance",
        description:
          "Detects if workers miss wearing helmets or PPE on the shop floor, reducing accident risks and ensuring compliance.",
        image: manufacturingImg222,
        color: "#f86f6f",
      },
      {
        id: 2,
        title: "Fire, Smoke & Water Leak Detection",
        description:
          "Instantly alerts for fire, smoke, or water leaks in production zones, preventing hazards before they escalate.",
        image: manufacturingImg223,
        color: "#6ff8b1",
      },
      {
        id: 3,
        title: "Access Control & Intrusion Alerts",
        description:
          "Monitors gates, perimeter breaches, and off-hour entries, protecting restricted areas and sensitive operations.",
        image: manufacturingImg224,
        color: "#0c8ce9",
      },
      {
        id: 4,
        title: "Camera Health & Crowd Monitoring",
        description:
          "Ensures all cameras stay active and detects crowd build-ups, supporting smooth operations and real-time awareness.",
        image: manufacturingImg225,
        color: "#f8e66f",
      },
    ],
  },
  {
    id: 2,
    title: "Aksha In Construction",
    description:
      "Construction sites change daily and come with constant safety risks. Aksha monitors helmet use, scaffolding zones, and fire-prone areas in real time. It spots unauthorized access, gate misuse, and hazardous crowding. Supervisors get instant alerts before minor issues escalate. Aksha helps enforce safety even when you're not on site.",
    features: [
      {
        id: 1,
        title: "No Helmet or Vest Detection",
        description:
          "Instantly alerts when workers enter active zones without safety gear, helping prevent injuries and maintain compliance.",
        image: constructionImg231,
        color: "#f86f6f",
      },
      {
        id: 2,
        title: "No Person Alert in Critical Zones",
        description:
          "Triggers an alert when no personnel are detected in areas that require active supervision (e.g., during crane ops or machinery use), helping avoid",
        image: constructionImg232,
        color: "#6ff8b1",
      },
      {
        id: 3,
        title: "Overcrowding Near Risk Zones",
        description:
          "Detects crowd buildup near machinery or scaffolding, reducing chances of falls, accidents, or project delays.",
        image: constructionImg233,
        color: "#0c8ce9",
      },
      {
        id: 4,
        title: "Fire or Smoke in Hazard Areas",
        description:
          "Sends quick alerts for fire or smoke near flammable materials, enabling faster emergency response.",
        image: constructionImg237,
        color: "#f8e66f",
      },
    ],
  },
  {
    id: 3,
    title: "Aksha In Healthcare",
    description:
      "AI-powered video surveillance solutions are enhancing healthcare by enabling intelligent monitoring, real-time alerts, and actionable insights. These systems boost patient safety, ensure staff compliance, and improve operational efficiency. With technologies like computer vision and machine learning, hospitals can respond proactively and reduce risks.",
    features: [
      {
        id: 1,
        title: "Real-Time Patient Movement Alerts",
        description:
          "Aksha detects falls, wandering, or sudden movements, helping staff respond quickly and prevent injuries.",
        image: healthcareImg216,
        color: "#f86f6f",
      },
      {
        id: 2,
        title: "PPE & Hygiene Monitoring",
        description:
          "Automatically checks if doctors and nurses are wearing masks and sanitizing hands, reducing infection risks.",
        image: healthcareImg217,
        color: "#6ff8b1",
      },
      {
        id: 3,
        title: "Access Control in Sensitive Areas",
        description:
          "Monitors entry to ICUs, pharmacies, or labs, alerting if unauthorized individuals try to enter.",
        image: healthcareImg218,
        color: "#0c8ce9",
      },
      {
        id: 4,
        title: "Fire & Smoke Detection in Critical Zones",
        description:
          "Aksha detects fire or smoke in areas like ICUs, storage rooms, or electrical units, enabling fast evacuation and damage control.",
        image: healthcareImg219,
        color: "#f8e66f",
      },
    ],
  },
  {
    id: 4,
    title: "Aksha In Smart Cities",
    description:
      "Smart cities demand smarter surveillance and rapid response. Aksha detects fires, crowd build-ups, and water leaks in public spaces. It monitors vehicle flow, face cover violations, and material movement for urban safety. Unauthorized access to restricted infrastructure is flagged instantly. Keep your city safe, efficient, and always under intelligent watch.",
    features: [
      {
        id: 1,
        title: "Fire, Smoke & Water Leak Detection",
        description:
          "Aksha instantly detects fires, smoke, or water leakage in public areas, helping emergency teams respond faster and prevent disasters.",
        image: smartCityImg211,
        color: "#f86f6f",
      },
      {
        id: 2,
        title: "Unauthorized Entry & Perimeter Breach Alerts",
        description:
          "Monitors entry to restricted zones like government buildings or utility areas, alerting security on unauthorized access.",
        image: smartCityImg212,
        color: "#6ff8b1",
      },
      {
        id: 3,
        title: "Traffic & Vehicle Movement Monitoring",
        description:
          "Tracks vehicle flow, wrong-way driving, or unauthorized parking, improving traffic control and reducing violations.",
        image: smartCityImg213,
        color: "#0c8ce9",
      },
      {
        id: 4,
        title: "Crowd Detection in Public Spaces",
        description:
          "Detects crowd build-up in markets, bus stops, or event areas, helping manage congestion and maintain public order.",
        image: smartCityImg214,
        color: "#f8e66f",
      },
    ],
  },
  {
    id: 5,
    title: "Aksha In Commercial Offices",
    description:
      "Modern offices need smart monitoring without disrupting daily work. Aksha detects fire risks, water leaks, and overcrowding in shared areas. It monitors entry into restricted zones like server rooms or finance sections. Out-of-hours movement and unusual behaviour are instantly flagged. Stay secure, compliant, and in control effortlessly.",
    features: [
      {
        id: 1,
        title: "Unauthorized Access Detection",
        description:
          "Alerts when someone enters sensitive zones like server rooms or finance areas without permission, protecting data and assets.",
        image: commersalimage123,
        color: "#f86f6f",
      },
      {
        id: 2,
        title: "Fire or Smoke in Critical Areas",
        description:
          "Instantly detects smoke or fire in IT rooms or storage zones, helping prevent damage from short circuits or overheating.",
        image: commersalimage207,
        color: "#6ff8b1",
      },
      {
        id: 3,
        title: "Crowd Detection in Common Areas",
        description:
          "Monitors lobbies, cafeterias, or conference halls, avoiding congestion during breaks or office events.",
        image: commersalimage208,
        color: "#0c8ce9",
      },
      {
        id: 4,
        title: "Gate & Door Open Alerts",
        description:
          "Notifies if main gates, emergency exits, or fire doors are left open, securing entry points and ensuring safety.",
        image: commersalimage209,
        color: "#f8e66f",
      },
    ],
  },
  {
    id: 6,
    title: "Aksha In Warehouses & Logistics",
    description:
      "Warehouses handle high-value inventory, constant movement, and tight schedules. Aksha keeps an eye on safety gear compliance, fire risks, and unauthorized access. It monitors material shifts, crowding, and vehicle flow in real time. Staff stay focused while Aksha ensures nothing goes unnoticed. Smarter visibility means fewer delays, losses, and safety incidents.",
    features: [
      {
        id: 1,
        title: "Safety & Hazard Detection",
        description:
          "Detects fire, water leaks, and missing safety gear like helmets, helping prevent accidents and ensuring worker protection.",
        image: warehouseImg226,
        color: "#f86f6f",
      },
      {
        id: 2,
        title: "Smart Access & Entry Control",
        description:
          "Monitors gates, doors, and restricted zones, alerting on unauthorized access or gate left open.",
        image: warehouseImg228,
        color: "#6ff8b1",
      },
      {
        id: 3,
        title: "Crowd Monitoring in Work Zones",
        description:
          "Detects overcrowding in loading bays or narrow aisles, helping avoid delays, confusion, or safety violations.",
        image: warehouseImg229,
        color: "#0c8ce9",
      },
    ],
  },
];


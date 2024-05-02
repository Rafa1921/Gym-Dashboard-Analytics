// Sidebar imports
import { UilDumbbell, UilClipboardAlt } from "@iconscout/react-unicons";

// Analytics Cards imports
import { UilUsdSquare, UilMoneyWithdrawal } from "@iconscout/react-unicons";

// Recent Card Imports
import img1 from "../imgs/img1.png";
import img2 from "../imgs/img2.png";
import img3 from "../imgs/img3.png";

// Sidebar Data
export const SidebarData = [
  {
    icon: UilClipboardAlt, // Replace with gym-related icon
    heading: "Workouts", // Update heading to match the category
  },
  {
    icon: UilDumbbell, // Replace with gym-related icon
    heading: "Equipment", // Update heading to match the category
  },
];

// Analytics Cards Data
export const cardsData = [
  {
    title: "Sales",
    color: {
      backGround: "green",
      boxShadow: "0px 10px 20px 0px #e0c6f5",
    },
    barValue: 80,
    value: "45,237",
    png: UilUsdSquare,
    series: [
      {
        name: "Sales",
        data: [755, 830, 765, 413, 452, 609, 300],
      },
    ],
  },
  {
    title: "Equipments",
    color: {
      backGround: "red",
      boxShadow: "0px 10px 20px 0px #FDC0C7",
    },
    barValue: 30,
    value: "44,340",
    png: UilMoneyWithdrawal,
    series: [
      {
        name: "Equipments",
        data: [50, 200, 505, 30, 850, 34, 60],
      },
    ],
  },
  {
    title: "Amenities",
    color: {
      backGround: "blue",
      boxShadow: "0px 10px 20px 0px #F9D59B",
    },
    barValue: 100,
    value: "65,343",
    png: UilClipboardAlt,
    series: [
      {
        name: "Amenities",
        data: [434, 865, 543, 350, 832, 915, 420],
      },
    ],
  },
];

// Recent Update Card Data
export const UpdatesData = [
  {
    img: img1,
    name: "Rafael Fernandez",
    noti: "Kind and Simple guy.",
    time: "25 seconds ago",
  },
  {
    img: img2,
    name: "Kuma",
    noti: "Cute and Lovable.",
    time: "30 minutes ago",
  },
  {
    img: img3,
    name: "My one and Only",
    noti: "Dumbell is a stress reliever for me.",
    time: "2 hours ago",
  },
];

import juniorSuite from "../../assets/banner01.jpg";
import familyRoom from "../../assets/banner01.jpg";
import doubleRoom1 from "../../assets/banner01.jpg";
import doubleRoom2 from "../../assets/banner01.jpg";
import deluxeRoom from "../../assets/banner01.jpg";

// Replace with actual icon images
import wifiIcon from "../../assets/banner01.jpg";
import acIcon from "../../assets/banner01.jpg";
import tvIcon from "../../assets/banner01.jpg";
import serviceIcon from "../../assets/banner01.jpg";

export const rooms = [
  {
    title: "Junior Suite",
    price: "150$ / NIGHT",
    image: juniorSuite,
    hasButton: true,
  },
  {
    title: "Family Room",
    price: "200$ / NIGHT",
    image: familyRoom,
    hasButton: true,
    icons: [wifiIcon, acIcon, tvIcon, serviceIcon],
  },
  {
    title: "Double Room",
    price: "250$ / NIGHT",
    image: doubleRoom1,
    hasButton: true,
  },
  {
    title: "Double Room",
    price: "250$ / NIGHT",
    image: doubleRoom2,
    hasButton: true,
  },
  {
    title: "Deluxe Room",
    price: "300$ / NIGHT",
    image: deluxeRoom,
    hasButton: true,
  },
];

import juniorSuite from "../../assets/bed01.jpeg";
import familyRoom from "../../assets/bed02.jpeg";
import doubleRoom1 from "../../assets/bed03.jpeg";
import doubleRoom2 from "../../assets/bed04.jpeg";
// import deluxeRoom from "../../assets/banner01.jpg";

// Replace with actual icon images
// import wifiIcon from "../../assets/banner01.jpg";
// import acIcon from "../../assets/banner01.jpg";
// import tvIcon from "../../assets/banner01.jpg";
// import serviceIcon from "../../assets/banner01.jpg";

export interface Room {
  title: string;
  price: string;
  image: string;
  hasButton?: boolean;
  icons?: string[];
}

export const rooms: Room[] = [
  {
    title: "Junior Suite",
    price: "1700 / NIGHT",
    image: juniorSuite,
    hasButton: true,
  },
  {
    title: "Family Room",
    price: "2500 / NIGHT",
    image: familyRoom,
    hasButton: true,
  },
  {
    title: "Single Room",
    price: "2000 / NIGHT",
    image: doubleRoom1,
    hasButton: true,
  },
  {
    title: "Double Room",
    price: "3500 / NIGHT",
    image: doubleRoom2,
    hasButton: true,
  },
];

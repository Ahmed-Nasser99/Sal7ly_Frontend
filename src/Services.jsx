import LocalLaundryServiceIcon from "@mui/icons-material/LocalLaundryService";
import KitchenIcon from "@mui/icons-material/Kitchen";
import MicrowaveIcon from "@mui/icons-material/Microwave";
import AcUnitIcon from "@mui/icons-material/AcUnit";
import { Microwave, Tv } from "@mui/icons-material";

export const servicesData = [
  {
    icon: <LocalLaundryServiceIcon style={{ width: "5rem", height: "5rem" }} />,
    title: "Washing Machine Repair",
    description:
      "Our experts can diagnose and repair any issue with your washing machine.",
  },
  {
    icon: <KitchenIcon style={{ width: "5rem", height: "5rem" }} />,
    title: "Refrigerator Repair",
    description:
      "Keep your food fresh with our reliable refrigerator repair services.",
  },
  {
    icon: <MicrowaveIcon style={{ width: "5rem", height: "5rem" }} />,
    title: "Oven Repair",
    description:
      "Trust our experts to fix any issues with your oven or cooktop.",
  },
  {
    icon: <Microwave style={{ width: "5rem", height: "5rem" }} />,
    title: "Microwave Repair",
    description:
      "Get your dishwasher back in top shape with our repair services.",
  },
  {
    icon: <AcUnitIcon style={{ width: "5rem", height: "5rem" }} />,
    title: "Air Conditioner Repair",
    description:
      "Stay cool and comfortable with our air conditioning repair services.",
  },
  {
    icon: <Tv style={{ width: "5rem", height: "5rem" }} />,
    title: "TV Repair",
    description:
      "Get your clothes dry again with our expert dryer repair services.",
  },
];

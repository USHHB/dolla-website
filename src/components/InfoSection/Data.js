import svg1 from "../../assets/images/svg-1.svg";
import svg2 from "../../assets/images/svg-2.svg";
import svg3 from "../../assets/images/svg-3.svg";
import svg4 from "../../assets/images/svg-4.svg";
import svg5 from "../../assets/images/svg-5.svg";
import svg6 from "../../assets/images/svg-6.svg";

export const homeObjOne = {
  id: "about",
  lightBg: false,
  lightText: true,
  lightTextDesc: true,
  topLine: "Premium Bank",
  headLine: "Unlimited Transaction with zero fees",
  description:
    "Get access to our exclusive app that allows you to send unlimited transaction without getting charged any fees.",
  buttonLabel: "Get started",
  imgStart: false,
  img: svg1,
  alt: "Car",
  dark: true,
  primary: true,
  darkText: false,
  toLink: "/signin",
};

export const homeObjTwo = {
  id: "discover",
  lightBg: true,
  lightText: false,
  lightTextDesc: true,
  topLine: "Unlimited Access",
  headLine: "Unlimited Transaction with zero fees",
  description:
    "Get access to our exclusive app that allows you to send unlimited transaction without getting charged any fees.",
  buttonLabel: "Get started",
  imgStart: true,
  img: svg2,
  alt: "Piggybank",
  dark: false,
  primary: false,
  darkText: true,
  toLink: "/signin",
};

export const homeObjThree = {
  id: "signin",
  lightBg: true,
  lightText: false,
  lightTextDesc: false,
  topLine: "Join our Team",
  headLine: "Creating an account is extremely easy",
  description:
    "Get everything set up and raedy in under 10 minutes. all you need to do is add your information and you're ready to go.",
  buttonLabel: "Start Now",
  imgStart: false,
  img: svg5,
  alt: "Authentication",
  dark: false,
  primary: false,
  darkText: true,
  toLink: "/signin",
};

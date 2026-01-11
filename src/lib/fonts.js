import { Open_Sans, Poppins, Geist } from "next/font/google";

export const openSans = Open_Sans({
  subsets: ["latin"],
  display: "swap",
});

export const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const geist = Geist({
  subsets: ["latin"],
  display: "swap",
});

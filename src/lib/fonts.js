import { Poppins, Open_Sans } from "next/font/google";

export const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const openSans = Open_Sans({
  subsets: ["latin"],
  display: "swap",
});

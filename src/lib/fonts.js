import { Open_Sans, Poppins } from "next/font/google";

export const openSans = Open_Sans({
  subsets: ["latin"],
  display: "swap",
});

export const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

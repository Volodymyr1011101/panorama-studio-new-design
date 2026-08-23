import { IIMage } from "@/types";
import type { NextComponentType, NextPageContext } from "next";
import Image from "next/image";
import styles from "./Room.module.scss";
import Link from "next/link";
import { useTranslations } from "next-intl";
import { Unbounded } from "next/font/google";
interface Props {
  image: IIMage;
  roomName: string;
  navigation: string;
}

const unbounded = Unbounded({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"], // Укажи нужные веса
  display: "swap",
});

const Room: NextComponentType<NextPageContext, {}, Props> = ({
  image,
  roomName,
  navigation,
}: Props) => {
  const t = useTranslations("Rooms");
  return (
    <div className="h-full relative w-full">
      <Link
        className={`${styles.title} ${unbounded.className}`}
        href={navigation}
      >
        {roomName}
      </Link>
      <Image {...image} className=" object-cover w-full h-full rounded-[8px]" />
      <Link
        href={navigation}
        className={`absolute bottom-4 text-center w-[70%] m-auto left-[15%] text-white py-1 rounded-[12px] bg-[#ffffff42] backdrop-blur-[5px] hover:underline text-[16px] tracking-[1px] ${unbounded.className} font-[300]`}
      >
        {t("more")}
      </Link>
    </div>
  );
};

export default Room;

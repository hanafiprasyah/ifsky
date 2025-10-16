import SliderHome from "@/app/components/Slider";
import CategoriesHome from "@/app/components/Categories";
import IconSectionHome from "@/app/components/IconSection";
import HeroHome from "@/app/components/Hero";
import SaleHome from "@/app/components/Sale";
import FeatBanner from "@/app/components/FeatBanner";

export const metadata = {
  title: "Home",
};

export default function Home() {
  return (
    <div className="bg-neutral-100">
      <>
        <HeroHome />
        <CategoriesHome />
        <FeatBanner />
        <SliderHome />
        <IconSectionHome />
        <SaleHome />
      </>
    </div>
  );
}

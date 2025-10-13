import SliderHome from "@/app/components/Slider";
import CategoriesHome from "@/app/components/Categories";
import IconSectionHome from "@/app/components/IconSection";
import HeroHome from "@/app/components/Hero";
import SaleHome from "@/app/components/Sale";

export const metadata = {
  title: "Home",
};

export default function Home() {
  return (
    <div className="bg-neutral-100">
      <>
        <HeroHome />
        <SliderHome />
        <CategoriesHome />
        <IconSectionHome />
        <SaleHome />
      </>
    </div>
  );
}

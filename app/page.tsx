import MarketplaceHorizontal from "@/components/Marketplace/MarketplaceHorizontal";
import Marketplace from "@/components/Marketplace";
import Header from "@/components/Header";
export default function Home() {
  return (
    <div className="flex flex-col">
      <Header />
     {/*  <Marketplace /> */}
      <MarketplaceHorizontal />
    </div>
  );
}

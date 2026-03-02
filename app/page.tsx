import Image from "next/image";
import Carousel from "./Components/Carousel";
import Offers from "./Components/Offers/Offers";

export default function Home() {
  return (
    <div className="container mt-4">
      <Carousel/>
      <Offers/>
    </div>
  )
}

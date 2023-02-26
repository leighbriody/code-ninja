import Footer from "../../Components/Footer/Footer";
import HomeTtitle from "../../Components/HomeTtile/HomeTitle";
import Navigation from "../../Components/Navigation/Navigation";
import SnifferExample from "../../Components/SnifferExample/SnifferExample";

export default function Home() {
  return (
    <span>
      <Navigation></Navigation>
      <HomeTtitle></HomeTtitle>
      <SnifferExample></SnifferExample>
      <Footer></Footer>
    </span>
  );
}

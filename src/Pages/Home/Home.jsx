import FeaturedTours from "../../Components/Home/FeaturedTours";
import Hero from "../../Components/Home/Hero";
import PopularDestinations from "../../Components/Home/PopularDestinations";
import SearchBox from "../../Components/Home/SearchBox";
import TourGuides from "../../Components/Home/TourGuides";
import WhyChoose from "../../Components/Home/WhyChoose";

const Home = () => {
  return (
    <>
      <Hero />
      <SearchBox />
      <FeaturedTours />
      <PopularDestinations />
      <WhyChoose />
      <TourGuides />
    </>
  );
};

export default Home;
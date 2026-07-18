import FeaturedTours from "../../Components/Home/FeaturedTours";
import Hero from "../../Components/Home/Hero";
import PopularDestinations from "../../Components/Home/PopularDestinations";
import SearchBox from "../../Components/Home/SearchBox";

const Home = () => {
  return (
    <>
      <Hero />
      <SearchBox />
      <FeaturedTours />
      <PopularDestinations />
    </>
  );
};

export default Home;
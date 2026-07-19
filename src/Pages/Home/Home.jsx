import CTA from "../../Components/Home/CTA";
import FeaturedTours from "../../Components/Home/FeaturedTours";
import Hero from "../../Components/Home/Hero";
import LatestBlogs from "../../Components/Home/LatestBlogs";
import PopularDestinations from "../../Components/Home/PopularDestinations";
import SearchBox from "../../Components/Home/SearchBox";
import Testimonials from "../../Components/Home/Testimonials";
import TourGuides from "../../Components/Home/TourGuides";
import WhyChoose from "../../Components/Home/WhyChoose";
import useAuth from './../../Hooks/useAuth';

const Home = () => {

  const {user} = useAuth();

  console.log(user);
  
  return (
    <>
      <Hero />
      <SearchBox />
      <FeaturedTours />
      <PopularDestinations />
      <WhyChoose />
      <TourGuides />
      <Testimonials />
      <LatestBlogs />
      <CTA />
    </>
  );
};

export default Home;
import reviews from "../../data/reviews.json";
import TestimonialCard from "./TestimonialCard";
import SectionTitle from "./SectionTitle";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

const Testimonials = () => {
    return (
        <section className="py-24 bg-slate-50">

            <div className="max-w-7xl mx-auto px-4">

                <SectionTitle
                    subHeading="Testimonials"
                    heading="What Our Travelers Say"
                    description="Real experiences from our happy travelers."
                />

                <Swiper
                    slidesPerView={1}
                    spaceBetween={30}
                    autoplay={{
                        delay: 3500,
                    }}
                    pagination={{
                        clickable: true,
                    }}
                    modules={[Pagination, Autoplay]}
                    breakpoints={{
                        768: {
                            slidesPerView: 2,
                        },
                        1024: {
                            slidesPerView: 3,
                        },
                    }}
                >
                    {reviews.map((review) => (
                        <SwiperSlide className="h-auto" key={review.id}>
                            <div className="h-full">
                                <TestimonialCard review={review} />
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>

            </div>

        </section>
    );
};

export default Testimonials;
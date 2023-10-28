import { CustomerReview } from '../common';
import { reviews } from '../../data';

const CustomerReviews = () => {
  return (
    <section className="max-container flex flex-col">
      <div
        className="flex flex-col items-center justify-center mb-24"
        data-aos="fade-down"
      >
        <h3 className="text-4xl font-bold font-palanquin mb-4 text-center">
          What Our <span className="text-coral-red">Customer</span> Say?
        </h3>

        <p className="lg:max-w-lg text-slate-gray font-montserrat text-lg text-center">
          Hear genuine stories from our satisfied customers about their
          exceptional experiences with us.
        </p>
      </div>

      <div
        className="flex justify-center items-center gap-4  max-lg:flex-col"
        data-aos="fade-up"
      >
        {reviews.map((review, index) => {
          return <CustomerReview key={index} review={review} />;
        })}
      </div>
    </section>
  );
};

export default CustomerReviews;

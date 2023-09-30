import { star } from '../../assets/icons';

const CustomerReview = ({ review }) => {
  return (
    <div className="flex flex-col justify-center items-center p-12 gap-x-12 gap-y-4 ">
      <img
        src={review.imgUrl}
        alt={review.customerName}
        width={150}
        className="rounded-full"
      />

      <p className="max-w-sm md:max-w-md text-slate-gray font-montserrat text-lg text-center leading-normal">
        {review.feedback}
      </p>

      <div className="flex gap-2 justify-center items-center">
        <img src={star} alt="star" width={24} height={24} />
        <p className="font-montserrat text-xl leading-none text-slate-gray">
          ({review.rating})
        </p>
      </div>

      <p className="text-3xl font-bold font-palanquin">{review.customerName}</p>
    </div>
  );
};

export default CustomerReview;

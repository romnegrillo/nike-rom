import { star } from '../assets/icons';

const PopularProductsCard = ({ product }) => {
  return (
    <div className="flex flex-col flex-1 w-full">
      <img
        src={product.imgUrl}
        alt={product.name}
        className="w-[280px] h-[280px]x"
      />
      <div className="mt-8 flex justify-start gap-2.5">
        <img src={star} alt="rating" width={24} height={24} />
        <p className="font-montserrat text-xl leading-none text-slate-gray">
          {' '}
          ({product.rating})
        </p>
      </div>
      <h3 className="mt-2 text-2xl leading-normal font-semibold">
        {product.name}
      </h3>
      <p className="mt-2 font-semibold font-montserrat text-coral-red text-2xl leading-normal">
        {product.price}
      </p>
    </div>
  );
};

export default PopularProductsCard;

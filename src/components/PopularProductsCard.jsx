import { star } from '../assets/icons';

const PopularProductsCard = ({ product }) => {
  return (
    <div className="flex flex-col cursor-pointer hover:bg-gray-200 p-4 transform hover:scale-105 transition-all rounded-xl">
      <img
        src={product.imgUrl}
        alt={product.name}
        className="w-[280px] h-[280px]x"
      />

      <div className="mt-8 ml-2">
        <div className="flex justify-start gap-2.5">
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
    </div>
  );
};

export default PopularProductsCard;

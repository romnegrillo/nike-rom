const ShoeCard = ({ imgUrl, bigShoeImage, changeBigShoeImage }) => {
  return (
    <div
      className={`flex flex-row justify-center items-center bg-card bg-center bg-cover rounded-xl cursor-pointer sm:w-40 sm:h-40 max-sm:p-4 border-2 ${
        imgUrl.bigShoe === bigShoeImage ? 'border-coral-red' : 'border-none'
      } `}
      onClick={changeBigShoeImage}
    >
      <div>
        <img src={imgUrl.thumbnail} alt="shoe" width={130} height={100} />
      </div>
    </div>
  );
};

export default ShoeCard;

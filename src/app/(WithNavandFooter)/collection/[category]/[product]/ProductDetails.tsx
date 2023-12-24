import AddToCart from "./AddToCart";

const ProductDetails = ({ product }: { product: any }) => {
  return (
    <section className="grid gap-4 p-4 md:py-16 md:px-7">
      <h1 className=" text-3xl font-bold md:text-5xl">{product.title}</h1>
      <p className=" text-darkGrayishBlue md:text-lg">{product.description}</p>
      <div className="font-bold flex justify-between md:flex-col">
        <p className="flex gap-3 text-2xl items-center md:text-3xl">
          ${product.price - (product.price * product.discount) / 100}.00
          <span className="text-base text-black bg-gray-300 px-1.5 rounded-md">
            {`${product.discount}%`}
          </span>
        </p>
        <span className="text-grayishBlue line-through">
          ${product.price}.00
        </span>
      </div>
      <AddToCart product={product} />
    </section>
  );
};

export default ProductDetails;

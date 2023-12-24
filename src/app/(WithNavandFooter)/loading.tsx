import { Loader } from "../_components/product/product-image-loader";

export default function Loading() {
  return (
    <div className="w-100 flex justify-center items-center">
      <Loader />
    </div>
  );
}

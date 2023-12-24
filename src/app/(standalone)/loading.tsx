import { Loader } from "../_components/product/product-image-loader";

export default function Loading() {
  return (
    <div className=" h-screen w-100 m-auto flex justify-center items-center">
      <Loader />
    </div>
  );
}

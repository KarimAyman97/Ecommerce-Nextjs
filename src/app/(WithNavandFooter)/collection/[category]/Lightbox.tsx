import { ProductImageDesktop } from "./[product]/ProductImage";

type LightboxProps = {
  handleClose: () => void;
  allProductImage: any[];
};

const Lightbox = ({ handleClose, allProductImage }: LightboxProps) => {
  return (
    <div className="fixed overflow-hidden inset-0 flex items-center justify-center bg-black bg-opacity-75">
      <div className="flex flex-col items-end gap-2">
        <button onClick={handleClose}>
          <svg width="14" height="15" xmlns="http://www.w3.org/2000/svg">
            <path
              d="m11.596.782 2.122 2.122L9.12 7.499l4.597 4.597-2.122 2.122L7 9.62l-4.595 4.597-2.122-2.122L4.878 7.5.282 2.904 2.404.782l4.595 4.596L11.596.782Z"
              fill="#FF7E1B"
              fill-rule="evenodd"
            />
          </svg>
          <span className="sr-only">close lightbox</span>
        </button>
        <ProductImageDesktop allProductImage={allProductImage} />
      </div>
    </div>
  );
};

export default Lightbox;

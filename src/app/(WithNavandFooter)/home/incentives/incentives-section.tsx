import { Incentives } from "@/app/_types/types";
import { IconType } from "react-icons";
import { LiaShippingFastSolid } from "react-icons/lia";
import { RiCustomerService2Line } from "react-icons/ri";
import { TbPigMoney, TbDiscount2 } from "react-icons/tb";
import { IncentivesAnimation } from "./incentives.animation";

const incentives: Incentives[] = [
  {
    Icon: LiaShippingFastSolid,
    title: "Free Shipping",
    description: `Shop now and enjoy free shipping on all orders.`,
  },
  {
    Icon: RiCustomerService2Line,
    title: "24/7 Customer Support",
    description: `24/7 customer support available.`,
  },
  {
    Icon: TbPigMoney,
    title: "Money Return",
    description: `Not satisfied? Return items for free within 30 days.`,
  },
  {
    Icon: TbDiscount2,
    title: "Deals & Promotions",
    description: `Find great deals and discounts on various products.`,
  },
];

export const IncentivesSection = () => {
  return (
    <section className="mt-10">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 text-start  gap-y-8 lg:grid-cols-4 sm:gap-12 ">
          {incentives.map((incentive) => (
            <IntenciveElement
              Icon={incentive.Icon}
              title={incentive.title}
              description={incentive.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

interface IntenciveElementProps {
  Icon: IconType;
  title: string;
  description: string;
}
const IntenciveElement: React.FC<IntenciveElementProps> = ({
  Icon,
  title,
  description,
}) => {
  return (
    <IncentivesAnimation>
      <div>
        <div className="flex items-center justify-start ">
          <Icon className="w-8 h-8" />
        </div>
        <h3 className="mt-3 text-md font-semibold capitalize text-black">
          {title}
        </h3>
        <p className="mt-2 text-sm text-gray-600">{description}</p>
      </div>
    </IncentivesAnimation>
  );
};

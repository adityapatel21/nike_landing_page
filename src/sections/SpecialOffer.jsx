import { arrowRight } from "../assets/icons";
import { offer } from "../assets/images";
import Button from "../components/Button";
const SpecialOffer = () => {
  return (
    <section className="flex justify-wrap items-center max-xl:flex-col-reverse gap-10">
      <div className="flex-1">
        <img
          src={offer}
          alt="offer logo"
          height={687}
          width={773}
          className="object-contain w-full"
        />
      </div>
      <div className="flex flex-1 flex-col">
        <h2 className="text-4xl font-palanquin capitalize font-bold lg:max-w-lg">
          <span className="text-coral-red"> Special</span> Offer
        </h2>
        <p className="mt-4 lg:max-w-lg info-text">
          Unlock Savings: Enjoy 30% Off Now! Elevate your style with our special
          offer on selected items.Don&apos;t miss out on this limited-time deal
          to upgrade your wardrobe for less. Shop now and save big!
        </p>
        <p className="mt-6 lg:max-w-lg info-text">
          Our dedication to detail and excelence ensures your satisfaction.
        </p>

        <div className="mt-11 flex flex-wrap gap-5">
          <Button label="Show Now" iconURL={arrowRight} />
          <Button
            label="Learn More"
            backgroundColor="bg-white"
            borderColor="border-slate-gray"
            textColor="text-slate-gray"
            iconURL={arrowRight}
          />
        </div>
      </div>
    </section>
  );
};

export default SpecialOffer;

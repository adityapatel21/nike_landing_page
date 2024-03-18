import Button from "../components/Button";
import { arrowRight } from "../assets/icons";
import { shoe8 } from "../assets/images";

const SuperQuality = () => {
  return (
    <section
      id="about-us"
      className="flex justify-between items-center max-lg:flex-col gap-10 w-full max-container"
    >
      <div className="flex flex-1 flex-col">
        <h2 className="text-4xl font-palanquin capitalize font-bold lg:max-w-lg">
          We Provide You <span className="text-coral-red"> Super Quality</span>{" "}
          Shoes
        </h2>
        <p className="mt-4 lg:max-w-lg info-text">
          Experience luxury with our super quality shoes. Crafted for comfort
          and durability, elevate your style effortlessly.
          <br />
          Discover timeless designs built to last. Step into elegance and
          sophistication with every stride.
        </p>
        <p className="mt-6 lg:max-w-lg info-text">
          Our dedication to detail and excelence ensures your satisfaction.
        </p>

        <div className="mt-11">
          <Button label="View details" iconURL={arrowRight} />
        </div>
      </div>
      <div className="flex-1 justify-center items-center">
        <img
          src={shoe8}
          alt="shoe8"
          width={570}
          height={522}
          className="object-contain"
        />
      </div>
    </section>
  );
};

export default SuperQuality;

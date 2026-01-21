import { SEAMLESS_EXECUTION } from "../../constants";
import PictureCards from "./picture-cards";

const CardMap = () => {
  return (
    <div className="flex justify-center bg-[#f9f9f9]">
      {SEAMLESS_EXECUTION.map((card) => {
        return (
          <PictureCards
            key={card.title}
            title={card.title}
            content={card.content}
            image={card.image}
          />
        );
      })}
    </div>
  );
};

export default CardMap;

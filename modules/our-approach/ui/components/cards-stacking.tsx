import { CARD_CONTENT } from "../../constants";
import Cards from "./cards";
import StackingCards, { StackingCardItem } from "./stacking-cards";

const CardStack = () => {
  return (
    <StackingCards
      totalCards={4}
      scaleMultiplier={0.03}
      scrollOptions={{ offset: ["start start", "end end"] }}
    >
      {CARD_CONTENT.map((card) => {
        return (
          <StackingCardItem
            key={card.content}
            index={4}
            topPosition="5 + index * 3"
          >
            <Cards
              icon={card.icon}
              content={card.content}
              text1={card.text1}
              text2={card.text2}
            />
          </StackingCardItem>
        );
      })}
    </StackingCards>
  );
};

export default CardStack;

import { useEffect, useState } from 'react';
import { CardContainer } from './Card.styles';

const Card = ({ img, cardClicked, flippedImages, activeImages }) => {
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    if (flippedImages.length === 0 && !activeImages.includes(img)) {
      setIsActive(false);
    }
  }, [flippedImages, activeImages])
  return (
    <CardContainer img={img} active={isActive} onClick={() => {
      setIsActive(true);
      cardClicked(img);
    }}>

    </CardContainer>
  );
}

export default Card;

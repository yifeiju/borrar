import { useEffect, useState } from 'react';
import { getCharacters } from './app/api'
import { getRandom, shuffleArray } from './app/utils';
import Card from './components/Card/Card';

const App = () => {
  const [characters, setCharacters] = useState([]);
  const [flippedImages, setFlippedImages] = useState([]);
  const [activeImages, setActiveImages] = useState([]);

  useEffect(() => {
    const hacerCosas = async () => {
      const res = await getCharacters();
      const c = res.data.results;
      const c2 = getRandom(c, 4);
      const c3 = [...c2, ...c2];
      const c4 = shuffleArray(c3);
      setCharacters(c4);
    }
    hacerCosas();
  }, []);

  const cardClicked = (img) => {
    if (flippedImages.length === 0) {
      setFlippedImages([img]);
    } else if (flippedImages.length == 1) {
      const imgs = [...flippedImages, img];
      setFlippedImages(imgs);
      if (imgs[0] === imgs[1]) {
        setFlippedImages([]);
        const newActiveImages = [...activeImages, img, img]
        setActiveImages(newActiveImages)
        if (newActiveImages.length === characters.length) {
          console.log('first')
        }
      } else {
        setTimeout(() => {
          setFlippedImages([]);
        }, 2000)
      }
    }
  }

  return (
    <div >
      {
        characters.map(character => <Card activeCard={activeImages.includes(character.image)} img={character.image} flippedImages={flippedImages} activeImages={activeImages} cardClicked={(img) => cardClicked(img)} />)
      }
      llllllllllllllllllll
    </div>
  );
}

export default App;

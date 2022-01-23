import { useState } from 'react';
import { Button } from '../../../atoms/CustomButton';
import FavoriteButton from '../../../atoms/FavoriteButton';

const SlideItem = ({ data }: any) => {
    const [favorite, setFavorite] = useState(false)

    const onClick = () => {
        console.log('click')
    } 

    const changePin = () => {
        setFavorite(!favorite)
    }

  return (
      <div className="flex justify-center shadow-md mb-5" key={data.id}>
          <div>
              <div className="flex justify-center">
                  <img className="h-32" src={data.img} alt="車の写真" />
              </div>
              <div className='flex justify-between'>
                  <div>
                      <p>{data.name}</p>
                      <p className="line-clamp-1">{data.type}</p>
                  </div>
                  <FavoriteButton onClick={changePin} favorite={favorite} />
              </div>
              <div className="flex justify-center m-4">
                  <Button kind="secondary" arrow="black" onClick={onClick}>詳細を見る</Button>
              </div>
          </div>
      </div>
  );
};

export default SlideItem;

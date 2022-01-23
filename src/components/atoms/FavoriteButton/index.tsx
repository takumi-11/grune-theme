import { VFC } from 'react'

type Props = {
    onClick: () => void;
    favorite: boolean;
}

const FavoriteButton: VFC<Props> = ({ 
    onClick,
    favorite,
}) => {

  return (
    <button onClick={onClick} className='flex justify-center shadow-md p-3 hover:opacity-75'>
        <div>
            <p className='flex justify-center text-xs'>お気に入り{!favorite && 'に'}</p>
            <p className='flex justify-center text-xs'>{favorite ? '解除' : '追加'}</p>
        </div>
        <div>
            {favorite 
                ?
                <img className='w-7' src={`${process.env.PUBLIC_URL}/icon/pinCheck.png`} alt="アイコン" />
                :
                <img className='w-7' src={`${process.env.PUBLIC_URL}/icon/pinUncheck.png`} alt="アイコン" />
            }
        </div>
    </button>
  )
}

export default FavoriteButton;

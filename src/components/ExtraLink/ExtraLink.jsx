import { Link } from 'react-router-dom'

export const ExtraLink = ({ text, color, url }) => {
    return (
        <Link to={url}>
            <div className={`flex justify-center items-center gap-5 font-semibold underline ${color}`}>
                <p>{text}</p>
                <img src={color === 'text-white' ? 'https://firebasestorage.googleapis.com/v0/b/cafe-de-altura-react.appspot.com/o/rightArrowWhite.png?alt=media&token=4d07e913-2143-4b6a-8e4e-e68f6fa11e2d' 
                : 'https://firebasestorage.googleapis.com/v0/b/cafe-de-altura-react.appspot.com/o/rightArrow.png?alt=media&token=8dc9864d-d8d5-422c-95c4-a19da82b9368'} alt="" />
            </div>
        </Link>
    )
}

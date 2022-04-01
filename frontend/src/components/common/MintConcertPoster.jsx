import '../../styles/MintConcertPoster.css'

export default function MintConcertPoster({ imgUrl }) {
  return (
    <div className="MintConcertPoster">
      {/* <img src={require('../../images/poster_ho.png')} alt="" /> */}
      <img src={imgUrl} alt="" />
    </div>
  )
}

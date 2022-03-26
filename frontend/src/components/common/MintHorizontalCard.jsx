//modules
import '../../styles/MintHorizontalCard.css'
//componentx
import MintConcertText from './MintConcertText'
import MintConcertPoster from './MintConcertPoster'

export default function MintHorizontalCard({ concertData, width = '20vw', height = '20vw', extra }) {
  return (
    <div className={`MintHorizontalCard`}>
      <div className="MintHorizontalCard__poster">
        <MintConcertPoster imgUrl={concertData.img} width={width} height={height} />
      </div>
      <div className="MintHorizontalCard__text">
        <MintConcertText
          data={{
            singer: concertData.singer,
            title: concertData.title,
            date: concertData.date,
          }}
          textStyle={textStyle}
        />
        {extra}
      </div>
    </div>
  )
}

const textStyle = {
  singer: {
    fontSize: '18px',
  },
  title: {
    fontSize: '18px',
  },
  date: {
    marginTop: '10px',
    fontSize: '16px',
    fontWeight: '300',
  },
}
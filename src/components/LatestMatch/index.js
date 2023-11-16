import './index.css'

const LatestMatch = props => {
  const {details} = props
  const {latestMatchDetails} = details

  return (
    <>
      <ul className="team-matchCont">
        <li>
          <p>{latestMatchDetails.competing_team}</p>
          <p>{latestMatchDetails.date}</p>
          <p>{latestMatchDetails.venue}</p>
          <p>{latestMatchDetails.result}</p>
        </li>
        <img
          src={latestMatchDetails.competing_team_logo}
          alt={`latest match ${latestMatchDetails.competing_team}`}
          className="matchLogo"
        />
        <li>
          <h1>First Innings</h1>
          <p>{latestMatchDetails.first_innings}</p>

          <h1>Second Innings</h1>
          <p>{latestMatchDetails.second_innings}</p>

          <h1>Man Of The Match</h1>
          <p>{latestMatchDetails.man_of_the_match}</p>

          <h1>Umpire</h1>
          <p>{latestMatchDetails.umpires}</p>
        </li>
      </ul>
    </>
  )
}

export default LatestMatch

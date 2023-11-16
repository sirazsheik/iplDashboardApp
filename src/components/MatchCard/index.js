import './index.css'

const MatchCard = props => {
  const {details} = props
  const status = details.match_status

  return (
    <li className="recentMstchCard">
      <img
        src={details.competing_team_logo}
        alt={`competing team ${details.competing_team}`}
        className="recentMstchCardImg"
      />
      <p>{details.competing_team}</p>
      <p>{details.result}</p>
      <p className={status === 'Won' ? 'green' : 'red'}>
        {details.match_status}
      </p>
    </li>
  )
}
export default MatchCard

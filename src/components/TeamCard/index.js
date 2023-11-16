import {Link} from 'react-router-dom'

const TeamCard = props => {
  const {details} = props

  return (
    <Link to={`/team-matches/${details.id}`} className="link">
      <li className="listItem">
        <img
          src={details.teamImgUrl}
          alt={details.name}
          className="TeamCardImg"
        />
        <p>{details.name}</p>
      </li>
    </Link>
  )
}
export default TeamCard

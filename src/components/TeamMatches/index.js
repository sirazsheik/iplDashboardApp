import {Component} from 'react'

import Loader from 'react-loader-spinner'

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import LatestMatch from '../LatestMatch'
import MatchCard from '../MatchCard'
import './index.css'

class TeamMatches extends Component {
  state = {blogItem: [], isLoading: true}

  componentDidMount() {
    this.getData()
  }

  getData = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    const response = await fetch(`https://apis.ccbp.in/ipl/${id}`)
    const data = await response.json()
    const updateData = {
      latestMatchDetails: data.latest_match_details,
      recentMatches: data.recent_matches,
      teamBannerUrl: data.team_banner_url,
    }
    this.setState({blogItem: updateData, isLoading: false})
  }

  render() {
    const {isLoading, blogItem} = this.state
    const {match} = this.props
    const {params} = match

    const {recentMatches} = blogItem
    return (
      <div className="TeamMatchbg">
        {isLoading ? (
          <div testid="loader">
            <Loader type="Oval" color="#ffffff" height={50} width={50} />{' '}
          </div>
        ) : (
          <>
            <img
              src={blogItem.teamBannerUrl}
              alt="team banner"
              className="Team-img"
            />
            <h1 className="LatestMatchs">Latest Matchs</h1>
            <LatestMatch details={blogItem} />
            <ul className="nextMatchs">
              {recentMatches.map(each => (
                <MatchCard details={each} key={each.id} />
              ))}
            </ul>
          </>
        )}
      </div>
    )
  }
}
export default TeamMatches

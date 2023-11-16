import {Component} from 'react'
import Loader from 'react-loader-spinner'

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import TeamCard from '../TeamCard'
import './index.css'

class Home extends Component {
  state = {blogList: [], isLoading: true}

  componentDidMount() {
    this.getData()
  }

  getData = async () => {
    const response = await fetch('https://apis.ccbp.in/ipl')
    const data = await response.json()
    const updateData = data.teams.map(each => ({
      name: each.name,
      id: each.id,
      teamImgUrl: each.team_image_url,
    }))
    this.setState({blogList: updateData, isLoading: false})
  }

  renderDetails = () => {
    const {blogList} = this.state
    return (
      <>
        <div className="dashbordHead">
          <div className="dashDis">
            <img
              src="https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png"
              alt="ipl logo"
              className="dashbordImg"
            />
            <h1>IPL Dashboard</h1>
          </div>
        </div>
        <ul>
          {blogList.map(each => (
            <TeamCard details={each} key={each.name} />
          ))}
        </ul>
      </>
    )
  }

  render() {
    const {isLoading} = this.state

    return (
      <div className="bg">
        <div className="dashbordCard">
          {isLoading ? (
            <div testid="loader">
              <Loader type="Oval" color="#ffffff" height={50} width={50} />{' '}
            </div>
          ) : (
            this.renderDetails()
          )}
        </div>
      </div>
    )
  }
}
export default Home

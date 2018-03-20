import React, { Component } from 'react'
import Link from 'next/link'
import {Menu, Icon, Image, Popup} from 'semantic-ui-react'
import Logo from '../../static/images/proofer-logo-colored.svg'

if (process.env.BROWSER) {
  require('./styles.scss')
}

//const prooferIcon = '../../static/images/proofer_icon.png'

class SideBar extends Component {
  constructor (props) {
    super(props)

    this.state = {
      openSidebarButtonVisible: false
    }
  }

  renderSocialProfiles = () => {
    const {socialProfiles} = this.props
    const socialProfilesArray = socialProfiles === undefined ? [] : socialProfiles
    return (socialProfilesArray.map((data, index) => (
      <Menu.Item key={index} onClick={this.handleItemClick}>
        {data.name}
      </Menu.Item>)
    ))
  }

  render () {
    const { isOpen, activeItem, toggleSidebar } = this.props
    const sidebarClass = isOpen ? 'sidebar-container open' : 'sidebar-container'

    return (<div className={sidebarClass} onMouseEnter={() => {this.setState({openSidebarButtonVisible: true})}} onMouseLeave={() => {this.setState({openSidebarButtonVisible: false})}}>
      <div className="sidebar-wrapper">
        <div className='sidebar-header'>
          {isOpen ? <Logo width='110px' className="sidebar-logo" />
          : <Logo width='20px' className="sidebar-logo" viewBox="0 0 50 63" />}
          <Icon name="close" onClick={toggleSidebar} />
        </div>
        <Menu vertical className='sidebar-menu'>
          <Menu.Item as='div' name='dashboard' disabled active={activeItem === '/dashboard'}>
            <Icon name='dashboard' />
            {/*Uncomment when Dashboard page implemented*/}
            {/*<Link prefetch href='/app/dashboard'><a>Dashboard</a></Link>*/}
            <Popup
              trigger={<a><span className="item-text">Dashboard</span></a>}
              content="Coming soon!"
              position="top center"
              inverted
            />
          </Menu.Item>

          <Link prefetch href='/app/posts'>
            <Menu.Item as='div' name='posts' active={activeItem === '/app/posts'}>
              <Icon name='list' />
              <a><span className="item-text">Posts</span></a>
            </Menu.Item>
          </Link>

          <Link prefetch href='/app/calendar'>
            <Menu.Item as='div' name='calendar' active={activeItem === '/app/calendar'}>
              <Icon name='calendar outline' />
              <a><span className="item-text">Calendar</span></a>
            </Menu.Item>
          </Link>

          <Link prefetch href='/app/assetbank'>
            <Menu.Item as='div' name='assetbank' active={activeItem === '/app/assetbank'}>
              <Icon name='file image outline' />
              <a><span className="item-text">Asset Bank</span></a>
            </Menu.Item>
          </Link>

          <Menu.Item as='div' name='campaign' disabled active={activeItem === '/app/campaign'}>
            <Icon name='options' />
            {/*Uncomment when Dashboard page implemented*/}
            {/*<Link href='/app/campaign'><a>Campaign monitor</a></Link>*/}
            <Popup
              trigger={<a><span className="item-text">Campaign monitor</span></a>}
              content="Coming soon!"
              position="top center"
              inverted
            />
          </Menu.Item>
        </Menu>

        {!isOpen && this.state.openSidebarButtonVisible &&
          <div className="open-sidebar"  onClick={toggleSidebar} >
            <Icon name="chevron right" />
          </div>
        }

      </div>
    </div>
    )
  }
}

export default SideBar

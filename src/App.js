import React from 'react';
import './App.css';
import {
  Tabs,
  Tab,
} from '@material-ui/core';
import { Link } from 'react-router-dom';
import About from './about';
import Download from './download';
import 'github-markdown-css'

const headerImgSrc = "https://i.imgur.com/H5I3BYP.png";
const rootPath = "/tabs-collage-info";
const aboutPath = rootPath + "/about";
const downloadPath = rootPath + "/download";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tabIndex: this.getTabIndex()
    }
  }

  componentDidUpdate(prevProps) {
    if (prevProps.location.pathname !== this.props.location.pathname) {
      this.handlePathChange();
      this.scrollElToView(this.tabsRef);
    }
  }

  scrollElToView = el => {
    if (el) {
      setTimeout(() => {
        el.scrollIntoView({
          behavior: "smooth",
          block: "start",
          inline: "center"
        })
      }, 100);
    }
  }

  handlePathChange = () => {
    const path = this.props.location.pathname;
    this.setState({ tabIndex: this.getTabIndex() });
  }

  getTabIndex = () => {
    const path = this.props.location.pathname;
    if (path === aboutPath) {
      return 0;
    } else if (path === downloadPath) {
      return 1;
    }
    return 0;
  }

  render() {
    return (
      <div className="App">
        <div className="app-content">
          <img
            className="header"
            src={headerImgSrc}
          />
          <Tabs
            ref={el => { this.tabsRef = el }}
            variant="fullWidth"
            value={this.state.tabIndex}
            onChange={this.handleTabChange}
            TabIndicatorProps={{ style: { background: '#272727' } }}
            centered
          >
            <Tab component={Link} label="About" to={aboutPath} />
            <Tab component={Link} label="Download" to={downloadPath} />
          </Tabs>
          <About currTabIndex={this.state.tabIndex} tabIndex={0} />
          <Download currTabIndex={this.state.tabIndex} tabIndex={1} />
        </div>
      </div>
    );
  }
}

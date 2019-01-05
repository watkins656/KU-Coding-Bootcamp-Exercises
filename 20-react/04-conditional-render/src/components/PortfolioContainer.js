import React, { Component } from "react";
import NavTabs from "./NavTabs";
import Home from "./pages/Home";
import About from "./pages/About";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";

class PortfolioContainer extends Component {
  state = {
    currentPage: "Home"
  };

  handlePageChange = page => {
    this.setState({ currentPage: page });
  };

  renderContent(){
    switch (this.state.currentPage) {
      case  "Home":
return(
<Home />)
break;
      case  "About":
return(
<About />)
break;
      case "Blog":
return(
<Blog />)
break;
          case  "Contact":
return(
<Contact />)
break;
      default:
      break;
  }
  }
  render() {
    return (
      <div>
        <NavTabs
          currentPage={this.state.currentPage}
          handlePageChange={this.handlePageChange}
        />

      {this.renderContent()}
      </div>
    );
  }
}

export default PortfolioContainer;

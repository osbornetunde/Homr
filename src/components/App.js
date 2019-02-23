import React from 'react';
import LandingPage from './LandingPage';
import DetailsPage from './DetailsPage';
import Footer from './Footer';
import BackDrop from './BackDrop';
import SideBar from './SideBar';


class App extends React.Component {
    state = {
        sideDrawerOpen: false,
        currentState: 'Lagos'
    }

    drawerToggleClickHandler = () => {
        this.setState((prevState) => {
            return {sideDrawerOpen: !prevState.sideDrawerOpen}
        });
    };

    backdropClickHandler = () => {
        this.setState({sideDrawerOpen: false})
    }

    changeStateHandler = (e) => {
        this.setState({currentState: e.target.className})
        console.log(e.target.className)
    }

    render(){
        let backDrop;
        if (this.state.sideDrawerOpen) {
            backDrop = <BackDrop click={this.backdropClickHandler}/>
        }
        return (
            <div style={{height: '100%'}}>
                {backDrop}
                <LandingPage drawerClickHandler={this.drawerToggleClickHandler}/>
                <SideBar show={this.state.sideDrawerOpen}/>
                <DetailsPage value={this.state.currentState} change={this.changeStateHandler}/>
                <Footer />
                
            </div>
        )
    }
}

export default App;
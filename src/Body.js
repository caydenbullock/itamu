import React from 'react';
import './Body.css';
//import animal from './animal.png';
import Portfolio from './Portfolio.js';
import CloserToHome from './CloserToHome.js';
import Comics from './Comics.js';
import About from './About.js';


export class Body extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            fadingOut:false,
            fadingIn:false,
            activeBody:'videogame',
        };

    }

    componentDidUpdate(prevProps){
        //guard clause to prevent interrupting an ongoing fade
        if (this.state.fadingIn || this.state.fadingOut) {
            return;
        }
        //using prevProps below can cause probs if user is rapidly
        //clicking thru navber options
        if (this.state.activeBody !== this.props.activeBody){
            this.setState({fadingOut:true});
        };
    };
    handleTransitionEnd = () => {
        //if its fading out, change it to fading in
        //update state.activeBody with the new props.activeBody
        if (this.state.fadingOut === true){
            this.setState({
                fadingOut:false,
                fadingIn:true,
                activeBody: this.props.activeBody,
            });
        }
        //if its fading in, tell the state that it's all done
        if (this.state.fadingIn === true){
            this.setState({
                fadingIn:false
            });
        }
        
    };

    renderBody(){
        //obj deconstruction to create local vars
        //based on matching var names in these objs
        const { activeBody } = this.state;
        const { fadingOut } = this.state;
        const { fadingIn } = this.state;
        let body;
        switch (activeBody) {
            case 'portfolio':
                body = (
                    <Portfolio />
                )
                break;
            case 'about':
                body = (
                    <About />
                )
                break;
            case 'comics':
                body = (
                    <Comics />
                )
                break;
            case 'videogame':
                body = (
                <div className='whiteText'>
                    <CloserToHome />
                </div>
                )
                break;
            default:
                break;
        }
        return(
            <div 
                className={`center ${fadingIn ? "fadeIn" : (fadingOut ? "fadeOut" : "")}`}
                onTransitionEnd={this.handleTransitionEnd}
            >
                {body}
            </div>
        );
    }

    render(){
        return this.renderBody();
    }
}

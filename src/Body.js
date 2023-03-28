import React from 'react';
import './Body.css';
//import animal from './animal.png';
import Portfolio from './Portfolio.js';
import CloserToHome from './CloserToHome.js';
import Comics from './Comics.js';
import About from './About.js';

let Visibility = [
    'FADING_IN',
    'FADING_OUT',
    'VISIBLE',
    'INVISIBLE'
]

let visibilityClasses = {
    'FADING_IN' : 'fadeIn',
    'FADING_OUT': 'fadeOut',
    'VISIBLE':  'visible',
    'INVISIBLE': 'invisible'
}


export class Body extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            visibility: 'FADING_IN',
            activeBody:'videogame',
        };
        

    } 

    componentDidMount() {
        setTimeout(() => {
            this.state.visibility = 'VISIBLE'
        }, .5 * 1000)
    }


    componentDidUpdate(prevProps){
        //guard clause to prevent interrupting an ongoing fade
        if (['FADING_IN', 'FADING_OUT'].includes(this.state.visibility)) {
            return;
        }
        //using prevProps below can cause probs if user is rapidly
        //clicking thru navber options
        if (this.state.activeBody !== this.props.activeBody){
            this.setState({visibility:'FADING_OUT'});
            console.log('aswdfqewrq3ew')
        };
    };
    handleTransitionEnd = () => {
        //if its fading out, change it to fading in
        //update state.activeBody with the new props.activeBody

        //if its fading in, tell the state that it's all done
 
        switch(this.state.visibility) {
            case ('FADING_OUT'): {
                this.setState({
                    visibility: 'INVISIBLE',
                    activeBody: this.props.activeBody,
                }); 
            }
            case ('FADING_IN'): {
                this.setState({
                    visibility: 'VISIBLE'
                });
            }
        }
        
    };

    onLoaded() {
        this.setState({
            visibility: 'FADING_IN'
        });
    }

    renderBody(){
        //obj deconstruction to create local vars
        //based on matching var names in these objs
        const { activeBody } = this.state;
        let body;
        switch (activeBody) {
            case 'portfolio':
                body = (
                    <Portfolio 
                        onLoaded={this.onLoaded}/>
                )
                break;
            case 'about':
                body = (
                    <About
                        onLoaded={this.onLoaded}/>
                )
                break;
            case 'comics':
                body = (
                    <Comics 
                        onLoaded={this.onLoaded}/>
                )
                break;
            case 'videogame':
                body = (
                <div className='whiteText'>
                    <CloserToHome 
                        onLoaded={this.onLoaded}/>
                </div>
                )
                break;
            default:
                break;
        }
        return (
            <div 
                className={`center ${visibilityClasses[this.state.visibility]}`}
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

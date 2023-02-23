import React from 'react';
import './Body.css';

import Jail from './comics/Jail.js';
import {R1,R2,R3} from './comics/Ribbon.js';
import {S1,S2,S3,S4} from './comics/Space.js';
import {Button} from './App.js';
import rt1 from './ribbon/r1thumb.png';
import rt2 from './ribbon/r2thumb.png';
import rt3 from './ribbon/r3thumb.png';
import st1 from './2lyfe/spacethumb1.png';
import st2 from './2lyfe/spacethumb2.png';
import st3 from './2lyfe/spacethumb3.png';
import st4 from './2lyfe/spacethumb4.png';

export default class Comics extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            navFO:false,
            navFI:false,
            comicFO:false,
            comicFI:false,
            selectedBody:'none',
            selectedNav:'none',
            activeNav:'none',
            activeBody:'none',
            selectedComic:'none',
            activeComic: 'none',
        };

    }
    componentDidUpdate(prevProps){
        //guard clause to prevent interrupting an ongoing fade
        if (this.state.comicFO 
            || this.state.comicFI
            || this.state.navFO
            || this.state.navFI) {
            return;
        }
        //using prevProps below can cause probs if user is rapidly
        //clicking thru navber options
        if (this.state.activeComic !== this.state.selectedComic){
            this.setState({comicFO:true});
        }
        if (this.state.activeNav !== this.state.selectedNav){
            this.setState({navFO:true});
        }
    };
    handleTransitionEnd = () => {
        //if its finishing fading out, change it to fading in
        //update state.activeBody with the new props.activeBody
                //if its fading in, tell the state that it's all done
        if (this.state.comicFI === true){
            this.setState({
                comicFI:false
            });
        }
        if (this.state.comicFO === true){
            this.setState({
                comicFO:false,
                comicFI:true,
                activeComic: this.state.selectedComic,
            });
          
        }
        //if its fading in, tell the state that it's all done
        if (this.state.navFI === true){
            this.setState({
                navFI:false
            });
        }
        //do the above but for the nav
        if (this.state.navFO === true){
            this.setState({
                navFO:false,
                navFI:true,
                activeNav: this.state.selectedNav,
            });
        }

    };

    renderBody(){
        //obj deconstruction to create local vars
        //based on matching var names in these objs
        const { 
            activeNav,
            activeComic,
            navFI,
            navFO,
            comicFI,
            comicFO,
        } = this.state;
       
        let nav;
        switch (activeNav) {
            case 'ribbon': nav =  (
                <div className={`episode-nav ${navFI ? "fadeIn" : (navFO ? "fadeOut" : "")}`}>
                    <img width='25%' alt={'episode-nav'} src={rt1} onClick={() => this.setState({ selectedComic: 'r1'})} /> 
                    <img width='25%' alt={'episode-nav'} src={rt2} onClick={() => this.setState({ selectedComic: 'r2'})} /> 
                    <img width='25%' alt={'episode-nav'} src={rt3} onClick={() => this.setState({ selectedComic: 'r3'})} /> 
                </div>
            )
            break;
            case 'space': nav =  (
                <div className={`episode-nav ${navFI ? "fadeIn" : (navFO ? "fadeOut" : "")}`}>
                    <img width='25%' alt={'episode-nav'} src={st1} onClick={() => this.setState({ selectedComic: 's1'})} /> 
                    <img width='25%' alt={'episode-nav'} src={st2} onClick={() => this.setState({ selectedComic: 's2'})} /> 
                    <img width='25%' alt={'episode-nav'} src={st3} onClick={() => this.setState({ selectedComic: 's3'})} /> 
                    <img width='25%' alt={'episode-nav'} src={st4} onClick={() => this.setState({ selectedComic: 's4'})} /> 
                </div>
            )
            break;
            case 'jail': nav =  null;
            break;
            default: nav = null;
        }
        
        let comic;
        switch (activeComic) {
            case 'jail': comic = (<Jail />);
                break;
            case 'r1': comic = (<R1 />);
                break;
            case 'r2': comic = (<R2 />);
                break;
            case 'r3': comic = (<R3 />);
                break;
            case 's1': comic = (<S1 />);
                break;
            case 's2': comic = (<S2 />);
                break;
            case 's3': comic = (<S3 />);
                break;
            case 's4': comic = (<S4 />);
                break;
            default:
                break;
        }

        return(
            <>
            <div className={`button-container ${navFI ? "fadeIn" : (navFO ? "fadeOut" : "")}`}
                onTransitionEnd={this.handleTransitionEnd}>{nav}</div>
                <div 
                    className={`center ${comicFI ? "fadeIn" : (comicFO ? "fadeOut" : "")}`}
                    onTransitionEnd={this.handleTransitionEnd}
                >   
                    <div className='comics-container'>
                        {comic}
                    </div>
                </div>
            </>
        );
    }

    render() {
        return (
        <>
        <div className='comic-buttons'>
            <Button text='Ribbon' onClick={() => this.setState({ selectedNav: 'ribbon' })} />
            <Button text='Mug' onClick={() => this.setState({ selectedNav: 'space' })} />
            <Button text='Jail' onClick={() => this.setState({ selectedComic: 'jail',selectedNav:'jail' })} />
        </div>
        <div>
            {this.renderBody()}
        </div>
        </>
        );
      }
      
}

import React, {Component} from 'react';
import Singercard from './Singercard';
import './Singerdex.css';

class Singerdex extends React.Component {
    render() {
        let title;
        if(this.props.isWinner){
            title = <h2 className='Singerdex-winner'>Winning Hand!</h2>
        } else {
            title = <h2 className='Singerdex-loser'>Losing Hand!</h2>
        };

        return (
            <div className='Singerdex'>
                <div className='Singerdex-info'>
                    <h1>{this.props.team}</h1>
                    <h2>Fight Score: {this.props.totalScore} </h2>
                    {title}
                    <p>Team Toughness: {this.props.exp} | Team Intimidation: {this.props.intim}</p>
                </div>
                    {this.props.singers.map((singer) => (
                        <Singercard name={singer.name} band={singer.band} exp={singer.exp} intim={singer.intim} img={singer.img} />
                        ))}
            </div>  
        );
    }
}

export default Singerdex;
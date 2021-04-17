import React, {Component} from 'react';
import './Singercard.css';

class Singercard extends Component {
    render () {
        return (
            <div className='Singercard'>
                <h1 className='Singercard-title'>{this.props.name}</h1>
                <h2>{this.props.band}</h2>
                <img src={this.props.img} alt={this.props.name}/>
                <div className='Singercard-data'>Experience: {this.props.exp}</div>
                <div className='Singercard-data'>Intimidation Rating: {this.props.intim}</div>
            </div>
        )
    }
}

export default Singercard;
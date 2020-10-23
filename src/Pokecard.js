import React, { Component } from 'react';
import './Pokecard.css';

const POKE_API = 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/';

// this creates a usable image url that we can use with the ID of each pokemon by padding 4 to 004, etc
let padToThree = (number) => (number <= 999 ? `00${number}`.slice(-3) : number);

class Pokecard extends Component {
    render() {

        // build the image URL
        let imgSrc = `${POKE_API}${padToThree(this.props.id)}.png`;

        return (
            <div className="Pokecard">
                <h1 className="Pokecard-title">{this.props.name}</h1>    
                <div class="Pokecard-image">
                    <img src={imgSrc} alt={this.props.name} />
                </div> 
                <div className="Pokecard-data">Type: {this.props.type}</div> 
                <div className="Pokecard-data">EXP: {this.props.exp}</div>    
            </div>
        )
    }
}

export default Pokecard;
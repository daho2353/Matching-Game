import React, { Component } from 'react'; 

class Card extends Component {
	constructor (props) {
		super (props); // props include 
	}
	render () {
		let cardColor = 'black';
		if(this.props.card.flipped)
		{
			cardColor = this.props.card.color;
		}
		return (
			<td onClick={this.props.onClick} style ={{backgroundColor: cardColor, border: 'solid 1px white' }}></td>
			);
	}
}


export default Card; 

import React, { Component } from 'react'; 



class Card extends Component {
	constructor (props) {
		super (props); 
		
		this.state = {
			cardColor: 'black'
		}
	}
	render () {
		console.log(this.props.cardState);

		if (this.props.cardState == 0) {
			this.setState({cardColor: 'black'}); 
		}else if (this.props.cardState == 1) {
			switch(this.cardColor = this.props.cardId) {
				case 0:
				this.setState.cardColor = 'red';
				break;
				case 1:
				this.setState.cardColor = 'yellow'; 
				break;
				case 2: 
				this.setState.cardColor = 'blue';
				break; 
				case 3: 
				this.setState.cardColor = 'green'; 
				break; 
				case 4: 
				this.setState.cardColor = 'gray'; 
				break; 
			}
		}else {
			this.setState.cardColor({cardColor:'white'}); 
		}

		return (
			<td style ={{backgroundColor: this.cardColor, border: 'solid 1px white' }}></td>
			);
	}
}


export default Card; 

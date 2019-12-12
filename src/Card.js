import React, { Component } from 'react'; 



class Card extends Component {
	constructor (props) {
		super (props); // props include card state (0,1,2) and card id (1-5)
		
		this.state = {
			cardColor: 'black' // background color changes making it a state
		}
	}
	render () {

		if (this.props.cardState == 0) { // card is unflipped 
			this.setState({cardColor: 'black'}); 
		}else if (this.props.cardState == 1) { // card is flipped and based on Id a color is assigned
			switch(this.state.cardColor = this.props.cardId) {
				case 0:
				this.setState({cardColor: 'red'});
				break;
				case 1:
				this.setState({cardColor: 'yellow'});
				break;
				case 2: 
				this.setState({cardColor: 'blue'});
				break; 
				case 3: 
				this.setState({cardColor: 'green'});
				break; 
				case 4: 
				this.setState({cardColor: 'orange'});
				break; 
			}
		}else {  // two cards have matched
			this.setState({cardColor:'white'}); 
		}
		return (
			<td style ={{backgroundColor: this.state.cardColor, border: 'solid 1px white' }}></td>
			);
	}
}


export default Card; 

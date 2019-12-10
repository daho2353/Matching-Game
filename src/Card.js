import React from 'react'; 

	var cardColor; 
	//var cardState;
	var cardId = 6; 

	function cardState () {

		cardColor = 'white'; 
	}

	function Card(props) {	

		switch(cardColor = cardId) {
			case 0:
			cardColor = 'red';
			break;
			case 1:
			cardColor = 'yellow'; 
			break;
			case 2: 
			cardColor = 'blue';
			break; 
			case 3: 
			cardColor = 'green'; 
			break; 
			case 4: 
			cardColor = 'gray'; 
			break; 
			case 5: 
			cardColor = 'white';
			break; 
			case 6: 
			cardColor = 'black';
			break; 
		}

		return (

			<td onClick={() => cardState()} style ={{backgroundColor: cardColor, border: 'solid 1px white' }}></td>

			);
	}

export default Card; 

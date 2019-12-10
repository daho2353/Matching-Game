import React from 'react'; 


function Card(props) {	
	var cardColor; 

	switch() {
		case 0:
			cardColor = 'red' ;
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

		<td style ={{backgroundColor: cardColor, border: 'solid 1px white' }}></td>

		);
}

export default Card; 

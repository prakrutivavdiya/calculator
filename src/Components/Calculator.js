import React from 'react'; 
import CalculatorTitle from './CalculatorTitle.js'; 
import OutputScreen from './OutputScreen.js'; 
import Button from './Button.js'; 

class Calculator extends React.Component { 
	constructor() { 
		super(); 
		this.state = 
		{ 
			question: '', 
			answer: ''
		} 
		this.handleClick = this.handleClick.bind(this); 
	} 

	handleClick(event){ 

		// get the value from the target element (button) 
		const value = event.target.value; 
		
		switch (value) { 
			case '=': { 

			// if it's an equal sign, use the eval module to evaluate the question ,convert the answer (in number) to String 
			if (this.state.question!=='') 
			{ 
				var ans=''; 
					try
					{ 
						ans = eval(this.state.question); 
					} 
					catch(err) 
					{ 
						this.setState({answer: "Math Error"}); 
					} 
					if (ans===undefined) 
						this.setState({answer: "Math Error"}); 
					else
						this.setState({ answer: ans , question: ''});
				
				break; 
			} 
			
			break;
			} 

			case 'Clear': { 
			this.setState({ question: '', answer: '' }); 
			
			break; 
			} 

			case 'Delete': { 
			var str = this.state.question; 
				str = str.substr(0,str.length-1); 
				this.setState({question: str});
				
				break; 
			} 

			case 'Square': { 
				try
					{ 
						ans = eval(this.state.question); 
					} 
					catch(err) 
					{ 
						this.setState({answer: "Math Error"}); 
					} 
					if (ans===undefined) 
						this.setState({answer: "Math Error"}); 
					else
					{
						ans=String(Math.pow(ans,2));
						this.setState({ question: '', answer: ans }); 
					}
			break; 
			}

			case 'Root': { 
			try
					{ 
						ans = eval(this.state.question); 
					} 
					catch(err) 
					{ 
						this.setState({answer: "Math Error"}); 
					} 
					if (ans===undefined) 
						this.setState({answer: "Math Error"}); 
					else
					{
						ans=String(Math.pow(ans,0.5));
						this.setState({ question: '', answer: ans }); 
					}
			break; 
			} 

			default: { 

				// for every other command, update the answer in the state 
				this.setState({ question: this.state.question += value}) 
				
				break; 
			} 
		} 
	} 


	render() 
	{ 
		return ( 
			<div className="frame"> 
				<CalculatorTitle value="Calculator"/> 
				<div className="mainCalc"> 
					<OutputScreen question={this.state.question} answer={this.state.answer}/> 
					<div className="buttons">
						
						<div className="button-row"> 
							<Button label={'Clear'} handleClick = {this.handleClick} /> 
							<Button label={'Delete'} handleClick = {this.handleClick} /> 
							<Button label={'.'} handleClick = {this.handleClick} /> 
							<Button label={'/'} handleClick = {this.handleClick} /> 
						</div> 

						<div className="button-row"> 
							<Button label={'7'} handleClick = {this.handleClick} /> 
							<Button label={'8'} handleClick = {this.handleClick} /> 
							<Button label={'9'} handleClick = {this.handleClick} /> 
							<Button label={'*'} handleClick = {this.handleClick} /> 
						</div> 

						<div className="button-row"> 
							<Button label={'4'} handleClick = {this.handleClick} /> 
							<Button label={'5'} handleClick = {this.handleClick} /> 
							<Button label={'6'} handleClick = {this.handleClick} /> 
							<Button label={'-'} handleClick = {this.handleClick} /> 
						</div> 

						<div className="button-row"> 
							<Button label={'1'} handleClick = {this.handleClick} /> 
							<Button label={'2'} handleClick = {this.handleClick} /> 
							<Button label={'3'} handleClick = {this.handleClick} /> 
							<Button label={'+'} handleClick = {this.handleClick} /> 
						</div> 

						<div className="button-row"> 
							<Button label={'0'} handleClick = {this.handleClick} /> 
							<Button label={'('} handleClick = {this.handleClick} />
							<Button label={')'} handleClick = {this.handleClick} />
							<Button label={'='} handleClick = {this.handleClick} />							
						</div>

						<div className="button-row"> 
							<Button label={'%'} handleClick = {this.handleClick} /> 
							<Button label={'Square'} handleClick = {this.handleClick} /> 
							<Button label={'Root'} handleClick = {this.handleClick} /> 
							<div id="spaceFiller"></div>
						</div>
					</div> 
				</div> 
			</div> 
		); 
	} 
} 
export default Calculator; 

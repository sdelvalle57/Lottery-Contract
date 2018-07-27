import React, { Component } from 'react';
import { List, Table } from 'semantic-ui-react';

class PlayedNumbers extends Component {
    state = {
        numbers: this.props.numbersPlayed 
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            numbers: nextProps.numbersPlayed,            
        })
    }


    convertTobase10 = (numbers) => {
        let converted = [];
        const items = numbers.map(number => {
            converted.push(this.convertToNumbers(number));
        })
        return converted
    }

    convertToNumbers = (numByte) => {
        let numbersString = "";
        numByte = numByte.split("0x")[1];    
        for(let k = 0; k < numByte.length; k=k+2){
            let number = parseInt((numByte[k]+numByte[k+1]), 16);
            if(number < 10) number = "0"+number;
            numbersString += number +" ";
        }
        return numbersString;
    }

    renderNumber(num) {
        let spanned = [];
        for(let j = 0; j < num.length; j++) {
            spanned.push(<span>{num[j]}</span>);
        }
        return spanned;
    }


    render() {
        let {numbers} = this.state;
        if(numbers && numbers.length > 0) {
            numbers = this.convertTobase10(numbers);
            return (
                <List>
                    {numbers.map((i) => 
                        <List.Item><span>{i}</span></List.Item>)} 
                </List>
            )
        }
        return null;
    }
}
export default PlayedNumbers;

/*
<Table celled textAlign='center'>
                    <Table.Body>
                           
                        <Table.Row>
                            {numbers.map((i) => 
                                <Table.Cell>
                                    <a href='#'>{i}</a>
                                </Table.Cell>)} 
                        </Table.Row>
    
                        
    
                        
                    </Table.Body>
                </Table>
*/
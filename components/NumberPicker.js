import React, { Component } from 'react';
import { Icon, Menu, Table, TableBody } from 'semantic-ui-react'

class NumberPicker extends Component {

    state = {
        cells: [],
        numbers: [],
        numbersObj: [],
        finalNumbers: []
        
    }

    componentDidMount() {
        let cells = [];
        let numbersObj = [];
        for(let j=0; j<9; j++){
            cells[j] = j;
        }
        for(let i=1; i<=100; i++){
            if(i!=100)
                numbersObj[i] = {selected: false};
        }
        this.setState({cells, numbersObj});
    }

    cellClick(item, e) {
        const numbersObj = this.state.numbersObj;
        const numbers = this.state.numbers;
        const index = numbers.indexOf(item);
        if(index > -1){
            numbers.splice(index, 1);
            numbersObj[item].selected = false;
        } else if(numbers.length<4) {
            numbers.push(item);
            numbersObj[item].selected = true;
        }
        this.sortFinalNumbers();
        this.setState({numbersObj, numbers})
        
    }

    checkSelected(item) {
        for(let j = 0; j < this.state.numbers.length; j++){
            if(this.state.numbers[j]==item) return true;
        }
        return false;
    }

    sortFinalNumbers = () =>{
        const finalNumbers = this.state.numbers.sort(function (a, b) {  return a - b;  });
        this.setState({finalNumbers});
        if(finalNumbers.length<4){
            this.props.callback({number4: '', numbers3: []});
            return;
        }
        const number4 = this.convertToBytes(finalNumbers);
        const numbers3 = this.convertEachToBytes(this.k_combinations(finalNumbers, 3));
        this.props.callback(number4, numbers3);
    }

    convertToBytes(numbers) {
        let final='';
		for(let i=0; i < numbers.length; i++){
			let hexNumber = numbers[i].toString(16);
			if(hexNumber.length==1) hexNumber = '0'+hexNumber;
			final+=hexNumber;
        }
        return '0x'+final;
    }

    convertEachToBytes(combs) {
        const combsBytes = [];
        for(let i= 0; i < combs.length; i++){
            combsBytes[i] = this.convertToBytes(combs[i]);
        }
        return combsBytes;
    }

    k_combinations(set, k) {
        let i, j, combs, head, tailcombs;
        if (k > set.length || k <= 0) {
            return [];
        }
        if (k == set.length) {
            return [set];
        }
        if (k == 1) {
            combs = [];
            for (i = 0; i < set.length; i++) {
                combs.push([set[i]]);
            }
            return combs;
        }
        combs = [];
        for (i = 0; i < set.length - k + 1; i++) {
            head = set.slice(i, i + 1);
            tailcombs = this.k_combinations(set.slice(i + 1), k - 1);
            for (j = 0; j < tailcombs.length; j++) {
                let comb = head.concat(tailcombs[j]);
                comb = comb.sort(function (a, b) {  return a - b;  });
                combs.push(comb);
            }

        }
        return combs;
    }

    render() {
        return (
            <Table celled textAlign='center'>
                <Table.Header>
                    <Table.Row>
                    <Table.HeaderCell colSpan='9'>Pick 4 Numbers</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>
                <Table.Body>
                       
                    <Table.Row>
                        {this.state.cells.map((i) => 
                            <Table.Cell 
                                onClick={this.cellClick.bind(this, i+1)}
                                key={i+1} 
                                warning={this.state.numbersObj[i+1].selected}
                                selectable>
                                    <a href='#'>{i+1}</a>
                            </Table.Cell>)} 
                    </Table.Row>

                    <Table.Row>
                        {this.state.cells.map((i) =>
                          
                            <Table.Cell  
                                onClick={this.cellClick.bind(this, i+this.state.cells.length+1)}
                                key={i+this.state.cells.length+1} 
                                warning={this.state.numbersObj[i+this.state.cells.length+1].selected}
                                selectable>
                                    <a href='#'>{i+this.state.cells.length+1}</a>
                            </Table.Cell>)} 
                    </Table.Row>

                    <Table.Row>
                        {this.state.cells.map((i) => 
                            <Table.Cell 
                                onClick={this.cellClick.bind(this, i+this.state.cells.length*2+1)}
                                warning={this.state.numbersObj[i+this.state.cells.length*2+1].selected}                                
                                key={i+this.state.cells.length*2+1}
                                selectable>
                                    <a href='#'>{i+this.state.cells.length*2+1}</a>
                            </Table.Cell>)} 
                    </Table.Row>

                    <Table.Row>
                        {this.state.cells.map((i) => 
                            <Table.Cell 
                                onClick={this.cellClick.bind(this, i+this.state.cells.length*3+1)}
                                warning={this.state.numbersObj[i+this.state.cells.length*3+1].selected}
                                key={i+this.state.cells.length*3+1}
                                selectable>
                                    <a href='#'>{i+this.state.cells.length*3+1}</a>
                            </Table.Cell>)}  
                    </Table.Row>
                    <Table.Row>
                        {this.state.cells.map((i) => 
                            <Table.Cell 
                                onClick={this.cellClick.bind(this, i+this.state.cells.length*4+1)}
                                warning={this.state.numbersObj[i+this.state.cells.length*4+1].selected}
                                key={i+this.state.cells.length*4+1}
                                selectable>
                                    <a href='#'>{i+this.state.cells.length*4+1}</a>
                            </Table.Cell>)}
                    </Table.Row>

                    <Table.Row>
                        {this.state.cells.map((i) => 
                            <Table.Cell 
                                onClick={this.cellClick.bind(this, i+this.state.cells.length*5+1)}
                                warning={this.state.numbersObj[i+this.state.cells.length*5+1].selected}
                                key={i+this.state.cells.length*5+1}
                                selectable>
                                    <a href='#'>{i+this.state.cells.length*5+1}</a>
                            </Table.Cell>)}
                    </Table.Row>

                    <Table.Row>
                        {this.state.cells.map((i) => 
                            <Table.Cell 
                                onClick={this.cellClick.bind(this, i+this.state.cells.length*7+1)}
                                warning={this.state.numbersObj[i+this.state.cells.length*7+1].selected}
                                key={i+this.state.cells.length*7+1}
                                selectable>
                                    <a href='#'>{i+this.state.cells.length*7+1}</a>
                            </Table.Cell>)}
                    </Table.Row>

                    <Table.Row>
                        {this.state.cells.map((i) => 
                            <Table.Cell 
                                onClick={this.cellClick.bind(this, i+this.state.cells.length*8+1)}
                                warning={this.state.numbersObj[i+this.state.cells.length*8+1].selected}
                                key={i+this.state.cells.length*8+1}
                                selectable>
                                    <a href='#'>{i+this.state.cells.length*8+1}</a>
                            </Table.Cell>)}
                    </Table.Row>

                    <Table.Row>
                        {this.state.cells.map((i) => 
                            <Table.Cell 
                                onClick={this.cellClick.bind(this, i+this.state.cells.length*9+1)}
                                warning={this.state.numbersObj[i+this.state.cells.length*9+1].selected}
                                key={i+this.state.cells.length*9+1}
                                selectable>
                                    <a href='#'>{i+this.state.cells.length*9+1}</a>
                            </Table.Cell>)}
                    </Table.Row>

                    <Table.Row>
                        {this.state.cells.map((i) => 
                            <Table.Cell 
                                onClick={this.cellClick.bind(this, i+this.state.cells.length*10+1)}
                                warning={this.state.numbersObj[i+this.state.cells.length*10+1].selected}
                                key={i+this.state.cells.length*10+1}
                                selectable>
                                    <a href='#'>{i+this.state.cells.length*10+1}</a>
                            </Table.Cell>)}
                    </Table.Row>

                    
                </Table.Body>
            
                <Table.Footer>
                    <Table.Row>
                    <Table.HeaderCell colSpan='9'>
                        <Menu floated='right' pagination>
                        
                            <Menu.Item >{this.state.finalNumbers[0]}</Menu.Item>
                            <Menu.Item >{this.state.finalNumbers[1]}</Menu.Item>
                            <Menu.Item >{this.state.finalNumbers[2]}</Menu.Item>
                            <Menu.Item >{this.state.finalNumbers[3]}</Menu.Item>                        
                        </Menu>
                    </Table.HeaderCell>
                    </Table.Row>
                </Table.Footer>
            </Table>
        )
    }
}
export default NumberPicker
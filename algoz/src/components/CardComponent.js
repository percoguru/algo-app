import React, { Component } from 'react';
import Bar from './BarComponent';
import './Card.css';
import { Button } from 'reactstrap';



class Card extends Component {
    constructor(props) {
        var min=10; 
        var max=100;  
        var arr = [];
        var i;
        for(i=0; i<10; i++){
            arr[i] = Math.floor(Math.random() * (+max - +min)) + +min;
        }
        super(props);
        this.state = {
            tosort: arr,
            swapped: 10,
            curr: null,
            sorted: [...arr],
        }

        this.swap = this.swap.bind(this);
        this.compare = this.compare.bind(this);
        this.iter = this.iter.bind(this);
        this.bubble_Sort = this.bubble_Sort.bind(this);
        this.start_Sort = this.start_Sort.bind(this);
    }


    swap = (first_index, second_index) => {
        var a = this.state.tosort
        setTimeout(() => {
            var temp = a[first_index];
            a[first_index] = a[second_index];
            a[second_index] = temp;
        }, 2000)
    }

    compare = (first_index , second_index) => {
        if(this.state.tosort[first_index] > this.state.tosort[second_index]){
            this.swap(first_index, second_index);
        }
    }

    iter = i => {
        this.setState({curr: i});
        setTimeout(() => {
            this.compare(i, i+1);
            i++;
            if(i<10) {
                this.iter(i);
            }
            else if(i==10 && this.isEqual(this.state.tosort, this.state.sorted) === "False"){
                this.iter(0);
            }
            else if(this.isEqual(this.state.tosort, this.state.sorted) === "True"){
                this.setState({ curr: 15 })
                return
            }
        }, 2000)
    }

    isEqual(a, b) 
    {
        for(var i=0;i<a.length;i++) 
        if(a[i]!==b[i]) 
            return "False"; 
            return "True"; 
    }
    bubble_Sort(){
        this.iter(0);
    }
    start_Sort(event){
        var a = this.state.sorted
        var i, j, temp;
        
        for(i=0; i<20-1; i++)
        for(j=0; j<20-i-1; j++)
        {
            if(a[j] > a[j+1])
            {
                temp = a[j]
                a[j] = a[j+1]
                a[j+1] = temp
            }
        }
       this.bubble_Sort();   
        event.preventDefault();
    }


    render() {
        return (
            <div>
            <div className="row" style={{ offset: 3}}>
            <Bar id='0' length={2*this.state.tosort[0]} cu = {this.state.curr}></Bar>
            <Bar id='1' length={2*this.state.tosort[1]} cu = {this.state.curr}></Bar>
            <Bar id='2'  length={2*this.state.tosort[2]} cu = {this.state.curr}></Bar>
            <Bar id='3'  length={2*this.state.tosort[3]} cu = {this.state.curr}></Bar>
            <Bar id='4'  length={2*this.state.tosort[4]} cu = {this.state.curr}></Bar>
            <Bar id='5'  length={2*this.state.tosort[5]} cu = {this.state.curr}></Bar>
            <Bar id='6'  length={2*this.state.tosort[6]} cu = {this.state.curr}></Bar>
            <Bar id='7'  length={2*this.state.tosort[7]} cu = {this.state.curr}></Bar>
            <Bar id='8'  length={2*this.state.tosort[8]} cu = {this.state.curr}></Bar>
            <Bar id='9'  length={2*this.state.tosort[9]} cu = {this.state.curr}></Bar>
            </div>
            <Button color="success" style={{ marginTop: 200, marginLeft: 600}} onClick={this.start_Sort}>Bubble Sort</Button>{' '} 
            </div>
        )
        }
}


export default Card;

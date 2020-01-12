import React, { Component } from 'react';
import Bar from './BarComponent';
import './Card.css';
import { Button, Progress, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { motion } from "framer-motion";
import { Link } from 'react-router-dom';

import algo from "./bubble.JPG";



const spring = {
  type: "spring",
  damping: 10,
  stiffness: 50
};



class Insertion extends Component {
    constructor(props) {
        var min=110; 
        var max=400;  
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
            done: 0
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
        }, 800)
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
            if(i<(10-this.state.done)) {
                this.iter(i);
            }
            else if(this.isEqual(this.state.tosort, this.state.sorted) === "True"){
                this.setState({ curr: 0, done: 10 })
                return
            }
            else if(i==(10-this.state.done) && this.isEqual(this.state.tosort, this.state.sorted) === "False"){
                var t = this.state.done
                t++
                this.setState({ done: t})
                this.iter(0);
            }
        }, 1000)
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
        this.setState({ done: 0 })
       this.bubble_Sort();   
        event.preventDefault();
    }



    render() {
        return(
            <div className="border border-light text-center" style={{ backgroundColor: "#ffffff"}}>
                <Breadcrumb tag="nav" listTag="div">
                    <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
                    <BreadcrumbItem active tag="span">Bubble Sort</BreadcrumbItem>
                </Breadcrumb>
                <div className="container-fluid" >
                    <div className="row" >
                        <div className="col" style={{ backgroundColor: "#ffffff" }}></div>
                        <div className="col-8" style={{ backgroundColor: "#ffffff" }}>
                            <div className="row" style={{ offset: 3, height: 400 }}>
                                {this.state.tosort.map(height => (
                                    <motion.div
                                            key={height}
                                            layoutTransition={spring}
                                            style={{ height: height, top: 399-height, minWidth: 1 }}
                                            className="col"
                                    >
                                        {height-100}
                                    </motion.div>
                                ))}
                            </div>
                            <Progress multi style={{ marginRight: 85, marginLeft: 85, offset: 3, marginTop: 10 }}>
                                    <Progress bar color="warning" value={this.state.curr*10} />
                                    <Progress bar color="white" value={100 -  (this.state.done)*10 - (this.state.curr)*10} />
                                    <Progress bar color="success" value={this.state.done*10} />
                            </Progress>
                        </div>
                        
                        <div className="col" style={{ backgroundColor: "#ffffff" }}></div>
                    </div>
                </div>
                <Button color="success" style={{ marginTop: 100, marginBottom: 50}} onClick={this.start_Sort}>Bubble Sort</Button>{' '} 
                <div className="row">
                    <div className="col">
                        <h4 style={{ fontStyle: "italic" }}>Algorithm</h4>
                            <img src={algo} style={{ marginTop: 50, marginBottom: 50}}></img>
                    </div>
                    <div className="col"></div>
                </div>
            </div>
        )
    }
}

export default Insertion;

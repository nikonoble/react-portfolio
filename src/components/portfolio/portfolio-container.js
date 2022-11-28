import React, { Component } from "react";

import PortfolioItem from './portfolio-item';

export default class PortfolioContainer extends Component {
    constructor() {
        super();

        this.state = {
            pageTitle: "Welcome to my portfolio",
            isLoading: false,
            data: [
                {title: "Quip", category: "eCommerce", slug: 'quip' }, 
                {title: "Eventbrite", category: "Scheduling", slug: 'eventbrite' }, 
                {title: "Safer", category: "Enterprise", slug: 'safe' }, 
                {title: "KloudKustoms", category: "eCommerce", slug: 'kloudkustoms' }
            ] 
        };

        this.handlePageTitleUpdate = this.handlePageTitleUpdate.bind(this);
        this.handleFilter = this.handleFilter.bind(this);
    }

    handleFilter(filter) {
        this.setState({
            data: this.state.data.filter(item => {
                return item.category === filter;
            })
        })
    }

    portfolioItems() {
        return this.state.data.map(item => {
            return <PortfolioItem title={item.title} url={"google.com"} slug={item.slug}/>;
        });
    
    }

    // updates state in react
    handlePageTitleUpdate() {
        this.setState({
            pageTitle: "This is the Updated Page Title"
        });
    }

    render() {
        if (this.state.isLoading) {
            return <div>Loading...</div>;
        }
        
        return (
            <div>
                <h2>{this.state.pageTitle}</h2>

                {this.portfolioItems()}

                <button onClick={() => this.handleFilter('eCommerce')}>eCommerce</button>
                <button onClick={() => this.handleFilter('Scheduling')}>Scheduling</button>
                <button onClick={() => this.handleFilter('Enterprise')}>Enterprise</button>


                <hr/>

                <button onClick={this.handlePageTitleUpdate}>Change Title</button>
            </div>
        )
    }
    
}
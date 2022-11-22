import React, { Component } from "react";

import PortfolioItem from './portfolio-item';

export default class PortfolioContainer extends Component {
    constructor() {
        super();

        console.log("PortfolioContainer has rendered");
    }

    portfolioItems() {
        const data = ["Quip", "Eventbrite", "Safer", "KloudKustoms"]

        return data.map(item => {
            return <PortfolioItem title={item} url={"google.com"} />;
            // return <PortfolioItem />;
            // return <h2>{item}</h2>;
        });
    }

    render() {
        return (
            <div>
                <h2>Portfolio items go here updated...</h2>

                {this.portfolioItems()}
            </div>
        )
    }
}
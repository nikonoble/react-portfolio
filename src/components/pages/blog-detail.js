import React, { Component } from "react";
import axios from "axios";
import ReactHtmlParser from "react-html-parser";

import BlogForm from "../blog/blog-form";
import BlogFeaturedImage from "../blog/blog-featured-image";

export default class BlogDetail extends Component {
    constructor(props) {
        super(props);

        this.state = {
            currentID: this.props.match.params.slug,
            blogItem: {}
        };
        
        this.handleEditClick = this.handleEditClick.bind(this);
    }

    handleEditClick() {
        console.log("handle edit clicked");
        this.setState({ editMode: true });
    }

    getBlogItem() {
        axios.get(`https://nikonoble.devcamp.space/portfolio/portfolio_blogs/${this.state.currentID}`
        )
        .then(response => {
            console.log("response", response);
            this.setState({
                blogItem: response.data.portfolio_blog
            });
        })
        .catch(error => {
            console.log("getBlogItem error", error);
        })
    }

    componentDidMount() {
        this.getBlogItem();
    }

    render() {
        const {
            title,
            content,
            featured_image_url,
            blog_status
        } = this.state.blogItem;


        const contentManager = () => {
            if (this.state.editMode) {
                return <BlogForm />;
        }   else {
        
            return (
                <div className="content-container">
                    <h1 onClick={this.handleEditClick}>{title}</h1>
        
                    <BlogFeaturedImage img={featured_image_url} />
    
                    <div className="content">{ReactHtmlParser(content)}</div>
                </div>
            );
          }
        };
    
        return <div className="blog-container">{contentManager()}</div>;
    }
}



// We are aiming for making it to the guide named:

// Initial Build Out of the Portfolio Detail Component

// before you can switch over to your capstone projects

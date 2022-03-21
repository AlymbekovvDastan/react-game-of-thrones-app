import React, { Component } from 'react';
import GotService from '../../services/gotService';
import ItemList from '../itemList';
import ErrorMessage from '../errorMessage';
import { useNavigate } from 'react-router-dom';

function RenderBooksPage(porps) {
    const navigate = useNavigate();
    return (
        <ItemList 
            onItemSelected={(itemId) => {
                navigate(`${itemId}`)
            }} 
            getData={porps.getData}/>
    )
}

export default class BooksPage extends Component {

    gotService = new GotService();    

    state = {
        error: false
    }

    componentDidCatch() {
        this.setState({error: true})
    }


    render() {
        
        if (this.state.error) {
            return <ErrorMessage/>
        }

        return (
                <RenderBooksPage getData={this.gotService.getAllBooks}/>
        )
    }
}
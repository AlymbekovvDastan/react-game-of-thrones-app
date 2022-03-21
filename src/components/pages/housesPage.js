import React, { Component } from 'react';
import GotService from '../../services/gotService';
import ItemList from '../itemList';
import ErrorMessage from '../errorMessage';
import ItemDetails, {Field} from '../itemDetails';
import RowBlock from '../rowBlock';

export default class HousesPage extends Component {

    gotService = new GotService();

    state = {
        selectedItem: null,
        error: false
    }

    componentDidCatch() {
        this.setState({error: true})
    }

    onItemSelected = (id) => {
        this.setState({
            selectedItem: id
        })
    }

    render() {
        
        if (this.state.error) {
            return <ErrorMessage/>
        }

        const itemList = (
            <ItemList 
                onItemSelected={this.onItemSelected} 
                getData={this.gotService.getAllHouses}/>
        )

        const housDetails = (
            <ItemDetails 
                itemId={this.state.selectedItem}
                getData={this.gotService.getHouse}>
                <Field field='name' label='Name'/>     
                <Field field='region' label='Region'/>
                <Field field='overlord' label='Overlord'/>
                <Field field='title' label='Title'/>
                <Field field='words' label='Words'/>
                <Field field='ancestarWeapons' label='Ancestar weapons'/>
                
            </ItemDetails>
        )

        return (
            <RowBlock left={itemList} right={housDetails}/>
        )
    }
}
import React from 'react';
import GotService from '../../services/gotService';
import ItemDetails, {Field} from '../itemDetails';
import { useParams } from "react-router-dom";


export default function BooksItem () {
    const gotService = new GotService();
    const { bookId } = useParams();
    return (
        <ItemDetails 
            itemId={bookId}
            getData={gotService.getBook}>
            <Field field='name' label='Name'/>
            <Field field='publiser' label='Publiser'/>
            <Field field='released' label='Released'/>
            <Field field='numberOfPages' label='Number of pages'/>
            <Field field='words' label='Words'/>
        </ItemDetails>
    )
}
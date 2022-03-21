import React, {Component} from 'react';
import {Col, Row, Container} from 'reactstrap';
import Header from '../header';
import RandomChar from '../randomChar';
import ErrorMessage from '../errorMessage';
import {CharacterPage, BooksPage, BooksItem, HousesPage} from '../pages';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import './app.css';

export default class App extends Component {

    state = {
        showRandomChar: true,
        selectedChar: null,
        error: false
    }

    componentDidCatch() {
        this.setState({error: true})
    }

    toggleRandomChar = () => {
        this.setState({showRandomChar: !this.state.showRandomChar})
    }

    render() {

        const char = this.state.showRandomChar ? <RandomChar/> : null

        if (this.state.error) {
            return <ErrorMessage/>
        }

        return (
            <BrowserRouter>
                <div className='app'>
                    <Container>
                        <Header />
                    </Container>
                    <Container>
                        <Row>
                            <Col lg={{size: 5, offset: 0}}>
                                {char}
                                <button 
                                    type="button" 
                                    className="btn btn-primary btn-lg" 
                                    onClick={this.toggleRandomChar}>Toggle random character</button>
                            </Col>
                        </Row>
                        <Routes>
                            <Route path='characters' element={<CharacterPage/>}/>
                            <Route path='houses' element={<HousesPage/>}/>
                            <Route path='books' element={<BooksPage/>} /> 
                            <Route path="books/:bookId" element={<BooksItem/>}/>     
                        </Routes>
                    </Container>
                </div>            
            </BrowserRouter> 
        );

    }
    
};

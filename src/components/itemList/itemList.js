import React, {Component} from 'react';
import Spinner from '../spinner';
import './itemList.css';

class ItemList extends Component {

    renderItems(arr) {
        return arr.map((item)=> {
            const {id} = item;
            const label = this.props.renderItem(item);
            return (
                <li
                    key={id}
                    className='list-gruop-item'
                    onClick={() => this.props.onItemSelected(id)}>
                    {label}
                </li>
            )
        })
        
    }

    render() {
        const {data} = this.props;
        
        const items = this.renderItems(data);

        return (
            <ul className="item-list list-group">
                {items}
            </ul>
        );
    }
}

const withData = (View, getData) => {
    return class extends Component {
        state = {
            itemList: null
        }
    
        componentDidMount() {
            getData()   
                .then( (itemList) => {
                    this.setState({itemList})
                })
        }
        
        render() {

            const {data} = this.state;
    
            if (!data) {
                return <Spinner/>
            }
                
            return <View {...this.props} data={data}/>
        }
    }
}

export default withData(ItemList)
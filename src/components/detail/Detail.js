import React, { Component } from 'react';
import {API_URL} from '../../config';
import {handleResponse} from '../../helper';
import './detail.css'

class Detail extends Component {
    state={
        currency:{},
    }

    componentDidMount(){
        const currencyId = this.props.match.params.id;
        
        fetch(`${API_URL}/cryptocurrencies/${currencyId}`)
        .then(handleResponse)
        .then((currency)=>{
            this.setState({
                currency
            })
        })
    }
    render() {
        const {currency} = this.state;
    

        return (
            <div className="Detail">
                <h1 className="Detail-heading">
                    {currency.name} ({currency.symbol})
                </h1>
                    <div className="Detail-container">
                        <div className="Detail-item">
                    Price <span className="Detail-value">$ {currency.price}</span><br/><br/>
                    Rank <span className="Detail-value">{currency.rank}</span>
                        </div>
                    </div>
                
            </div>
        );
    }
}

export default Detail;
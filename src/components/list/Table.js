import React from 'react';
import './table.css'
import PropTypes from 'prop-types'
import {withRouter} from 'react-router-dom'

const Table = ({currencies,renderChangePercent, history}) => {
    
    return (
        <div className="Table-container">
                <table className="Table">
                    <thead>
                        <tr>
                            <th>Crypto-currency</th>
                            <th>Price</th>
                            <th>Market Cap</th>
                            <th>24H Change</th>
                        </tr>
                    </thead>
                    <tbody className="Table-body">
                    {currencies.map(currency => {
                        return (
                            <tr key={currency.id}
                            onClick={()=>history.push(`/currency/${currency.id}`)}>
                                <td><span className="Table-rank">{currency.rank}</span>{currency.name}</td>
                                <td><span className="Table-dollar">$</span>{currency.price}</td>
                                <td><span className="Table-doll ar">$</span>{currency.marketCap}</td>
                                <td>{renderChangePercent(currency.percentChange24h)}</td>
                            </tr>
                        )
                    })}
                    </tbody>
                </table>
            </div>
    );
};

Table.propTypes ={
    currencies: PropTypes.array.isRequired,
    renderChangePercent: PropTypes.func.isRequired,
    history:PropTypes.object.isRequired
}

export default withRouter(Table);
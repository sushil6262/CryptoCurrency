import React, { Component } from 'react';
import { handleResponse } from '../../helper';
import { API_URL } from '../../config'
import Loading from '../common/Loading';
import Table from './Table';
import Pagination from './Pagination'
class List extends Component {
    state = {
        loading: true,
        currency: [],
        error: null,
        totalPages: 0,
        page: 1
    }

    componentDidMount() {
        this.fenchCurriencies()
    }
    renderChangePercent = (percent) => {
        if (percent > 0) {
            return <span className="percent-raised">{percent}% &uarr;</span>
        }
        else if (percent < 0) {
            return <span className="percent-fallen">{percent}% &darr;</span>
        } else {
            return <span>{percent}</span>
        }
    }
    fenchCurriencies=()=>{
        this.setState({ loading: true });
        const { page } = this.state
        fetch(`${API_URL}/cryptocurrencies?page=${page}&perPage=20`)
            .then(handleResponse)
            .then((data) => {
                const {currencies,totalPages} = data
                this.setState({
                    currencies,
                    totalPages,
                    loading: false,
                });
            })
            .catch((error) => {
                this.setState({
                    error: error.errorMessage,
                    loading: false,
                });
            });
    }

    handlePaginationClick=(direction)=>{
        let nextPage = this.state.page; 

        // if(direction === 'next'){
        //     nextPage++
        // }else{
        //     nextPage--
        // }

        nextPage = direction === 'next'? nextPage + 1 : nextPage -1;
        

        this.setState({page:nextPage},()=>{
            this.fenchCurriencies();
        });

    }

    render() {

        const { error, loading, currencies , page, totalPages } = this.state
        if (loading) {
            return (<div className="loading-container"><Loading /></div>)
        }
        if (error) {
            return (<div className="error">{error}</div>)
        }

        return (
            <div>
                <Table currencies={currencies} renderChangePercent={this.renderChangePercent} />
                <Pagination page={page} totalPages={totalPages} handlePaginationClick={this.handlePaginationClick}/>
            </div>
        );
    }
}

export default List;
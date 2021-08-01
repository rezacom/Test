import React from 'react'
import SearchBar from '../components/SearchBar'
import Table from '../components/Table'

export default function Main() {
    return (
        <div className="page">
            <ul className="page__navigation flex">
                <li className="page__navigation_item page__navigation_item-pre">
                    <a href="#">Business</a>
                    {">"}
                </li>
                <li className="page__navigation_item">
                    <a href="#">Product</a>
                </li>
            </ul>

            <SearchBar />

            <Table />
        </div>
    )
}

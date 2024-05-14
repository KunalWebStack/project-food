import React, { useState } from 'react'
import { FaSearch } from "react-icons/fa";

const Navbar = ({ filterItem, menuList, onSearch }) => {
    const [searchTerm, setSearchTerm] = useState('');

    const handleChange = (e) => {
        setSearchTerm(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSearch(searchTerm);
    };

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-dark">
            <div className="container-fluid">
                <a className="navbar-brand font-weight-bold" style={{ color: 'red' }} href="#">FOOD STORE</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="mx-auto navbar-nav">

                        {menuList.map((currEle) => {
                            return (
                                <li className="nav-item ">
                                    <a className="nav-link text-capitalize text-white p-4 active" aria-current="page" href="#" onClick={() => filterItem(currEle)}>{currEle}</a>
                                </li>
                            )
                        })}
                        <li className="mt-4" >
                            <form className="d-flex" onSubmit={handleSubmit}>
                                <input
                                    className="form-control me-3 btn-s"
                                    type="search"
                                    placeholder="Search"
                                    aria-label="Search"
                                    value={searchTerm}
                                    onChange={handleChange}
                                />
                                <button className="btn btn-outline-success" type="submit"><FaSearch /></button>
                               
                            </form>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar

import React from 'react';
import '../../styling/main.css';

const searchBar = props => {
    return (
        <div className="search">
            <div className="search__show-items">
                <p className="search__show-items--pagination">Pagination</p>
            </div>
            
            <form className="search__form open-search">
                <input className="search__form--input" />
                <button className="search__form--button">
                    <svg className="search__form--icon">
                        {/* <use xlink:href="img/sprite.svg#icon-magnifying-glass"></use> */}
                    </svg>
                </button>
            </form>
        </div> 
    )
}

export default searchBar;
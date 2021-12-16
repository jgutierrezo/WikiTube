import React from 'react';
import './styles/SearchBar.css';


class SearchBar extends React.Component {
    state = { searchCriteria: '' };

    onSubmit = event => {
        //So the application do not get refreshed after the user press enter on the search-bar. If the application is refreshed, the search-bar would appear empty again.
        event.preventDefault();
        //Call the callback function that makes request to the YT API
        this.props.searchVideo(this.state.searchCriteria);
    };


    render() {
        return (
            <div className="search">
                <form onSubmit={this.onSubmit}>
                    <div className='searchInputs'>

                        <input className='inputSearchYT'
                            type="text"
                            value={this.state.searchCriteria}
                            placeholder="What are you looking for?"
                            onChange={e => this.setState({ searchCriteria: e.target.value })} 
                        />

                    </div>
                </form>

            </div>
        )
    }

}

export default SearchBar;
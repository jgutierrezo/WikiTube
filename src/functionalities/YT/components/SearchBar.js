import React from 'react';
import './styles/SearchBar.css';
//MaterialUI lib to use the search icon
import SearchIcon from '@mui/icons-material/Search';

class SearchBar extends React.Component {
    state = { searchCriteria: '' };

    onInputChange = (event) => {
        this.setState({ term: event.target.value });
    };


    onSubmit = event => {
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
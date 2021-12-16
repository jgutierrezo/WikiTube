import React, { useState, useEffect } from "react";
import axios from "axios";
import './styles/Wiki.css';


const WikipSearchList = () => {

    const [search, setSearch] = useState('Turtle');
    const [results, setResults] = useState([]);

    //This method will be called every time the search useState variable changes its value. Also, when it is initialized. 
    useEffect(() => {

        const callWikiApi = async () => {
            const { data } = await axios.get('https://en.wikipedia.org/w/api.php', {
                params: {
                    action: 'query',
                    list: 'search',
                    origin: '*',
                    format: 'json',
                    srsearch: search,
                },
            });

            setResults(data.query.search);

        };

        //To call Wikipedia API with the default query
        //This happens because just when the App is first render we do not have results
        if(search && !results.length){
            callWikiApi();
        }else{
            const currentTimeout = setTimeout(() => {
                if (search) {
                    callWikiApi();
                }            
            }, 500);//Timeout in ms to make the API request
    
            return () => {
                //Deletes timeout everytime the user changes something
                //Since is the return of a callback function it is called first everytime the useEffect is called
                clearTimeout(currentTimeout)
            };
        }
    }, [search]);


    const resultsList = results.map((result) => {
        return (
            <div className="wikiItem" key={result.pageid}>
                <div className="link">
                    <a  href={`https://en.wikipedia.org?curid=${result.pageid}`}>Link</a>
                </div>
                <div className="content">
                    <div className="header">
                        {result.title}
                    </div>
                    <br/>
                    <span className="description" dangerouslySetInnerHTML={{ __html: result.snippet }} />{/*XSS vulnerability. I allowed since the application is for practicing purposes */}
                </div>
            </div>
        );
    });






    return (

        <div className="wikiPage">
            <div className="searchBar">
                <form className="form">
                    <label className="wikiSearchBarLabel">Enter search term</label>
                    <br/>
                    <input className="wikiSearchBar" value={search} onChange={(e) => setSearch(e.target.value)} />
                </form>
            </div>
            <div className="elementsList">{resultsList}</div>

        </div>

    );


}

export default WikipSearchList;
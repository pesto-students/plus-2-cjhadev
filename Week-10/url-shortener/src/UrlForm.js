import React, { useState } from 'react';
import ListUrl from './ListUrl';

function UrlForm() {
    const [url, setUrl] = useState(null);
    const [shortUrl, setShortUrl] = useState([]);
    
    const handleSubmit = () => {
        const apiUrl = 'https://api.shrtco.de/v2/shorten?url='  + url;
        fetch(apiUrl)
          .then((response) => response.json())
          .then((data) => {
              setShortUrl([...shortUrl, data["result"]["full_short_link"]])
              setUrl("");
            });
    }

    return(
        <>
            <div class="form-group">
                <p>Paste URL:  <input type="text" value={url} className="form-control"onChange={(e) => {
                    setUrl(e.target.value);
                }}/></p>
                <button class="btn btn-primary" onClick={handleSubmit}>Submit</button>
            </div>
            <hr />
            <ListUrl shortUrl={shortUrl}/>
        </>
    )
}

export default UrlForm;
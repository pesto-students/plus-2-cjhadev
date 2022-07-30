import React, { useEffect, useState } from 'react';

function ListUrl(props) {
    const { shortUrl } = props;

    return(
        <>
            <div className='shortened-urls'>
                <ul class="list-group">       
                {
                    shortUrl.map((url) => {
                        return(
                                                      
                            <li class="list-group-item">{url}</li>
                        )
                    })
                }
                </ul>
            </div>
        </>
    )
}

export default ListUrl;
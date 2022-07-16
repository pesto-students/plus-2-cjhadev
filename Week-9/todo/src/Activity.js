import { isValidInputTimeValue } from '@testing-library/user-event/dist/utils';
import React, { useState, useEffect } from 'react';

function Activity(props) {
    const { newTask } = props;
    const [done, setDone] = useState(false);

    useEffect(() => {
        if(newTask){
            let Todotasks = document.getElementById('Todotasks');
            const li = document.createElement('li');
            li.innerHTML = newTask + `<input type="checkbox" />`;
            Todotasks.append(li);
        }
    })
    const AddtaskToCompleteList = (event) => {
        let inputEl = event.target;
        let li = event.target.parentElement;
        li.removeChild(inputEl)
        document.getElementById('CItems').append(li)
        document.getElementById('Todotasks').removeElement(li)
    }

    

    return (
        <>
            <section className="TodoItems">
                <ul id='Todotasks'>
                    <li>Item 1 <input type="checkbox" className='done' onChange={(event) => AddtaskToCompleteList(event)} /></li>
                    <li>Item 2 <input type="checkbox" className='done' onChange={(event) => AddtaskToCompleteList(event)}/></li>
                    <li>Item 3 <input type="checkbox" className='done' onChange={(event) => AddtaskToCompleteList(event)}/></li>
                </ul>
            </section>
            <section className="CompletedItems">
                <ul id="CItems">
                    <li>Item 1</li>
                    <li>Item 2</li>
                    <li>Item 3</li>
                </ul>
            </section>
        </>
    )
}

export default Activity;
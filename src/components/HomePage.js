import React, { useState } from 'react';
import {Link} from 'react-router-dom';

function HomePage(props) {

    const [name,setName]=useState('')
    
    return (
        <div>
            <br/><h4>quiz app</h4><br/><br/>
            Name : <input className='btn btn-info' type="text" placeholder='enter name' onChange={(e)=>setName(e.target.value)}/><br/><br/>
            <Link to={`/quizpage?${name}`}>
            <button type="submit">start quiz</button>
            </Link>
        </div>
    );
}

export default HomePage;
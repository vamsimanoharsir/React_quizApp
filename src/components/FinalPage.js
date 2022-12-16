import React,{useContext} from 'react';
import {Contexts} from './Contexts'
import {Link} from 'react-router-dom';

function FinalPage(props) {
    let {score,setScore}=useContext(Contexts)
    return (
        <div>
            <br/><br/><div className='btn btn-success'>final marks</div><br/><br/>
            <div className='btn btn-outline-success'>final marks are {score}</div><br/><br/><br/>
            <Link to={'/'}>
                <button class="btn btn-link" type='submit'>start again</button>
            </Link>
        </div>
    );
}

export default FinalPage;
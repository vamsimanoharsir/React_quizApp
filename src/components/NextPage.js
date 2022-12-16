import React,{useState, useContext} from 'react';
import { useNavigate } from 'react-router';
import {Link} from 'react-router-dom';
import {Contexts} from './Contexts'
const querystring=require('query-string')

function NextPage(props) {

    const [option,setOption]=useState('')
    const [final,setFinal]=useState('')
    let {score,setScore}=useContext(Contexts)

    const handleCheck=(ans)=>{
        setOption(ans)
        if(ans=='a')
        {setFinal('true')
        setScore(2)}
    }
    const handleCheck1=(ans)=>{
        setOption(ans)
        setFinal('false')
    }
    const handleCheck2=(ans)=>{
        setOption(ans)
        setFinal('false')
    }
    

    return (
        <div>
            you selected option {option}<br/>
            {final=='true'&&final!=''?'yay! correct answer ':'oops! wrong answer '}
            <h4>wich of the following is a database</h4>
            a)<button className='btn btn-primary' onClick={()=>handleCheck('a')}>hbase</button><br/><br/>
            b)<button className='btn btn-primary' onClick={()=>handleCheck1('b')}>java</button><br/><br/>
            c)<button className='btn btn-primary' onClick={()=>handleCheck2('c')}>cpp</button><br/><br/><br/>
            <Link to={'/submit'}>
                <button class="btn btn-outline-success" type='submit'>next question</button>
            </Link>
            <Link to={'/'}>
                <button class="btn btn-outline-success" type='submit'>start again</button>
            </Link>
        </div>
    );
}

export default NextPage;
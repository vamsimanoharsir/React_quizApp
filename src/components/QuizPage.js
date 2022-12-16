import React, { useContext, useState } from 'react';
import {Link} from 'react-router-dom';
import {Contexts} from './Contexts'
const querystring=require('query-string')


function QuizPage(props) {

    const [option,setOption]=useState('')
    const [final,setFinal]=useState('')
    let {score,setScore}=useContext(Contexts)

    let params=(window.location.search).substring(1)//getting name

    const handleCheck=(ans)=>{
        setOption(ans)
        setFinal('false')
    }
    const handleCheck1=(ans)=>{
        setOption(ans)
        if(ans=='b')//hardcoded the answer
        {setFinal('true')
        setScore(1)
        }
    }
    const handleCheck2=(ans)=>{
        setOption(ans)
        setFinal('false')
    }
    

    return (
        <div>
            you selected option {option}<br/>
            {final=='true'&&final!=''?'yay! correct answer ':'oops! wrong answer '}
            <h4>which is not a programming language?</h4>
            a)<button className='btn btn-primary' onClick={()=>handleCheck('a')}>c</button><br/><br/>
            b)<button className='btn btn-primary' onClick={()=>handleCheck1('b')}>java</button><br/><br/>
            c)<button className='btn btn-primary' onClick={()=>handleCheck2('c')}>cpp</button><br/><br/><br/>
            <Link to={'/nextpage'}>
                <button class="btn btn-outline-success" type='submit'>next question</button>
            </Link>
            <Link to={'/'}>
                <button class="btn btn-outline-success" type='submit'>start again</button>
            </Link>
        </div>
    );
}

export default QuizPage;
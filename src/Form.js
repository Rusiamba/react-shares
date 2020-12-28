import Input from "./Input";
import {useState} from "react";
import { v4 as uuidv4 } from 'uuid';
import  moment from 'moment';

function Form({createWalk}) {
    const [date, setDate] = useState('');
    const [distance, setDistance] = useState('');

    const handleSumbit = (e) => {
        e.preventDefault();
        createWalk({
            date: moment(date, 'DD.MM.YY', true),
            distance: +distance,
            id:uuidv4(),
        })
    }

    return (
        <form className='form' onSubmit={handleSumbit}>
            <Input value={date} name='date' className='text' label='Date(dd.mm.yy)' placeholder='12.07.20'
                   onChange={setDate}/>
            <Input value={distance} name='distance' className='text' label='Traversed km.' placeholder='20.2'
                   onChange={setDistance}/>
            <button className='button' type='submit'>Ok</button>
        </form>
    );
}

export default Form;

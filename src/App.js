import React from 'react';
import Button from './components/button';
import './App.scss';

export default ()=>
(
    <div className="App">
        <div className="buttons">
            <Button size="large" color="pink">버튼</Button>
            <Button>버튼</Button>
            <Button size="small" color="gray">버튼</Button>
        </div>
        <div className="buttons">
            <Button size="large" color="pink">버튼</Button>
            <Button>버튼</Button>
            <Button size="small" color="gray">버튼</Button>
        </div>
        <div className="buttons">
            <Button size="large" color="pink">버튼</Button>
            <Button>버튼</Button>
            <Button size="small" color="gray">버튼</Button>
        </div>
    </div>
)
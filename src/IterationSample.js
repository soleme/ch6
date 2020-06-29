import React, { useState } from 'react';

const IterationSample = () =>{
    //const names = ['눈사람','얼음','눈','바람'];
    //const nameList = names.map(name=><li>{name}</li>);  // key가 없다는 경고 메시지 발생
    /*
        callback : 새로운 배열의 요소를 생성하는 함수로 파라미터는 3가지
        1. curretValue : 현재 처리 하고 있는 요소
        2. index : 현재 처리하고 있는 요소의 index 값
        3. array : 현재 처리하고 있는 원본 배열
    */

    const [names, setNames] = useState([
        {id:1, text:'눈사람'},
        {id:2, text:'얼음'},
        {id:3, text:'눈'},
        {id:4, text:'바람'}
    ]);

    const [inputText, setInputText] = useState('');
    const [nextId, setNextId] = useState(5); // 새로운 항목을 추가할때 사용할 id

    const onChange = e => setInputText(e.target.value);
    const onClick = () =>{
        const nextNames = names.concat({
            id:nextId, // nextId값을 id로 설정하고
            text:inputText
        });
        setNextId(nextId + 1); // nextId값에 1을 더해 준다.
        setNames(nextNames); // names 값을 업데이트 해준다.
        setInputText(''); // inputText를 비운다.
    };

    const onRemove = id => {
        const nextNames = names.filter(name => name.id !== id);
        setNames(nextNames);
    };

    const nameList = names.map(name => <li key={name.id} onDoubleClick={()=>onRemove(name.id)}>{name.text}</li>);
    //const nameList = names.map((name, index)=><li key={index}>{name}</li>); // 콜백함수 index를 넣어주면 경고 사라진다.
    return (<>
    <input value={inputText} onChange={onChange}/>
    <button onClick={onClick}>추가</button>
    <ul>{nameList}</ul>
    </>
    );
}

export default IterationSample;
import {  useState } from 'react';
import './styles.scss';

export default function App() {
    return (
        <>
            <h1>Hello, world!</h1>
            <Counter />
        </>
    );
}

function Counter() {
    const [count, setCount] = useState(0);
    return (
        <button onClick={() => setCount(count + 1)}>
            You clicked me {count} times
        </button>
    );
}

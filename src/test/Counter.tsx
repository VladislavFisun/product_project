import { classNames } from 'shared/lib/classNames/classNames';
import { useRef, useState } from 'react';

interface CounterProps {
    className?: string
}

const Counter = ({ className }: CounterProps) => {
    const [mounted, setMounted] = useState(false);
    const [counter, setCounter] = useState(0);

    let timerId = useRef<ReturnType<typeof setInterval>>(null);
    const handleClick = () => {
        setMounted((prev) => !prev);
        if (timerId.current) {
            clearInterval(timerId.current);
            setCounter(0);
            timerId.current = null;
        } else {
            timerId.current = setInterval(() => {
                setCounter((prev) => prev + 1);
            }, 1000);
        }
    };
    return (
        <div className={classNames('', {}, [className])}>
            <button onClick={handleClick}>{mounted ? 'Stop timer' : 'Start timer'}</button>
            {counter}
        </div>
    );
};

export default Counter;

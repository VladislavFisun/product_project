import React, {
    memo, Suspense, useCallback, useEffect, useState,
} from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTheme } from 'app/providers/ThemeProvider';
import { AppRouter } from 'app/providers/router';
import { Navbar } from 'widgets/Navbar';
import { Sidebar } from 'widgets/Sidebar';
import { useDispatch, useSelector } from 'react-redux';
import { profileActions } from 'entities/Profile';
import { getInit } from 'entities/Profile/model/selectors/profileSelectors';

const TestButton = memo(() => {
    console.log('childe render');

    useEffect(() => {
        console.log('childe effect log');
    }, []);
    return <div>123</div>;
});

const TestComponent = () => {
    const [state, setState] = useState<number>(1);
    const testPromise = new Promise((resolve, reject) => {
        resolve(null);
    });

    const onClick = async () => {
        try {
            await testPromise.then((res) => {
                console.log('First then');
                throw new Error('Then error');
            });
            console.log('try');
            // .catch((e) => console.log(e));
            // .then((res) => console.log('Second then'));
            // .finally(() => console.log('final'));
        } catch (e) {
            console.log('catch finally');
        } finally {
            console.log('finally');
        }
    };

    return (
        <div ref={(el) => console.log(5)}>
            <p>{state}</p>
            <button onClick={onClick}>click</button>
            ;
        </div>
    );
};

function App() {
    const { theme } = useTheme();
    const dispatch = useDispatch();
    const profileInited = useSelector(getInit);

    useEffect(() => {
        dispatch(profileActions.setInit());
    }, [dispatch]);

    return (
        <>
            <div className={classNames('app', {}, [theme])}>
                <Suspense fallback="">
                    <Navbar />
                    <div className="content-page">
                        <Sidebar />
                        {profileInited && <AppRouter />}
                    </div>
                </Suspense>
            </div>
        </>
    );
}

export default App;

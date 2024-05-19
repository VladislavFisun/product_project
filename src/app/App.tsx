import React, { Suspense, useEffect } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTheme } from 'app/providers/ThemeProvider';
import { AppRouter } from 'app/providers/router';
import { Navbar } from 'widgets/Navbar';
import { Sidebar } from 'widgets/Sidebar';
import { useDispatch, useSelector } from 'react-redux';
import { profileActions } from 'entities/Profile';
import { getInit } from 'entities/Profile/model/selectors/profileSelectors';

function App() {
    const { theme } = useTheme();
    const dispatch = useDispatch();
    const profileInited = useSelector(getInit);

    useEffect(() => {
        dispatch(profileActions.setInit());
    }, [dispatch]);

    return (
        <div className={classNames('app', {}, [theme])}>
            <Suspense fallback="">
                <Navbar />
                <div className="content-page">
                    <Sidebar />
                    {profileInited && <AppRouter />}
                </div>
            </Suspense>
        </div>
    );
}

export default App;

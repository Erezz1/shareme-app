import { useEffect } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';

import Pins from '../Pins';
import { UserProfile } from '../../components';
import { fetchUser } from '../../utils/fetchUser';

const HomeNavigation = ({ user }: { user: any }) => {

    const navigate = useNavigate();

    useEffect(() => {
        const user = fetchUser();
        if (!user) navigate('/login');
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <Routes>
            <Route path="/user-profile/:userId" element={ <UserProfile /> } />
            <Route path="/*" element={ <Pins user={ user && user } /> } />
        </Routes>
    );
};

export default HomeNavigation;

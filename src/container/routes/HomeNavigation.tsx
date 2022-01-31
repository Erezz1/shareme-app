import { Route, Routes } from 'react-router-dom';

import { UserProfile } from '../../components';
import Pins from '../Pins';

const HomeNavigation = ({ user }: { user: any }) => {

    return (
        <Routes>
            <Route path="/user-profile/:userId" element={ <UserProfile /> } />
            <Route path="/*" element={ <Pins user={ user && user } /> } />
        </Routes>
    );
};

export default HomeNavigation;

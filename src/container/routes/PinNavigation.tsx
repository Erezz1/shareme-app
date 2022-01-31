import { Dispatch, SetStateAction, useEffect } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';

import { PinDetail, Feed, CreatePin, Search } from '../../components';
import { fetchUser } from '../../utils/fetchUser';

interface Props {
    user: any;
    searchTerm: string;
    setSearchTerm: Dispatch<SetStateAction<string>>;
}

const PinNavigation = ({ user, searchTerm, setSearchTerm }: Props ) => {

    const navigate = useNavigate();

    useEffect(() => {
        const user = fetchUser();
        if (!user) navigate('/login');
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <Routes>
            <Route path="/" element={ <Feed /> } />
            <Route path="/category/:categoryId" element={ <Feed /> } />
            <Route path="/pin-detail/:pinId" element={ <PinDetail user={ user } /> } />
            <Route path="/create-pin" element={ <CreatePin user={ user } /> } />
            <Route path="/search" element={ <Search searchTerm={ searchTerm } setSearchTerm={ setSearchTerm } /> } />
        </Routes>
    );
};

export default PinNavigation;

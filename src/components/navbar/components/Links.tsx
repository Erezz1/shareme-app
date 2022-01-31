import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { IoMdAdd } from 'react-icons/io';

const LinksContainer = styled.div`
    display: flex;
    gap: 0.75rem;
`;

const LinkToUser = styled( Link )`
    display: none;

    @media ( min-width: 768px ) {
        display: block;
    }
`;

const LinkToAdd = styled( Link )`
    background-color: #000;
    color: #fff;
    border-radius: 0.5rem;
    width: 3rem;
    height: 3rem;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const Image = styled.img`
    width: 3rem;
    height: 3rem;
    border-radius: 50%;
`;

const Links = ({ user }: { user: any; }) => {

    return (
        <LinksContainer>
            <LinkToUser to={`user-profile/${ user._id }`}>
                <Image
                    src={ user.image }
                    alt="user"
                />
            </LinkToUser>

            <LinkToAdd to="create-pin">
                <IoMdAdd />
            </LinkToAdd>
        </LinksContainer>
    );
};

export default Links;

import { Link } from 'react-router-dom';
import styled from 'styled-components';

const LinkProfile = styled( Link )`
    display: flex;
    gap: 0.5rem;
    margin-top: 0.5rem;
    align-items: center;
    color: #333;
    text-decoration: none;
`;

const ImageProfile = styled.img`
    width: 2rem;
    height: 2rem;
    border-radius: 50%;
    object-fit: cover;
`;

const NameProfile = styled.span`
    font-weight: bolder;
    text-transform: capitalize;
`;

const Profile = ({ postedBy }: { postedBy: any }) => {

    return (
        <LinkProfile to={`user-profile/${ postedBy?._id }`}>
            <ImageProfile
                src={ postedBy?.image }
                alt="avatar user"
            />
            <NameProfile>{ postedBy?.userName }</NameProfile>
        </LinkProfile>
    );
};

export default Profile;

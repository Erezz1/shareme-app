import styled from 'styled-components';

const UserImage = styled.img`
    width: 2.5rem;
    height: 2.5rem;
    border-radius: 50%;
`;

const UserContainer = styled.div`
    display: flex;
    gap: 0.5rem;
    margin: 0.5rem 0;
    align-items: center;
    background-color: #fff;
    border-radius: 0.5rem;
`;

const User = ({ user }: { user: any; }) => {
    return (
        <UserContainer>
            <UserImage
                src={ user?.image }
                alt="avatar"
            />
            <p style={{ fontWeight: 'bold' }}>{ user?.userName }</p>
        </UserContainer>
    );
};

export default User;

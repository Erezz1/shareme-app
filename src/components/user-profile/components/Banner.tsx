import styled from 'styled-components';

import GoogleLogoutBtn from './GoogleLogoutBtn';

interface Props {
    user: any;
    userId: string;
}

const BannerContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const BannerImage = styled.img`
    width: 100%;
    height: 370px;
    box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);
    object-fit: cover;

    @media ( min-width: 1536px ) {
        height: 510px;
    }
`;

const ProfileImage = styled.img`
    border-radius: 50%;
    width: 5rem;
    height: 5rem;
    margin-top: -2.5rem;
    box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);
    object-fit: cover;

    @media ( min-width: 1280px ) {
        width: 7rem;
        height: 7rem;
    }
`;

const ProfileName = styled.h1`
    font-weight: bold;
    font-size: 1.875rem;
    line-height: 2.25rem;
    text-align: center;
    margin-top: 0.75rem;
    color: #333;
`;

const GoogleLogoutContainer = styled.div`
    position: absolute;
    top: 0;
    z-index: 10;
    right: 0;
    padding: 0.5rem;
`;

const randomImage = `https://source.unsplash.com/1600x900/?nature,photography,tecnology`;

const Banner = ({ user, userId }: Props ) => {

    return (
        <BannerContainer>
            <BannerImage
                src={ randomImage }
                alt="banner-pic"
            />

            <ProfileImage
                src={ user.image }
                alt="profile-pic"
            />

            <ProfileName>{ user.userName }</ProfileName>

            <GoogleLogoutContainer>
                {
                    userId === user._id && <GoogleLogoutBtn />
                }
            </GoogleLogoutContainer>
        </BannerContainer>
    );
};

export default Banner;

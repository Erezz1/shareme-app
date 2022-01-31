import { Dispatch } from 'react';
import styled from 'styled-components';
import { MdDelete } from 'react-icons/md';

interface Props {
    imageAsset: any;
    setImageAsset: Dispatch<any>;
}

const ImageContainer = styled.div`
    position: relative;
    height: 100%;
`;

const ImageUpload = styled.img`
    height: 100%;
    width: 100%;
`;

const ButtonDelete = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    bottom: 0.75rem;
    right: 0.75rem;
    padding: 0.75rem;
    border-radius: 9999px;
    background-color: #fff;
    cursor: pointer;
    font-size: 1.25rem;
    line-height: 1.75rem;
    transition: all 500ms ease-in-out;
    border: none;

    &:hover {
        box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);
    }
`;

const ImageUploaded = ({ imageAsset, setImageAsset }: Props ) => {

    return (
        <ImageContainer>
            <ImageUpload
                src={ imageAsset?.url }
                alt="imagen-subida"
            />

            <ButtonDelete
                type="button"
                onClick={ () => setImageAsset( null ) }
            >
                <MdDelete />
            </ButtonDelete>
        </ImageContainer>
    )
};

export default ImageUploaded;

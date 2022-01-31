import { ChangeEvent } from 'react';
import styled from 'styled-components';
import { AiOutlineCloudUpload } from 'react-icons/ai';

interface Props {
    uploadImage: ( event: ChangeEvent<HTMLInputElement> ) => void;
}

const InputImage = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100%;
`;

const TextContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const TextImageAsset = styled.p`
    font-weight: bold;
    font-size: 1.5rem;
    line-height: 2rem;
`;

const ImageUp = ({ uploadImage }: Props ) => {

    return (
        <label style={{ height: '100%', width: '100%' }}>
            <InputImage>
                <TextContainer>
                    <TextImageAsset>
                        <AiOutlineCloudUpload />
                    </TextImageAsset>
                    <p style={{ fontSize: '1.125rem' }}>Click to upload</p>
                </TextContainer>

                <p
                    style={{
                        marginTop: '8rem',
                        color: 'rgb(156 163 175)',
                    }}
                >Usa imagenes de buena calidad JPG, SVG, PNG, GIF y menores a 20 MB</p>
            </InputImage>

            <input
                type="file"
                name="upload-image"
                onChange={ uploadImage }
                style={{ display: 'none' }}
            />
        </label>
    );
};

export default ImageUp;

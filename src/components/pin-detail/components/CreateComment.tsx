import { Dispatch, SetStateAction } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

interface Props {
    pinDetail: any;
    comment: string;
    setComment: Dispatch<SetStateAction<string>>;
    addComment: () => void;
    addingComment: boolean;
}

const CreateCommentContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    margin-top: 1.5rem;
    gap: 0.75rem;
    align-items: center;
`;

const CreateCommentImage = styled.img`
    width: 2.5rem;
    height: 2.5rem;
    border-radius: 50%;
    cursor: pointer;
`;

const CreateCommentInput = styled.input`
    flex: 1 1 0%;
    border: 2px solid rgb(243 244 246);
    padding: 0.5rem;
    border-radius: 1.5rem;
    outline: none;

    &:focus {
        border: 2px solid rgb(209 213 219);
    }
`;

const CreateCommentButton = styled.button`
    background-color: rgb(239 68 68);
    color: #fff;
    border-radius: 9999px;
    border: none;
    padding: 0.5rem 1.25rem;
    font-weight: bolder;
    font-size: 1rem;
    cursor: pointer;
`;

const CreateComment = ({ pinDetail, comment, setComment, addComment, addingComment }: Props ) => {

    return (
        <CreateCommentContainer>
            <Link to={`/user-profile/${ pinDetail.postedBy?._id }`}>
                <CreateCommentImage
                    src={ pinDetail.postedBy?.image }
                    alt="avatar user"
                />
            </Link>
            <CreateCommentInput
                type="text"
                placeholder="Agrega un comentario..."
                value={ comment }
                onChange={ e => setComment( e.target.value ) }
            />
            <CreateCommentButton
                type="button"
                onClick={ addComment }
            >
                {
                    addingComment 
                    ? 'Publicando comentario...'
                    : 'Comentar'
                }
            </CreateCommentButton>
        </CreateCommentContainer>
    );
};

export default CreateComment;

import { Link } from 'react-router-dom';
import styled from 'styled-components';

const ContainerComments = styled.div`
    max-height: 370px;
    overflow-y: auto;
`;

const Comment = styled.div`
    display: flex;
    gap: 0.5rem;
    align-items: center;
    background-color: #fff;
    border-radius: 1.5rem;
`;

const CommentImage = styled.img`
    width: 2.5rem;
    height: 2.5rem;
    border-radius: 50%;
    cursor: pointer;
`;

const CommentContainer = styled.div`
    display: flex;
    flex-direction: column;
    color: #333;
`;

const ListComments = ({ pinDetail }: { pinDetail: any }) => {

    return (
        <ContainerComments>
            {
                pinDetail?.comments?.map(( comment: any, i: number ) => (
                    <Comment key={ i }>
                        <Link to={`/user-profile/${ comment.postedBy?._id }`}>
                            <CommentImage
                                src={ comment.postedBy?.image }
                                alt="user-profile"
                            />
                        </Link>
                        <CommentContainer>
                            <p style={{ fontWeight: 'bold', fontSize: '0.9rem' }}>{ comment.postedBy?.userName }</p>
                            <p style={{ fontSize: '1rem' }}>{ comment.comment }</p>
                        </CommentContainer>
                    </Comment>
                ))
            }
        </ContainerComments>
    );
};

export default ListComments;

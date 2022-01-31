import { Dispatch, SetStateAction } from 'react';
import styled from 'styled-components';

interface Props {
    setText: Dispatch<SetStateAction<string>>;
    setActiveBtn: Dispatch<SetStateAction<string>>;
    activeBtn: string;
    loading: boolean;
}

const Container = styled.div`
    text-align: center;
    margin-bottom: 1.75rem;
`;

const Button = styled.button`
    border: none;
    padding: 0.5rem;
    border-radius: 9999rem;
    width: 5rem;
    cursor: pointer;

    &.active {
        background-color: rgb(220 38 38);
        color: #fff;
    }

    &.not-active {
        background-color: ${ props => props.theme.textColor.primary };
        margin-right: 1rem;
        color: #000;

        &:hover { text-decoration: underline; }
    }
`;

const ButtonsContainer = ({ setText, setActiveBtn, activeBtn, loading }: Props ) => {

    return (
        <Container>
            <Button
                type="button"
                onClick={( event: any  ) => {
                    setText( event.target.textContent );
                    setActiveBtn('creados');
                }}
                className={ 
                    activeBtn === 'creados'
                    ? 'active'
                    : 'not-active'
                }
                disabled={ loading }
            >
                Creados
            </Button>

            <Button
                type="button"
                onClick={( event: any  ) => {
                    setText( event.target.textContent );
                    setActiveBtn('guardados');
                }}
                className={ 
                    activeBtn === 'guardados'
                    ? 'active'
                    : 'not-active'
                }
                disabled={ loading }
            >
                Guardados
            </Button>
        </Container>
    );
};

export default ButtonsContainer;

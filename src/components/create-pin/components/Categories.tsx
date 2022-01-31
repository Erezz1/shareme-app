import { Dispatch, SetStateAction } from 'react';
import styled from 'styled-components';

import { categories } from '../../../utils/data';

interface Props {
    category: string;
    setCategory: Dispatch<SetStateAction<string>>;
}

const TextCategory = styled.p`
    margin-bottom: 1rem;
    font-weight: bolder;
    font-size: 1.125rem;
`;

const SelectCategory = styled.select`
    border: none;
    width: 80%;
    font-size: 1rem;
    border-bottom: 2px solid rgb(229 231 235);
    outline: none;
    border-radius: 0.375rem;
    cursor: pointer;
    padding-bottom: 0.5rem;
    text-transform: capitalize;
`;

const OptionCategory = styled.option`
    font-size: 1rem;
    border: none;
    text-transform: capitalize;
    background-color: #fff;
    color: #333;
`;

const Categories = ({ category, setCategory }: Props ) => {

    return (
        <>
            <TextCategory>Elige una categoria para el Pin.</TextCategory>

            <SelectCategory
                onChange={ event => setCategory( event.target.value ) }
                value={ category }
            >
                <OptionCategory value="other">Elige una categoria</OptionCategory>

                {
                    categories.map( category => (
                        <OptionCategory
                            key={ category.name }
                            value={ category.name }
                        >
                            { category.name }
                        </OptionCategory>
                    ))
                }
            </SelectCategory>
        </>
    );
};

export default Categories;

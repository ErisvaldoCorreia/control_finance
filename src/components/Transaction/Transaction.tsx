import React from 'react';

import {
    Container,
    Title,
    Amount,
    InfoFooter,
    Category,
    Icon,
    CategoryName,
    DateTransaction,
} from './styles';

export function Transaction(){
    return (
        <Container>
            <Title>Desenvolvimento de Site</Title>
            <Amount>R$ 1.200,00</Amount>
            <InfoFooter>
                <Category>
                    <Icon name='dollar-sign' />
                    <CategoryName>Vendas</CategoryName>
                </Category>
                <DateTransaction>10/11/2020</DateTransaction>
            </InfoFooter>
        </Container>
    )
};

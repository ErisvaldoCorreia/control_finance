import React from 'react';
import { 
    Container,
    Header,
    Title,
    Icon,
    Content,
    Amount,
    InfoTransactions,
} from './styles';

export function Cards() {
    return (
        <Container>
            <Header>
                <Title>Entrada</Title>
                <Icon name='arrow-up-circle' />
            </Header>

            <Content>
                <Amount>R$ 10.000,00</Amount>
                <InfoTransactions>
                    Último depósito realizado em 17 de jun!
                </InfoTransactions>
            </Content>
        </Container>
    );
}

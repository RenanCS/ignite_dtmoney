
import { useEffect } from 'react';
import { GetTransactionsAsync } from '../../services/transectionsService';
import { Container } from './styles';

export function TransactionsTable() {
    
    const transactionsAsync = async () => {
        const novoValor = await GetTransactionsAsync();
        return novoValor;
    }
    
    useEffect(() => {
        transactionsAsync();
    }, []);

    return (
        <Container>
            <table>
                <thead>
                    <tr>
                        <th>Título</th>
                        <th>Valor</th>
                        <th>Categoria</th>
                        <th>Data</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Desenvolvimento Web</td>
                        <td className="deposit">R$ 1.000,00</td>
                        <td>Desenvolvimento</td>
                        <td>20/02/2021</td>
                    </tr>
                    <tr>
                        <td>Desenvolvimento Web</td>
                        <td className="withdraw">-R$ 500,00</td>
                        <td>Desenvolvimento</td>
                        <td>20/02/2021</td>
                    </tr>


                </tbody>
            </table>

        </Container>
    );
}
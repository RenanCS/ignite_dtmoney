
import { useEffect, useState } from 'react';
import { GetTransactionsAsync } from '../../services/transectionsService';
import { FormatAmount, FormatDate } from '../../Util/formater';
import { AccountProps } from '../NewTransactionModal/index';
import { Container } from './styles';

export function TransactionsTable() {

    const [transactions, setTransactions] = useState<AccountProps[]>([]);

    const transactionsAsync = async () => {
        const novoValor = await GetTransactionsAsync();
        setTransactions(novoValor);
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
                    {
                        transactions.map((transaction: AccountProps) => {
                            return (<tr key={transaction.id}>
                                <td>{transaction.title}</td>
                                <td className={transaction.type}>{FormatAmount(transaction.amount)}</td>
                                <td>{transaction.category}</td>
                                <td>{FormatDate(transaction.createdAt)}</td>
                            </tr>
                            )
                        })}
                </tbody>
            </table>

        </Container>
    );
}
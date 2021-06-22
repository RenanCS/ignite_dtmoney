
import { Transactions, useTransactions } from '../../hooks/useTransactions';
import { FormatAmount, FormatDate } from '../../helper/formater';
import { Container } from './styles';

export function TransactionsTable() {
    const {transactions} = useTransactions();
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
                        transactions.map((transaction: Transactions) => {
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
import { createContext, ReactNode, useContext, useEffect, useState } from 'react';
import { getTransactionsAsync, saveTransactionAsync } from '../services/transectionsService';

export interface Transactions {
  id: number;
  title: string,
  amount: number,
  category: string,
  type: "deposit" | 'withdraw',
  createdAt: Date,
}

export type TransactionInput = Omit<Transactions, 'id'>;

export interface TransactionsProviderProps {
  children: ReactNode;
}

interface TransactionContextData {
  transactions: Transactions[];
  saveTransaction: (transaction: TransactionInput) => Promise<boolean>;
}

export const TransactionsContext = createContext<TransactionContextData>({} as TransactionContextData);

export function TransactionsProvider({ children }: TransactionsProviderProps) {
  const [transactions, setTransactions] = useState<Transactions[]>([]);

  const transactionsAsync = async () => {
    const novoValor = await getTransactionsAsync();
    setTransactions(novoValor);
  }

  useEffect(() => {
    transactionsAsync();
  }, []);


  async function saveTransaction(newTransaction: TransactionInput) {
    const response = await saveTransactionAsync(newTransaction);
    const { transaction } = response.data;
    setTransactions([...transactions, transaction]);
    return response.status > 200
  }

  return (
    <TransactionsContext.Provider value={{ transactions, saveTransaction }}>
      {children}
    </TransactionsContext.Provider>
  )

}

export function useTransactions(){
  const context = useContext(TransactionsContext);
  return context;
}
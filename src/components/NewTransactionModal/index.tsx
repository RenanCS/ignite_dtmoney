
import React, { FormEvent, useState } from 'react';
import Modal from 'react-modal';
import closeImg from '../../assets/close.svg';
import incomeImg from '../../assets/income.svg';
import outcomeImg from '../../assets/outcome.svg';
import { SaveTransaction } from '../../services/transectionsService';
import { Container, TransactionTypeContainer, TransactionTypeRadioBox } from './styles';

Modal.setAppElement('#root');

interface NewTransactionModalProps {
    isOpen: boolean;
    onRequestClose: () => void;
}

export interface AccountProps {
    id: number;
    title: string,
    amount: number,
    category: string,
    type: "deposit" | 'withdraw',
    createdAt: Date,
}

export function NewTransactionModal({ isOpen, onRequestClose }: NewTransactionModalProps) {
    const [title, setTitle] = useState<string>('');
    const [amount, setAmount] = useState(0);
    const [category, setCategory] = useState<string>('')
    const [type, setType] = useState<string>('deposit');

    async function handleCreateNewTransaction(event: FormEvent) {
        event.preventDefault();
        const data = {title, amount, category, type,  createdAt: new Date()} as AccountProps;
        const save = await SaveTransaction(data);
        if(save){
            
        }
    }

    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={onRequestClose}
            overlayClassName="react-modal-overlay"
            className="react-modal-content">
            <button
                type="button"
                onClick={onRequestClose}
                className="react-modal-close">
                <img
                    src={closeImg}
                    alt="Fechar modal"></img>
            </button>
            <Container onSubmit={handleCreateNewTransaction}>
                <h2> Cadastrar Transação</h2>
                <input placeholder="Título" value={title} onChange={event => setTitle(event.target.value)} />
                <input placeholder="Valor" type="number" value={amount} onChange={event => setAmount(Number(event.target.value))}  />
                <TransactionTypeContainer>
                    <TransactionTypeRadioBox
                        isActive={type === 'deposit'}
                        activeColor="green"
                        type="button"
                        onClick={() => setType('deposit')}>
                        <img src={incomeImg} alt="Entrada" />
                        <span>Entrada</span>
                    </TransactionTypeRadioBox>
                    <TransactionTypeRadioBox
                        isActive={type === 'withdraw'}
                        activeColor="red"
                        type="button"
                        onClick={() => setType('withdraw')}>
                        <img src={outcomeImg} alt="Saída" />
                        <span>Saída</span>
                    </TransactionTypeRadioBox>
                </TransactionTypeContainer>
                <input placeholder="Categoria" value={category} onChange={event => setCategory(event.target.value)} />
                <button type="submit" >Cadastrar</button>
            </Container>
        </Modal>
    );
}
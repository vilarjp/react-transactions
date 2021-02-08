import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

import ErrorMessage from '../../../../components/ErrorMessage';
import Input from '../../../../components/Input';
import Button from '../../../../components/Button';

import { transactionSchema } from './transactionSchema';

import * as SC from './styles';

function TransactionForm({ onSubmit, isLoading, isError }) {
  const [state, setState] = useState({
    credit_card_holder_name: '',
    buyer_document: '',
    credit_card_number: '',
    credit_card_expiration_date: '',
    credit_card_cvv: '',
    amount: 0,
  });
  const [errors, setErrors] = useState({});
  const [validationError, setValidationError] = useState(null);
  const { push } = useHistory();

  const validateForm = async () => {
    let isValid = true;

    try {
      await transactionSchema.validate(state, { abortEarly: false });
      setErrors({});
      setValidationError(null);
    } catch (e) {
      isValid = false;
      setValidationError(e.errors[0]);
      Object.entries(e.value).forEach((value) => {
        const [keyName, entryValue] = value;

        const errorKeyName = `${keyName}Error`;

        if (!entryValue) {
          setErrors((prevState) => ({
            ...prevState,
            [errorKeyName]: 'Campo obrigatório',
          }));
        } else {
          setErrors((prevState) => ({
            ...prevState,
            [errorKeyName]: '',
          }));
        }
      });
    }

    return isValid;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (await validateForm()) {
      const response = await onSubmit({
        ...state,
        amount: parseInt(state.amount),
      });
      if (response) push('/');
    }
  };

  return (
    <SC.FormWrapper onSubmit={handleSubmit}>
      <SC.FormContent>
        <Input
          initialValue={state.credit_card_holder_name}
          onInput={(value) =>
            setState((prevState) => ({
              ...prevState,
              credit_card_holder_name: value,
            }))
          }
          placeholder={'Nome da pessoa compradora'}
          error={errors.credit_card_holder_nameError}
        />
        <Input
          initialValue={state.buyer_document}
          onInput={(value) =>
            setState((prevState) => ({ ...prevState, buyer_document: value }))
          }
          placeholder={'CPF'}
          mask={'999.999.999-99'}
          error={errors.buyer_documentError}
        />
        <Input
          initialValue={state.credit_card_number}
          onInput={(value) =>
            setState((prevState) => ({
              ...prevState,
              credit_card_number: value,
            }))
          }
          placeholder={'N° do cartão'}
          mask={'9999 9999 9999 9999'}
          error={errors.credit_card_numberError}
        />
        <SC.FormCreditCard>
          <Input
            initialValue={state.credit_card_expiration_date}
            onInput={(value) =>
              setState((prevState) => ({
                ...prevState,
                credit_card_expiration_date: value,
              }))
            }
            placeholder={'Data de expiração'}
            mask={'99/99'}
            error={errors.credit_card_expiration_dateError}
          />
          <Input
            initialValue={state.credit_card_cvv}
            onInput={(value) =>
              setState((prevState) => ({
                ...prevState,
                credit_card_cvv: value,
              }))
            }
            placeholder={'CVV'}
            mask={'999'}
            error={errors.credit_card_cvvError}
          />
        </SC.FormCreditCard>
        <Input
          isMoney={true}
          initialValue={state.amount}
          onInput={(value) =>
            setState((prevState) => ({
              ...prevState,
              amount: value,
            }))
          }
          placeholder={'Valor da transação'}
          error={errors.amountError}
        />

        {isError && (
          <ErrorMessage>
            Ops... ocorreu um erro no nosso sistema :( tente recarregar a pagina
            ou criar a transação novamente
          </ErrorMessage>
        )}

        {validationError && <ErrorMessage>{validationError}</ErrorMessage>}
      </SC.FormContent>
      <Button fullWidth disabled={isLoading}>
        {isLoading ? 'Carregando...' : 'Criar transação'}
      </Button>
    </SC.FormWrapper>
  );
}

export default TransactionForm;

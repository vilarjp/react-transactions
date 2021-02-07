import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

import ErrorMessage from '../../../../components/ErrorMessage';
import Input from '../../../../components/Input';
import Button from '../../../../components/Button';

import * as SC from './styles';

function TransactionForm({ onSubmit, isLoading, isError }) {
  const [state, setState] = useState({
    credit_card_holder_name: '',
    buyer_document: '',
    credit_card_number: '',
    credit_card_expiration_date: '',
    credit_card_cvv: '',
    amount: '',
  });
  const [errors, setErrors] = useState({});
  const { push } = useHistory();

  const validateForm = () => {
    let isValid = true;

    Object.entries(state).forEach((value) => {
      const [keyName, entryValue] = value;

      const errorKeyName = `${keyName}Error`;

      if (!entryValue) {
        isValid = false;
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

    return isValid;
  };

  const formatValuesBeforeSubmit = async () => {
    const { credit_card_holder_name, ...valuesToFormat } = state;

    Object.entries(valuesToFormat).forEach(([key, value]) => {
      valuesToFormat[key] = value.replace(/\D/g, '');
    });

    const response = await onSubmit({
      ...valuesToFormat,
      credit_card_holder_name,
    });

    if (response) push('/');
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (validateForm()) {
      formatValuesBeforeSubmit();
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
          mask={'CPF'}
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
          mask={'creditCard'}
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
            mask={'cardExpiration'}
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
            mask={'CVV'}
            error={errors.credit_card_cvvError}
          />
        </SC.FormCreditCard>
        <Input
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
      </SC.FormContent>
      <Button fullWidth disabled={isLoading}>
        {isLoading ? 'Carregando...' : 'Criar transação'}
      </Button>
    </SC.FormWrapper>
  );
}

export default TransactionForm;

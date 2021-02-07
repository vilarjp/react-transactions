import React, { useState } from 'react';

import ErrorMessage from '../../../../components/ErrorMessage';
import Input from '../../../../components/Input';
import Button from '../../../../components/Button';

import * as SC from './styles';

function TransactionForm() {
  const [state, setState] = useState({
    name: '',
    cpf: '',
    cardNumber: '',
    cardExpiration: '',
    cvv: '',
    value: '',
  });

  const [errors, setErrors] = useState({
    nameError: '',
    cpfError: '',
    cardNumberError: '',
    cardExpirationError: '',
    cvvError: '',
    valueError: '',
  });

  const validateForm = () => {
    let isValid = true;

    Object.entries(state).forEach((value) => {
      const [keyName, entryValue] = value;

      const errorKeyName = `${keyName}Error`;

      if (!entryValue) {
        isValid = false;
        setErrors((prevState) => ({
          ...prevState,
          [errorKeyName]: 'Preencha o campo',
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

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(validateForm());
  };

  return (
    <SC.FormWrapper onSubmit={handleSubmit}>
      <ErrorMessage>
        Ocorreu um erro ao criar a transação :( por favor tente novamente
      </ErrorMessage>
      <div>
        <Input
          initialValue={state.name}
          onInput={(value) =>
            setState((prevState) => ({ ...prevState, name: value }))
          }
          placeholder={'Nome da pessoa compradora'}
          name={'name'}
          error={errors.nameError}
        />
        <Input
          initialValue={state.cpf}
          onInput={(value) =>
            setState((prevState) => ({ ...prevState, cpf: value }))
          }
          placeholder={'CPF'}
          mask={'CPF'}
          error={errors.cpfError}
        />
        <Input
          initialValue={state.cardNumber}
          onInput={(value) =>
            setState((prevState) => ({ ...prevState, cardNumber: value }))
          }
          placeholder={'N° do cartão'}
          mask={'creditCard'}
          error={errors.cardNumberError}
        />
        <SC.FormCreditCard>
          <Input
            initialValue={state.cardExpiration}
            onInput={(value) =>
              setState((prevState) => ({ ...prevState, cardExpiration: value }))
            }
            placeholder={'Data de expiração'}
            mask={'cardExpiration'}
            error={errors.cardExpirationError}
          />
          <Input
            initialValue={state.cvv}
            onInput={(value) =>
              setState((prevState) => ({ ...prevState, cvv: value }))
            }
            placeholder={'CVV'}
            mask={'CVV'}
            error={errors.cvvError}
          />
        </SC.FormCreditCard>
        <Input
          initialValue={state.value}
          onInput={(value) =>
            setState((prevState) => ({
              ...prevState,
              value: value,
            }))
          }
          placeholder={'Valor da transação'}
          error={errors.valueError}
        />
      </div>
      <Button fullWidth>Criar transação</Button>
    </SC.FormWrapper>
  );
}

export default TransactionForm;

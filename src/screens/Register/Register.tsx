import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Modal } from "react-native";

import {
  Button,
  IconButton,
  InputController,
  Category,
} from "../../components";
import { CategorySelect } from "../CategorySelect/CategorySelect";

import {
  Container,
  Header,
  Title,
  Form,
  Fields,
  TransactionsButtons,
} from "./styles";

interface FormData {
  name: string;
  amount: string;
}

export function Register() {
  const { control, handleSubmit } = useForm();
  const [selectedTransaction, setSelecetedTransaction] = useState("");
  const [modalCategory, setModalCategory] = useState(false);
  const [category, setCategory] = useState({
    key: "category",
    name: "Categoria",
  });

  const handleSetTransactionSelected = (type: "income" | "outcome") => {
    setSelecetedTransaction(type);
  };

  const handleRegister = (form: FormData) => {
    const data = {
      name: form.name,
      amount: form.amount,
      selectedTransaction,
      category: category.key,
    };

    console.log(data);
  };

  return (
    <Container>
      <Header>
        <Title>Cadastro</Title>
      </Header>

      <Form>
        <Fields>
          <InputController
            name="name"
            control={control}
            placeholder="Nome da Transação"
          />
          <InputController
            name="amount"
            control={control}
            placeholder="Valor da Transação"
          />

          <TransactionsButtons>
            <IconButton
              title="Entrada"
              type="income"
              onPress={() => handleSetTransactionSelected("income")}
              isActive={selectedTransaction === "income"}
            />
            <IconButton
              title="Saída"
              type="outcome"
              onPress={() => handleSetTransactionSelected("outcome")}
              isActive={selectedTransaction === "outcome"}
            />
          </TransactionsButtons>

          <Category
            onPress={() => setModalCategory(true)}
            title={category.name}
          />
        </Fields>

        <Button onPress={handleSubmit(handleRegister)} title="Enviar" />
      </Form>

      <Modal visible={modalCategory}>
        <CategorySelect
          category={category}
          setCategory={setCategory}
          onClose={() => setModalCategory(false)}
        />
      </Modal>
    </Container>
  );
}

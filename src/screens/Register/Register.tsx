import React, { useState } from "react";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { Modal, Keyboard, TouchableWithoutFeedback, Alert } from "react-native";

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

const schema = Yup.object().shape({
  name: Yup.string().required("O nome é obrigatório"),
  amount: Yup.number()
    .typeError("O valor deve ser um número")
    .required("O valor é obrigatório")
    .positive("O valor deve ser positivo"),
});

export function Register() {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

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
    if (!selectedTransaction)
      return Alert.alert("Selecione um tipo de transação");
    if (category.key === "category")
      return Alert.alert("Selecione uma categoria");

    const data = {
      name: form.name,
      amount: form.amount,
      selectedTransaction,
      category: category.key,
    };

    console.log(data);
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
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
              autoCapitalize="sentences"
              autoCorrect={false}
              error={errors.name && errors.name.message}
            />
            <InputController
              name="amount"
              control={control}
              placeholder="Valor da Transação"
              keyboardType="numeric"
              error={errors.amount && errors.amount.message}
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
    </TouchableWithoutFeedback>
  );
}

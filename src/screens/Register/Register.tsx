import React, { useState } from "react";
import { Modal, Keyboard, TouchableWithoutFeedback, Alert } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import uuid from "react-native-uuid";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { useNavigation } from "@react-navigation/native";

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

const SCHEMA = Yup.object().shape({
  name: Yup.string().required("O nome é obrigatório"),
  amount: Yup.number()
    .typeError("O valor deve ser um número")
    .required("O valor é obrigatório")
    .positive("O valor deve ser positivo"),
});

const DATA_KEY = "@controlFinance:transactions_collection";

export function Register() {
  const [selectedTransaction, setSelecetedTransaction] = useState("");
  const [modalCategory, setModalCategory] = useState(false);
  const [category, setCategory] = useState({
    key: "category",
    name: "Categoria",
  });

  const {
    control,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(SCHEMA),
  });

  const navigation = useNavigation();

  const handleSetTransactionSelected = (type: "income" | "outcome") => {
    setSelecetedTransaction(type);
  };

  const handleRegister = async (form: FormData) => {
    if (!selectedTransaction)
      return Alert.alert("Selecione um tipo de transação");
    if (category.key === "category")
      return Alert.alert("Selecione uma categoria");

    // Dados de uma transação que iremos gravar
    const newTransaction = {
      id: String(uuid.v4()),
      name: form.name,
      amount: form.amount,
      selectedTransaction,
      category: category.key,
      date: new Date(),
    };

    // Salvando no Storage do Dispositivo
    try {
      const data = await AsyncStorage.getItem(DATA_KEY);

      const currentData = data ? JSON.parse(data) : [];
      const newDataToStorage = [...currentData, newTransaction];

      await AsyncStorage.setItem(DATA_KEY, JSON.stringify(newDataToStorage));

      // Limpando os campos após salvar os dados.
      reset();
      setSelecetedTransaction("");
      setCategory({
        key: "category",
        name: "Categoria",
      });

      //@ts-ignore
      navigation.navigate("Listagem");
    } catch (error) {
      Alert.alert("Não foi possivel salvar os dados");
    }
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

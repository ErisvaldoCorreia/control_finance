import React from "react";
import { Control, Controller } from "react-hook-form";
import { TextInputProps, View, Text } from "react-native";

import { Input } from "../Input/Input";

interface InputControllerProps extends TextInputProps {
  control: Control;
  name: string;
  error?: string;
}

export function InputController({
  control,
  name,
  error,
  ...rest
}: InputControllerProps) {
  return (
    <View style={{ width: "100%" }}>
      {error && (
        <Text
          style={{
            margin: 8,
            fontSize: 13,
            color: "red",
          }}
        >
          {error}
        </Text>
      )}
      <Controller
        control={control}
        render={({ field: { onChange, value } }) => (
          <Input onChangeText={onChange} value={value} {...rest} />
        )}
        name={name}
      />
    </View>
  );
}

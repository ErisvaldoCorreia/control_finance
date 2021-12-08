import React from "react";
import { Control, Controller } from "react-hook-form";
import { TextInputProps, View } from "react-native";

import { Input } from "../Input/Input";

interface InputControllerProps extends TextInputProps {
  control: Control;
  name: string;
}

export function InputController({
  control,
  name,
  ...rest
}: InputControllerProps) {
  return (
    <View style={{ width: "100%" }}>
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

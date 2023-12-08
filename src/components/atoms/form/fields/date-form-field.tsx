"use client";
import { TuiDatePicker } from "nextjs-tui-date-picker";
//import { DatePicker } from "@mui/lab";
import { TextField, type TextFieldProps } from "@mui/material";
import { useFormContext } from "react-hook-form";
import { SetStateAction, useState } from "react";

interface DateFormFieldProps extends FormField {
  label: string;
  name: string;
}

const DateFormField = ({ name, label }: DateFormFieldProps) => {
  // const { register } = useFormContext();

  return (
    <div>
      <TuiDatePicker
        // {...register(name)}
        handleChange={(date) => {
          console.log(date);
        }}
        date={new Date("2023-01-01")}
        inputWidth={140}
        fontSize={16}
      />
    </div>
  );
};

export default DateFormField;

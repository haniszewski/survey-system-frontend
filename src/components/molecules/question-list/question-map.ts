import React from "react";
import TextField from "@/components/atoms/form/fields/text-field";

const questionMap: Record<QuestionType, React.ElementType> =
  {
    text: TextField,
    number: TextField,
    "multi-choice": TextField,
    "single-choice": TextField,
    date: TextField,
    "date-range": TextField,
  };

export const createQuestionComponent = (
  type: QuestionType,
  props?: {
    [key: string]: unknown;
  },
) => {
  return React.createElement(questionMap[type], props);
};
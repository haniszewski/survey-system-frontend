"use client";

import Form from "../form/form";

const SurveyForm = ({ children }: { children: React.ReactNode }) => {
  const submitHandler = (data: unknown) => console.log(data);

  return <Form onSubmit={submitHandler}>{children}</Form>;
};

export default SurveyForm;

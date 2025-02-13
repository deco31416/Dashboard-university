"use client";

import React from "react";
import { QuizProvider, useQuiz } from "./quiz-app-context";
import { CreditBalanceProvider } from "../../chatbot/[id]/credit-balance-context";
import QuizCover from "./quiz-cover";
import QuizQuestion from "./question";
import QuizResult from "./result";
import QuizTrue from "./true";
import QuizFalse from "./false";

export default function QuizApp() {
  return (
    <CreditBalanceProvider>
      <QuizProvider>
        <QuizContent />
      </QuizProvider>
    </CreditBalanceProvider>
  );
}

function QuizContent() {
  const { step, setStep, questions, answer_state } = useQuiz();

  switch (step) {
    case "cover":
      return <QuizCover />;
    case "question":
      return <QuizQuestion />;
    case "true":
      return <QuizQuestion />;
    case "false":
      return <QuizQuestion />;
    case "result":
      return <QuizResult />;
    default:
      return <QuizCover />;
  }
}

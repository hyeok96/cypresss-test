import { ChangeEvent } from "react";

export interface ISigUpPresenterProps {
  onChangeSingUpInput: (e: ChangeEvent<HTMLInputElement>) => void;
  onClickSignUpBtn: () => void;
}

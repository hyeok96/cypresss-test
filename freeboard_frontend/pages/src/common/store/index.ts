import { atom } from "recoil";

export const LoginInputState = atom({
  key: "LoginInputState",
  default: {
    email: "",
    password: "",
  },
});

export const ActiveBtnState = atom({
  key: "ActiveBtnState",
  default: false,
});

export const SignUpInputState = atom({
  key: "SignUpInputState",
  default: {
    email: "",
    name: "",
    password: "",
  },
});

export const AccessToken = atom({
  key: "AccessToken",
  default: "",
});

export const PrevPageState = atom({
  key: "PrevPageState",
  default: "",
});

export const QuestionState = atom({
  key: "QuestionState",
  default: false,
});

export const RecommendUpdate = atom({
  key: "RecommendUpdate",
  default: false,
});

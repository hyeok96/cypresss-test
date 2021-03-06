import { gql, useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import { ChangeEvent, useState } from "react";
import { useRecoilState } from "recoil";
import { accessTokenState } from "../src/commons/store";

const LOGIN_USER = gql`
  mutation loginUser($email: String!, $password: String!) {
    loginUser(email: $email, password: $password) {
      accessToken
    }
  }
`;

export default function LoginPage() {
  const [, setAccessToken] = useRecoilState(accessTokenState);

  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginUser] = useMutation(LOGIN_USER);

  const onChangeEmail = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const onChangePassword = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const onCLickLogin = async () => {
    // login하기
    const result = await loginUser({
      variables: {
        email,
        password,
      },
    });
    const accessToken = result.data?.loginUser.accessToken;
    console.log(accessToken);
    // 유저정보 받아오기

    // 글로벌스테이트에 저장
    setAccessToken(accessToken);
    localStorage.setItem("accessToken", accessToken);

    // 페이지 이동하기

    alert("로그인 성공했어요");
    router.push("/23-05-login-check-success");
  };

  return (
    <>
      <div>
        이메일: <input onChange={onChangeEmail} />
        <br />
        비밀번호 : <input type="password" onChange={onChangePassword} />
        <button onClick={onCLickLogin}>로그ㄹ인하기</button>
      </div>
    </>
  );
}

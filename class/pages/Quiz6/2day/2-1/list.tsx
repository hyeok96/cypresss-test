import styled from "@emotion/styled";
import { useEffect, useState } from "react";
import { IBoard } from "../../../src/commons/types/generated/types";
import DOMPurify from "dompurify";

const MyRow = styled.div`
  display: flex;
  flex-direction: row;
`;

const MyColumn = styled.div`
  width: 25%;
`;

export default function Quiz() {
  const [state, setState] = useState([]);

  useEffect(() => {
    const aaa = JSON.parse(localStorage.getItem("baskets") || "[]");
    setState(aaa);
  }, []);

  return (
    <>
      {state.map((el: IBoard) => (
        <MyRow key={el._id}>
          <MyColumn>{el.writer}</MyColumn>
          <MyColumn>{el.title}</MyColumn>
        </MyRow>
      ))}
    </>
  );
}

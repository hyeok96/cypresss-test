import * as s from "./Image.style";
import { useRef } from "react";
import { IImageProps } from "./Image.types";
import { useRecoilState } from "recoil";
// import { ProductInputState } from "../../../common/store";
// import { v4 as uuid } from "uuid";

export default function ImagePresenterPage(props: IImageProps) {
  // const [productInput] = useRecoilState(ProductInputState);
  const imgRef = useRef<HTMLInputElement>(null);

  const onClickMoveImg = () => {
    imgRef.current.click();
  };

  return (
    <>
      <s.Div2>
        <s.MenuTitle>사진 첨부</s.MenuTitle>
        <s.Div1>
          <s.Input
            type="file"
            ref={imgRef}
            onChange={props.onChangeImg}
            multiple
          />
          <s.UploadDiv onClick={onClickMoveImg}>
            ✚<br />
            Upload
          </s.UploadDiv>
        </s.Div1>
      </s.Div2>
      {props.isEdit &&
        props.isShowImage &&
        props.data?.fetchBoard.images.map((el: any) => (
          <>
            <s.ImageBox>
              <s.Img
                src={`https://storage.googleapis.com/${el}`}
                onClick={onClickMoveImg}
                id={el}
              />
            </s.ImageBox>
            <s.DeleteBtn id={el} onClick={props.onClickDeleteImg}>
              삭제
            </s.DeleteBtn>
          </>
        ))}
      {props.imgUrl?.map((el: any) => (
        <>
          <s.ImageBox>
            <s.Img src={`https://storage.googleapis.com/${el}`} />
          </s.ImageBox>
        </>
      ))}
    </>
  );
}

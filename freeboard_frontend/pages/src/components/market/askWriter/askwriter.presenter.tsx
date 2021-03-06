import * as s from "./askwriter.style";
import { IAskWritePresenterPageProps } from "./askwriter.type";

export default function AskWriterPresenterPage(
  props: IAskWritePresenterPageProps
) {
  return (
    <form onSubmit={props.handleSubmit(props.onSubmitcreateUseditemQuestion)}>
      <s.Main>
        <s.AskHeader>
          <s.AskHeaderIcon>
            <img src="/borad/Comment.png" />
          </s.AskHeaderIcon>
          <s.AskHeaderText>문의하기</s.AskHeaderText>
        </s.AskHeader>
        <s.AskBody>
          <s.AskBodyWriteBox>
            <s.AskBodyWrite>
              <s.AskInput
                {...props.register("contents")}
                placeholder="개인정보를 공유 및 요청하거나, 명예 훼손, 무단 광고, 불법 정보 유포시 모니터링 후 삭제될 수 있으며, 이에 대한 민형사상 책임은 게시자에게 있습니다."
              />
            </s.AskBodyWrite>
            <s.AskBodyWriteSubmitBox>
              <s.AskBodyWriteSubmit>등록하기</s.AskBodyWriteSubmit>
            </s.AskBodyWriteSubmitBox>
          </s.AskBodyWriteBox>
        </s.AskBody>
      </s.Main>
    </form>
  );
}

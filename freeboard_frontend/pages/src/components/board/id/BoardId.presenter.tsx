import * as s from "./BoardId.styled";
import { IBoardIdPresenterProps } from "./BoardId.types";
import { getDate } from "../../../common/utils/utils";

export default function BoardIdPresenter(props: IBoardIdPresenterProps) {
  return (
    <s.Main>
      <s.Wrapper>
        <s.Head>
          <s.HeadBox>
            <s.HeadProfile>
              <img src="/borad/Vector.png" />
            </s.HeadProfile>
            <s.HeadNameBox>
              <s.HeadName>
                {props.data ? props.data.fetchBoard.writer : "loading"}
              </s.HeadName>
              <s.HeadDate>
                {getDate(
                  props.data ? props.data.fetchBoard.createdAt : "loading"
                )}
              </s.HeadDate>
            </s.HeadNameBox>
          </s.HeadBox>
          <s.HeadBox>
            <s.HeadIcon>
              <img src="/borad/file.png" />
            </s.HeadIcon>
            <s.HeadIcon>
              <img src="/borad/map.png" />
            </s.HeadIcon>
          </s.HeadBox>
        </s.Head>
        <s.Body>
          <s.BodyTitle>
            {props.data ? props.data.fetchBoard.title : "loading"}
          </s.BodyTitle>
          <s.BodyImage></s.BodyImage>
          <s.BodyText>
            {props.data ? props.data.fetchBoard.contents : "loading"}
          </s.BodyText>
          <s.BodyVideoBox>
            <s.BodyVideo></s.BodyVideo>
          </s.BodyVideoBox>
        </s.Body>
        <s.Footer>
          <s.FooterLikeBox>
            <s.FooterLikeIcon>
              <img src="/borad/like.png" />
            </s.FooterLikeIcon>
            <s.FooterLikeCount>
              {props.data ? props.data.fetchBoard.likeCount : "loading"}
            </s.FooterLikeCount>
          </s.FooterLikeBox>
          <s.FooterDisLikeBox>
            <s.FooterDisLikeIcon>
              <img src="/borad/dislike.png" />
            </s.FooterDisLikeIcon>
            <s.FooterDisLikeCount>
              {props.data ? props.data.fetchBoard.dislikeCount : "loading"}
            </s.FooterDisLikeCount>
          </s.FooterDisLikeBox>
        </s.Footer>
      </s.Wrapper>
      <s.UpdateMain>
        <s.UpdateBox onClick={props.onClickBoardListMove}>목록으로</s.UpdateBox>
        <s.UpdateBox onClick={props.onClickUpdateMove}>수정하기</s.UpdateBox>
        <s.UpdateBox
          id={props.data?.fetchBoard._id}
          onClick={props.onClickDelete}
        >
          삭제하기
        </s.UpdateBox>
      </s.UpdateMain>
      <s.Comment>
        <s.CommentHeader>
          <s.CommentHeaderIcon>
            <img src="/borad/Comment.png" />
          </s.CommentHeaderIcon>
          <s.CommentHeaderText>댓글</s.CommentHeaderText>
        </s.CommentHeader>
        <s.CommentBody>
          <s.CommentBodyInfo>
            <s.CommentBodyInfoRating>
              <s.CommentBodyInfoRatingStar1
                onClick={props.onClickRating1}
                sellect1={props.sellect1}
                id="star1"
              ></s.CommentBodyInfoRatingStar1>
              <s.CommentBodyInfoRatingStar2
                onClick={props.onClickRating2}
                sellect2={props.sellect2}
                id="star2"
              ></s.CommentBodyInfoRatingStar2>
              <s.CommentBodyInfoRatingStar3
                onClick={props.onClickRating3}
                sellect3={props.sellect3}
                id="star3"
              ></s.CommentBodyInfoRatingStar3>
              <s.CommentBodyInfoRatingStar4
                onClick={props.onClickRating4}
                sellect4={props.sellect4}
                id="star4"
              ></s.CommentBodyInfoRatingStar4>
              <s.CommentBodyInfoRatingStar5
                onClick={props.onClickRating5}
                sellect5={props.sellect5}
                id="star5"
              ></s.CommentBodyInfoRatingStar5>
            </s.CommentBodyInfoRating>
          </s.CommentBodyInfo>
          <s.CommentBodyWriteBox>
            <s.CommentBodyWrite>
              <s.CommentWriteInput
                placeholder="개인정보를 공유 및 요청하거나, 명예 훼손, 무단 광고, 불법 정보 유포시 모니터링 후 삭제될 수 있으며, 이에 대한 민형사상 책임은 게시자에게 있습니다."
                onChange={props.onChangeComment}
              ></s.CommentWriteInput>
            </s.CommentBodyWrite>
            <s.CommentBodyWriteSubmitBox>
              <s.CommentInputBox>
                <s.CommentInput
                  onChange={props.onChangeWriter}
                  placeholder="직성자"
                />
                <s.CommentInput
                  type="password"
                  onChange={props.onChangePw}
                  placeholder="비밀번호"
                />
              </s.CommentInputBox>
              <s.CommentBodyWriteSubmit onClick={props.onClickCreateComment}>
                등록하기
              </s.CommentBodyWriteSubmit>
            </s.CommentBodyWriteSubmitBox>
          </s.CommentBodyWriteBox>
        </s.CommentBody>
        {props.commentData?.fetchBoardComments.map((el: any, index: number) => (
          <s.CommentFooter key={el._id}>
            <s.CommentFooterBox>
              <s.CommentFooterProfileBox>
                <s.CommentFooterProfile>
                  <img src="/borad/Vector.png" />
                </s.CommentFooterProfile>
              </s.CommentFooterProfileBox>
              <s.CommentFooterMultiBox>
                <s.CommentFooterNameBox>
                  <s.CommentFooterNameRating>
                    <s.CommentFooterNameRatingName>
                      {el.writer}
                    </s.CommentFooterNameRatingName>
                    <s.CommentFooterNameRatingBox>
                      <s.CommentBodyInfoRatingStar>
                        <img src="/borad/Star.png" />
                      </s.CommentBodyInfoRatingStar>
                      <s.CommentBodyInfoRatingStar>
                        <img src="/borad/Star.png" />
                      </s.CommentBodyInfoRatingStar>
                      <s.CommentBodyInfoRatingStar>
                        <img src="/borad/Star.png" />
                      </s.CommentBodyInfoRatingStar>
                      <s.CommentBodyInfoRatingStar>
                        <img src="/borad/Star.png" />
                      </s.CommentBodyInfoRatingStar>
                      <s.CommentBodyInfoRatingStar>
                        <img src="/borad/Star.png" />
                      </s.CommentBodyInfoRatingStar>
                    </s.CommentFooterNameRatingBox>
                  </s.CommentFooterNameRating>
                  <s.CommentFooterNameUpdate>
                    <s.CommentFooterNameUpdateIcon>
                      <img src="/borad/update.png" />
                    </s.CommentFooterNameUpdateIcon>
                    <s.CommentFooterNameUpdateIcon>
                      <img src="/borad/delete.png" />
                    </s.CommentFooterNameUpdateIcon>
                  </s.CommentFooterNameUpdate>
                </s.CommentFooterNameBox>
                <s.CommentFooterText>{el.contents}</s.CommentFooterText>
                <s.CommentFooterDate>
                  {getDate(el.createdAt)}
                </s.CommentFooterDate>
              </s.CommentFooterMultiBox>
            </s.CommentFooterBox>
          </s.CommentFooter>
        ))}
      </s.Comment>
    </s.Main>
  );
}
import * as s from "./BoardId.styled"
import {IBoardIdPresenterProps} from "./BoardId.types"



export default function BoardIdPresenter(props:IBoardIdPresenterProps) {

    return (
    <s.Main>
        <s.Wrapper>
            <s.Head>
                <s.HeadBox>
                    <s.HeadProfile>
                        <img src="/borad/Vector.png"/>
                    </s.HeadProfile>
                    <s.HeadNameBox>
                            <s.HeadName>{props.data? props.data.fetchBoard.writer : "loading"}</s.HeadName>
                            <s.HeadDate></s.HeadDate>
                    </s.HeadNameBox> 
                </s.HeadBox>
                <s.HeadBox>
                        <s.HeadIcon>
                            <img src="/borad/file.png"/>
                        </s.HeadIcon>
                        <s.HeadIcon>
                            <img src="/borad/map.png"/>
                        </s.HeadIcon>
                </s.HeadBox>
            </s.Head>
            <s.Body>
                <s.BodyTitle>{props.data? props.data.fetchBoard.title : "loading"}</s.BodyTitle>
                <s.BodyImage></s.BodyImage>
                <s.BodyText>{props.data? props.data.fetchBoard.contents : "loading"}</s.BodyText>
                <s.BodyVideoBox>
                    <s.BodyVideo></s.BodyVideo>
                </s.BodyVideoBox>
            </s.Body>
            <s.Footer>
                <s.FooterLikeBox>
                    <s.FooterLikeIcon>
                        <img src="/borad/like.png"/>
                    </s.FooterLikeIcon>
                    <s.FooterLikeCount>{props.data? props.data.fetchBoard.likeCount : "loading"}</s.FooterLikeCount>
                </s.FooterLikeBox>
                <s.FooterDisLikeBox>
                    <s.FooterDisLikeIcon>
                        <img src="/borad/dislike.png"/>
                    </s.FooterDisLikeIcon>
                    <s.FooterDisLikeCount>{props.data? props.data.fetchBoard.dislikeCount : "loading"}</s.FooterDisLikeCount>
                </s.FooterDisLikeBox>
            </s.Footer>
        </s.Wrapper>
        <s.UpdateMain>
            <s.UpdateBox onClick={props.onClickBoardListMove}>????????????</s.UpdateBox>
            <s.UpdateBox onClick={props.onClickUpdateMove}>????????????</s.UpdateBox>
            <s.UpdateBox id={props.data?.fetchBoard._id} onClick={props.onClickDelete}>????????????</s.UpdateBox>
        </s.UpdateMain>
        <s.Comment>
            <s.CommentHeader>
                <s.CommentHeaderIcon>
                    <img src="/borad/Comment.png"/>
                </s.CommentHeaderIcon>
                <s.CommentHeaderText>??????</s.CommentHeaderText>
            </s.CommentHeader>
            <s.CommentBody>
                <s.CommentBodyInfo>
                    <s.CommentBodyInfoRating>
                        <s.CommentBodyInfoRatingStar>
                            <img src="/borad/Star.png"/>
                        </s.CommentBodyInfoRatingStar>
                        <s.CommentBodyInfoRatingStar>
                            <img src="/borad/Star.png"/>
                        </s.CommentBodyInfoRatingStar>
                        <s.CommentBodyInfoRatingStar>
                            <img src="/borad/Star.png"/>
                        </s.CommentBodyInfoRatingStar>
                        <s.CommentBodyInfoRatingStar>
                            <img src="/borad/Star.png"/>
                        </s.CommentBodyInfoRatingStar>
                        <s.CommentBodyInfoRatingStar>
                            <img src="/borad/Star.png"/>
                        </s.CommentBodyInfoRatingStar>
                    </s.CommentBodyInfoRating>
                </s.CommentBodyInfo>
                <s.CommentBodyWriteBox>
                    <s.CommentBodyWrite>
                        <s.CommentWriteInput placeholder="??????????????? ?????? ??? ???????????????, ?????? ??????, ?????? ??????, ?????? ?????? ????????? ???????????? ??? ????????? ??? ?????????, ?????? ?????? ???????????? ????????? ??????????????? ????????????."></s.CommentWriteInput>
                    </s.CommentBodyWrite>
                    <s.CommentBodyWriteSubmitBox>
                        <s.CommentBodyWriteSubmit>????????????</s.CommentBodyWriteSubmit>
                    </s.CommentBodyWriteSubmitBox>
                </s.CommentBodyWriteBox>
            </s.CommentBody>
            <s.CommentFooter>
                <s.CommentFooterBox>
                    <s.CommentFooterProfileBox>
                        <s.CommentFooterProfile>
                            <img src="/borad/Vector.png"/>
                        </s.CommentFooterProfile>
                    </s.CommentFooterProfileBox>
                    <s.CommentFooterMultiBox>
                        <s.CommentFooterNameBox>
                            <s.CommentFooterNameRating>
                                <s.CommentFooterNameRatingName>?????????</s.CommentFooterNameRatingName>
                                <s.CommentFooterNameRatingBox>
                                    <s.CommentBodyInfoRatingStar>
                                        <img src="/borad/Star.png"/>
                                    </s.CommentBodyInfoRatingStar>
                                    <s.CommentBodyInfoRatingStar>
                                        <img src="/borad/Star.png"/>
                                    </s.CommentBodyInfoRatingStar>
                                    <s.CommentBodyInfoRatingStar>
                                        <img src="/borad/Star.png"/>
                                    </s.CommentBodyInfoRatingStar>
                                    <s.CommentBodyInfoRatingStar>
                                        <img src="/borad/Star.png"/>
                                    </s.CommentBodyInfoRatingStar>
                                    <s.CommentBodyInfoRatingStar>
                                        <img src="/borad/Star.png"/>
                                    </s.CommentBodyInfoRatingStar>
                                </s.CommentFooterNameRatingBox>
                            </s.CommentFooterNameRating>
                            <s.CommentFooterNameUpdate>
                                <s.CommentFooterNameUpdateIcon>
                                    <img src="/borad/update.png"/>
                                </s.CommentFooterNameUpdateIcon>
                                 <s.CommentFooterNameUpdateIcon>
                                     <img src="/borad/delete.png"/>
                                 </s.CommentFooterNameUpdateIcon>
                            </s.CommentFooterNameUpdate>
                        </s.CommentFooterNameBox>
                        <s.CommentFooterText>?????? ???????????? ?????? ????????? ????????? ??? ?????????~! ???????????? ?????? ?????? ??????????????????~!</s.CommentFooterText>
                        <s.CommentFooterDate>2022.03.22</s.CommentFooterDate>
                    </s.CommentFooterMultiBox>
                </s.CommentFooterBox>
                <s.CommentFooterBox>
                    <s.CommentFooterProfileBox>
                        <s.CommentFooterProfile>
                            <img src="/borad/Vector.png"/>
                        </s.CommentFooterProfile>
                    </s.CommentFooterProfileBox>
                    <s.CommentFooterMultiBox>
                        <s.CommentFooterNameBox>
                            <s.CommentFooterNameRating>
                                <s.CommentFooterNameRatingName>??????</s.CommentFooterNameRatingName>
                                <s.CommentFooterNameRatingBox>
                                    <s.CommentBodyInfoRatingStar>
                                        <img src="/borad/Star.png"/>
                                    </s.CommentBodyInfoRatingStar>
                                    <s.CommentBodyInfoRatingStar>
                                        <img src="/borad/Star.png"/>
                                    </s.CommentBodyInfoRatingStar>
                                    <s.CommentBodyInfoRatingStar>
                                        <img src="/borad/Star.png"/>
                                    </s.CommentBodyInfoRatingStar>
                                    <s.CommentBodyInfoRatingStar>
                                        <img src="/borad/Star.png"/>
                                    </s.CommentBodyInfoRatingStar>
                                    <s.CommentBodyInfoRatingStar>
                                        <img src="/borad/Star.png"/>
                                    </s.CommentBodyInfoRatingStar>
                                </s.CommentFooterNameRatingBox>
                            </s.CommentFooterNameRating>
                            <s.CommentFooterNameUpdate>
                                <s.CommentFooterNameUpdateIcon>
                                    <img src="/borad/update.png"/>
                                </s.CommentFooterNameUpdateIcon>
                                 <s.CommentFooterNameUpdateIcon>
                                    <img src="/borad/delete.png"/>
                                 </s.CommentFooterNameUpdateIcon>
                            </s.CommentFooterNameUpdate>
                        </s.CommentFooterNameBox>
                        <s.CommentFooterText>?????? ?????????~ ???????????????~!</s.CommentFooterText>
                        <s.CommentFooterDate>2022.03.22</s.CommentFooterDate>
                    </s.CommentFooterMultiBox>
                </s.CommentFooterBox>
                <s.CommentFooterBox>
                    <s.CommentFooterProfileBox>
                        <s.CommentFooterProfile>
                            <img src="/borad/Vector.png"/>
                        </s.CommentFooterProfile>
                    </s.CommentFooterProfileBox>
                    <s.CommentFooterMultiBox>
                        <s.CommentFooterNameBox>
                            <s.CommentFooterNameRating>
                                <s.CommentFooterNameRatingName>?????????</s.CommentFooterNameRatingName>
                                <s.CommentFooterNameRatingBox>
                                    <s.CommentBodyInfoRatingStar>
                                        <img src="/borad/Star.png"/>
                                    </s.CommentBodyInfoRatingStar>
                                    <s.CommentBodyInfoRatingStar>
                                        <img src="/borad/Star.png"/>
                                    </s.CommentBodyInfoRatingStar>
                                    <s.CommentBodyInfoRatingStar>
                                        <img src="/borad/Star.png"/>
                                    </s.CommentBodyInfoRatingStar>
                                    <s.CommentBodyInfoRatingStar>
                                        <img src="/borad/Star.png"/>
                                    </s.CommentBodyInfoRatingStar>
                                    <s.CommentBodyInfoRatingStar>
                                        <img src="/borad/Star.png"/>
                                    </s.CommentBodyInfoRatingStar>
                                </s.CommentFooterNameRatingBox>
                            </s.CommentFooterNameRating>
                            <s.CommentFooterNameUpdate>
                                <s.CommentFooterNameUpdateIcon>
                                    <img src="/borad/update.png"/>
                                </s.CommentFooterNameUpdateIcon>
                                 <s.CommentFooterNameUpdateIcon>
                                    <img src="/borad/delete.png"/>
                                 </s.CommentFooterNameUpdateIcon>
                            </s.CommentFooterNameUpdate>
                        </s.CommentFooterNameBox>
                        <s.CommentFooterText>???????????? ?????? ?????? ??????????????????~!</s.CommentFooterText>
                        <s.CommentFooterDate>2022.03.22</s.CommentFooterDate>
                    </s.CommentFooterMultiBox>
                </s.CommentFooterBox>
            </s.CommentFooter> 
        </s.Comment>
    </s.Main>
    )
}


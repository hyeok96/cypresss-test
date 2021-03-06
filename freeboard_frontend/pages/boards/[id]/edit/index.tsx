import BoardNewContainer from "../../../src/components/board/new/BoardNew.container";
import { useRouter } from "next/router";
import { gql, useQuery } from "@apollo/client";
import {
  IQuery,
  IQueryFetchBoardArgs,
} from "../../../src/common/types/generated/types";
import { withAuth } from "../../../src/common/hocs/withAuth";

const FETCH_BOARD = gql`
  query fetchBoard($boardId: ID!) {
    fetchBoard(boardId: $boardId) {
      writer
      title
      contents
      youtubeUrl
      _id
      images
      boardAddress {
        zipcode
        address
        addressDetail
      }
    }
  }
`;

function UpadteBoardPage() {
  const router = useRouter();

  const { data } = useQuery<Pick<IQuery, "fetchBoard">, IQueryFetchBoardArgs>(
    FETCH_BOARD,
    {
      variables: {
        boardId: String(router.query.id),
      },
    }
  );

  return <BoardNewContainer isEdit={true} data={data} />;
}

export default withAuth(UpadteBoardPage);

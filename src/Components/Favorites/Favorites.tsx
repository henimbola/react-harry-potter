import React, { useContext } from "react";
import { CharactersContext } from "src/Common/contexts/CharactersProvider";
import { Container, Grid, css } from "@mui/material";
import MoonLoader from "react-spinners/MoonLoader";
import { isCharacterFavorite } from "src/utils/favoritesUtils";
import CharactersListRenderer from "src/Common/components/CharactersListRenderer";

const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
`;

const Favorites = () => {

    const data = useContext(CharactersContext);

    return <Container maxWidth="lg">
        <div>
            <MoonLoader color="purple" loading={!data} css={override} size={150} />
            {data ? (data.data) ? <CharactersListRenderer data={data.data.filter((el: any, index: number) => isCharacterFavorite(index))} /> : null : null}
        </div>
    </Container>;
}

export default Favorites;
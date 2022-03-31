import React, { useState, useEffect, useContext } from 'react';
import Container from '@mui/material/Container';
import { CharactersContext } from 'src/Common/contexts/CharactersProvider';
import { css } from "@emotion/react";
import MoonLoader from "react-spinners/MoonLoader";
import CharactersListRenderer from '../../Common/components/CharactersListRenderer';

const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
`;

const Home: React.FC = () => {

    const data = useContext(CharactersContext);

    return <Container maxWidth="lg">
        <div>
            <MoonLoader color="purple" loading={!data} css={override} size={150} />
            {data ? data.data ? <CharactersListRenderer data={data.data} /> : null : null}
        </div>
    </Container>;
}

export default Home;
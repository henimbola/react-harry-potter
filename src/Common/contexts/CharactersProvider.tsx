import React, { useState, useEffect } from "react";
import { AxiosResponse } from 'axios';

import charactersRepository from 'src/Repository/charactersRepository';

const context: any = [];
export const CharactersContext = React.createContext(context);

const CharactersProvider = ({ children }: any) => {

    const [data, setData] = useState<AxiosResponse<any, any> | null>(null);

    useEffect(() => {
        charactersRepository.fetchCharacters().then((DataFromApi) => { setData(DataFromApi) });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return <CharactersContext.Provider value={data}>
        {children}
    </CharactersContext.Provider>
}

export default CharactersProvider;
const getStoredCharacters = () => {
    let storedCharacters: string | null = localStorage.getItem('favoriteCharactersIndexes') || '';

    if (storedCharacters === '') {
        localStorage.setItem('favoriteCharactersIndexes', '[]');
        storedCharacters = localStorage.getItem('favoriteCharactersIndexes') || '';

        return JSON.parse(storedCharacters);
    }

    return JSON.parse(storedCharacters);
}

export const isCharacterFavorite = (index: number) => {
    const storedCharacters = getStoredCharacters();
    const isFavorite: number | undefined = storedCharacters.find((el: number) => el === index);

    return isFavorite || false;
}

export const addCharacterToFavorites = (index: number) => {
    const storedCharacters = getStoredCharacters();

    if (!isCharacterFavorite(index)) {
        localStorage.setItem("favoriteCharactersIndexes", JSON.stringify([...storedCharacters, index]));
    }
}

export const removeCharacterFromFavorites = (index: number) => {
    const storedCharacters = getStoredCharacters();
    localStorage.setItem("favoriteCharactersIndexes", JSON.stringify(storedCharacters.filter((el: number) => el !== index)));
}

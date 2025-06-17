import { FunctionComponent } from "preact";
import { useEffect, useState } from "preact/hooks";
import { searchTerm } from "../signals/charactersSignal.ts";

type Character = {
    name: string;
    image: string;
    house: string;
    id: string;
};

type Props = {
    characters: Character[];
};

const CharactersContainer: FunctionComponent<Props> = (props) => {
    const filteredCharacters = props.characters.filter((character) =>
        character.name.toLowerCase().includes(searchTerm.value.toLowerCase())
    );

    return (
        <div>
            {filteredCharacters.map((character) => (
        <>
          <div class="CharacterCard" key={character.id}>
            <a href={`/character/${character.id}`}>
              <h2>{character.name}</h2>
              <img src={character.image} alt={character.name} />
            </a>
        
        </div>
        </>
            ))}
        </div>
    );
};

export default CharactersContainer;
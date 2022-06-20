import axios from 'axios';

export const getCharacters = async () => axios.get('https://rickandmortyapi.com/api/character/');
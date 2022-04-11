import {createPublication} from './data/create-publication.js';

const PUBLICATIONS_COUNT = 25;

const publications = Array.from({length: PUBLICATIONS_COUNT}, (_, i) => createPublication(i));

/* eslint-disable no-console */
console.log(publications);
/* eslint-enable no-console */

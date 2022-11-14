import axios from 'utils/axios';

import { memesApiKey } from 'utils/constants';

const getMemes = async () => axios.get<any>(`api.humorapi.com/memes/random?api-key=${memesApiKey}`);

export default getMemes;

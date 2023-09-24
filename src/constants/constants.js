export const INITIAL_LIMIT = 8;
export const SHIPPING = 1000;
export const BASE_URL = 'https://integradorback.vercel.app'
export const regEmail =
  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

  export const formatDate = date =>
  new Intl.DateTimeFormat('es-AR', {
    dateStyle: 'medium',
    timeStyle: 'short',
  }).format(date);
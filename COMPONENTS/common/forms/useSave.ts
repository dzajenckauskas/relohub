import useAxios from "axios-hooks";
// import { useParams } from 'react-router-dom';

export const useSave = <TResponse, TBody = any, TError = any>(url: string, id?: number | string, headers?: {
  "Content-Type": string;
}, skipDb?: boolean, method?: 'PUT' | 'POST') => {
  // const { db } = useParams()
  // const dbPart = skipDb ? "" : db ? `/${db}` : ''

  const isNumber = /^\d+$/.test(Array.isArray(id) ? id[0] : id ?? '');

  const param = !id || id === '' || id === '0'
    ? ''
    : `(${isNumber ? id : `'${id}'`})`

  const result = useAxios<TResponse, TBody, TError>(
    {
      url: '`${dbPart}${url}${param}`',
      method: method ?? (param ? 'PUT' : 'POST'),
      headers
    },
    { manual: true }
  )

  return result
}
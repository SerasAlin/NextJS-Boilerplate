import cookie from 'js-cookie';

export const filterItemsBySearch = (searchTerm: string, list: any[], specificFields?: string[]) => {
  if (!Array.isArray(list)) {
    return;
  }
  const filteredList = list?.filter(item => {
    const obj = !specificFields ? item : Object.fromEntries(specificFields.map(k => [k, item[k]]));

    const objectValues = Object.values(obj);
    const objectValuesStr = JSON.stringify(objectValues).toLowerCase();
    return objectValuesStr.includes(searchTerm.toLowerCase());
  });

  return searchTerm ? filteredList : list;
}

export const getAuthToken = () => {
  try {
    return cookie.get('access_token');
  } catch {
    return null;
  }
};
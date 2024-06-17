export const getShortDate = (date: Date) => {
  let dateJson = date.toJSON().slice(0, 10);
  let dateFormat = dateJson.slice(8, 10) + '/'
    + dateJson.slice(5, 7) + '/'
    + dateJson.slice(0, 4);
  return dateFormat;
}

export const addYears = (date: Date, years: number) => {
  const dateCopy = new Date(date);
  dateCopy.setFullYear(dateCopy.getFullYear() + years);
  return dateCopy;
}

export enum StatusService {
  LOADING = 'loading',
  SUCCESS = 'success',
  ERROR = 'error'
}

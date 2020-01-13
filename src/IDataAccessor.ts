export interface IDataAccessor<T> {
  (pageNumber: number, limit: number): T[];
}

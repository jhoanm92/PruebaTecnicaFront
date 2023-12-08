export interface PageResponse<T> {
  message: string;
  status: boolean;
  code: number;
  data: T[];
}

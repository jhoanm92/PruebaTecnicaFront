import { PageResponse } from '../_model/page-response.interface';
import { Inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GenericService<T> {

  constructor(
    protected _http: HttpClient,
    @Inject(String) protected _url: string
  ) { }

  getItems() {
    return this._http.get<T[]>(this._url);
  }

  getItemById(id: string) {
    return this._http.get<T>(`${this._url}/${id}`);
  }

  saveItem(t: T) {
    return this._http.post(this._url, t);
  }

  updateItem(t: T, id :string) {
    return this._http.put(`${this._url}/${id}`, t);
  }

  deleteItem(id: string) {
    return this._http.delete(`${this._url}/${id}`);
  }

}

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor() { }

  store = (key: string, value: string): void => localStorage.setItem(key, value);

  retrieve = (key: string) => localStorage.getItem(key);

  remove = (key: string) => localStorage.removeItem(key);

  clear = () => localStorage.clear();
}

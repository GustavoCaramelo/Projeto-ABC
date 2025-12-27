import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class UserService {
    STORAGE_KEY = 'userData';

    constructor() { }

    saveUser(data) {
        if (typeof localStorage !== 'undefined') {
            localStorage.setItem(this.STORAGE_KEY, JSON.stringify(data));
        }
    }

    getUser() {
        if (typeof localStorage !== 'undefined') {
            const data = localStorage.getItem(this.STORAGE_KEY);
            return data ? JSON.parse(data) : null;
        }
        return null;
    }
}
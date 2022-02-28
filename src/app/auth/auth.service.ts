import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs/internal/BehaviorSubject';
import {Observable} from 'rxjs';

@Injectable({ providedIn: 'root' })
export class AuthService {

    private isLoggedIn$ = new BehaviorSubject<boolean>(false);

    constructor() {
    }

    getAuthStatus(): Observable<boolean> {
        return this.isLoggedIn$.asObservable();
    }

    login(): void {
        this.isLoggedIn$.next(true);
        console.log( 'AuthServicelogin(): isLoggedIn$=' + this.isLoggedIn$);
    }

}

import { Component } from '@angular/core';
import { User } from '../user';

@Component({
    selector: 'counter',
    templateUrl: './counter.component.html',
    styleUrls: ['./styles.sass']
})


export class CounterComponent {
    
    public currentCount = 0;
    public user = new User("", "");

    public incrementCounter() {
        this.currentCount++;
    }
    public decrementCounter() {
        this.currentCount--;
    }

    public textChange(event: Event) {
        const target = event.target as HTMLInputElement;
        this.user.firstName = target.value.split(' ', 2)[0];
        this.user.lastName = target.value.split(' ', 2)[1];
    }
}
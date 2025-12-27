import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserService } from '../user.service';

@Component({
    selector: 'app-info',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './info.component.html',
    styleUrls: ['./info.component.css']
})
export class InfoComponent {
    userData = null;
    userService = inject(UserService);

    ngOnInit() {
        this.userData = this.userService.getUser();
    }
}

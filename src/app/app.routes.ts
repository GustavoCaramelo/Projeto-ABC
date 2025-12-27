
import { RegistrationComponent } from './registration/registration.component';
import { InfoComponent } from './info/info.component';

export const routes = [
    { path: '', redirectTo: 'cadastro', pathMatch: 'full' },
    { path: 'cadastro', component: RegistrationComponent },
    { path: 'informacoes', component: InfoComponent }
];
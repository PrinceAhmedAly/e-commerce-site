import { Routes } from '@angular/router';
import { ProductsComponent } from './components/products/products.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { ShoppingCartComponent } from './components/shopping-cart/shopping-cart.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { LoginComponent } from './components/login/login.component';
import { authGuard } from './guards/auth.guard';


// define all app routes here
export const routes: Routes = [

    {path:'', redirectTo: 'Home', pathMatch: 'full'},
    {path: 'Home', component: ProductsComponent},
    {path: 'About', component: AboutUsComponent},
    {path: 'Contact', component: ContactUsComponent },
    {path: 'ShoppingCart', component: ShoppingCartComponent, canActivate: [authGuard]},
    {path: 'Details/:id', component: ProductDetailsComponent},
    {path: 'Signin' , component: LoginComponent},
    // wildCard route must be at the end becase of first match wins rule
    {path: '**', component: NotFoundComponent}

];

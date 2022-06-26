import {NgModule} from "@angular/core";

import {RouterModule, Routes} from "@angular/router";
import { FooterComponent } from "./footer/footer.component";
import { MainComponent } from "./main/main.component";
import { NavbarComponent } from "./navbar/navbar.component";
import { ProductosComponent } from "./productos/productos.component";


const routes: Routes = [
    {path: '', component: MainComponent},
    {path: 'navbar', component: NavbarComponent},
    {path: 'productos', component: ProductosComponent},
    {path: 'footer', component: FooterComponent},
    {path: '**', pathMatch: 'full', redirectTo: '404'}

]

@NgModule({
    imports: [RouterModule.forRoot(routes, {useHash: true, scrollPositionRestoration: 'enabled'}), 
    ],
    exports: [
      RouterModule
    ],
})

export class AppRoutingModule {};

import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { EncuestaComponent } from "./encuesta/components/encuesta/encuesta.component";
import { HomeComponent } from "./home/components/home/home.component";
import { ResultadoComponent } from "./resultados/components/resultado/resultado.component";


const routes: Routes = [
    {
        path: '',
        component: HomeComponent
    },
    {
        path: 'encuesta',
        component: EncuestaComponent
    },
    {
        path: 'resultados',
        component: ResultadoComponent
    },
    {
        path: '**',
        redirectTo: ''
    }
]

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [
        RouterModule
    ]
})


export class AppRoutingModule {}
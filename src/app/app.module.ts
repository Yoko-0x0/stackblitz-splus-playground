import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from "@angular/core";
import { AppComponent } from "./app.component";

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [],
    schemas: [
        CUSTOM_ELEMENTS_SCHEMA
    ],  providers: [],

    bootstrap: [AppComponent]})
    export class AppModule { }
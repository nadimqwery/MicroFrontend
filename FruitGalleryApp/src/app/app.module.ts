import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector } from '@angular/core';
import { createCustomElement } from '@angular/elements';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FruitThumbnailModule } from './feature/fruit-thumbnail/fruit-thumbnail.module';
import { FruitDetailModule } from './feature/fruit-detail/fruit-detail.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FruitThumbnailModule,
    FruitDetailModule
  ],
  providers: [],
  bootstrap: [],
  entryComponents: [AppComponent]
})
export class AppModule {
  galleryComponent: any;
  constructor(private injector: Injector) {
    this.galleryComponent = createCustomElement(AppComponent, { injector });
  }

  ngDoBootstrap() {
    customElements.define('fruit-gallery', this.galleryComponent);
  }
}

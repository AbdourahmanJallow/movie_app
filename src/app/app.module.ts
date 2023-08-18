import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RatingModule, RatingConfig } from 'ngx-bootstrap/rating';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';

import { MatSidenavModule } from '@angular/material/sidenav';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTableModule } from '@angular/material/table';
import { MatBadgeModule } from '@angular/material/badge';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatListModule } from '@angular/material/list';
import { MatTooltipModule } from '@angular/material/tooltip';
import { NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { HttpClientModule } from '@angular/common/http';

import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './pages/home/home.component';
import { CartComponent } from './pages/cart/cart.component';
import { CategoriesComponent } from './pages/home/components/categories/categories.component';
import { MoviesHeaderComponent } from './pages/home/components/movies-header/movies-header.component';
import { MovieCardComponent } from './pages/home/components/movie-card/movie-card.component';
import { MovieDetailsComponent } from './pages/movie-details/movie-details.component';
import { HomeSkeletonComponent } from './components/loaders/home-skeleton/home-skeleton.component';
import { SearchPageComponent } from './pages/search-page/search-page.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    CartComponent,
    CategoriesComponent,
    MoviesHeaderComponent,
    MovieCardComponent,
    MovieDetailsComponent,
    HomeSkeletonComponent,
    SearchPageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatGridListModule,
    MatMenuModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MatExpansionModule,
    MatListModule,
    MatToolbarModule,
    MatTableModule,
    MatBadgeModule,
    MatSnackBarModule,
    MatTooltipModule,
    MatInputModule,
    MatFormFieldModule,
    FormsModule,
    NgIf,
    HttpClientModule,
    NgxSkeletonLoaderModule.forRoot({
      theme: {
        // Enabliong theme combination
        extendsFromRoot: true,
        // ... list of CSS theme attributes
        // height: '100p',
        // width: `100px`,
        background: '#001f3d',
      },
      animation: 'pulse',
      loadingText: 'Content is loading',
    }),
    // { animation: 'pulse', loadingText: 'This item is actually loading...' }
    RatingModule.forRoot(),
  ],
  providers: [RatingConfig],
  bootstrap: [AppComponent],
})
export class AppModule {}

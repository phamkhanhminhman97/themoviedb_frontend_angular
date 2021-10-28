import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { HttpService } from '../services/http.service';
import { SERVICE_CONFIG, SERVER, CONSTANT, SERVER_IMAGE_200 } from '../configs/index';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.scss'],
})
export class MovieDetailComponent implements OnInit {

  // Must be INIT MovieData
  public movieData = {
    cast: '...',
    recap: '...',
    year: '...',
    title: '...',
    time: '...',
    director_id: '...',
    poster_path: '',
    release_date: '...',
    vote_average: '...',
    overview: '...',
    budget: '...',
    revenue: '...'
  };

  //  public movieData = []

  public thumbnail: string = '';
  public cover: string = '';

  public serverImage = SERVER_IMAGE_200;
  private movieId = this._activatedRoute.snapshot.paramMap.get('id');
  constructor(
    private _httpService: HttpService,
    private _spinner: NgxSpinnerService,
    private _activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {

    this._spinner.show();
    this.getMovieDetail();
    this.getReviews();
    this.getCredits();
  }

  //api get movie detail
  getMovieDetail() {
    this._httpService
      .getHttp(SERVICE_CONFIG.MOVIE_DETAIL + '/' + this.movieId)
      .subscribe((res) => {
        if (res.code === 200) {
          this.movieData = res.data;
          console.log(this.movieData);
          this.thumbnail = SERVER_IMAGE_200 + this.movieData.poster_path;
          this.cover = SERVER_IMAGE_200 + res.data.backdrop_path;

          this._spinner.hide();
        } else {
          console.log('errorrrrr');
          setTimeout(() => {
            this._spinner.hide();
          }, 3000);
        }
      });
  }

  //api get review
  getReviews() {
    this._httpService.getHttp(SERVICE_CONFIG.REVIEW + '/' + this.movieId).subscribe((res) => {
      console.log('REVIEWWWW');
      console.log(res.data);

    })
  }

  //api get credits
  getCredits() {
    this._httpService.getHttp(SERVICE_CONFIG.CREDIT + '/' + this.movieId).subscribe((res) => {
      console.log('crewwww');
      res.data.crew.forEach((element: any) => {
        if (element.job == 'Director') {
          this.movieData.director_id = element.name;

        }
      });
    })
  }
}

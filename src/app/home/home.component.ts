import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { PageService } from '../services/page.service';
import { HttpService } from '../services/http.service';
import { SERVICE_CONFIG, SERVER, CONSTANT, SERVER_IMAGE_500 } from '../configs/index';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  public event: string = "asdasd";
  public searchText = "";
  // array of all items to be paged
  public movies: any[] = [];

  //server image
  public serverImage = SERVER_IMAGE_500;

  // total results items
  private allItems: any;

  // pager object
  pager: any = {};

  // paged items
  pagedItems: any;

  constructor(
    private _httpService: HttpService,
    private spinner: NgxSpinnerService,
    private _pagerService: PageService
  ) { }

  ngOnInit(): void {
    // this.spinner.show();
    this.setPage(1);
  }

  //get list movie query page 
  setPage(page: number) {
    //NO SEARCH CALL API POPULAR
    if (this.searchText !== "") {
      this._httpService.getHttp(SERVICE_CONFIG.SEARCH + '?' + CONSTANT.QUERY_PARAM_SEARCH + '=' + this.searchText + '&' + CONSTANT.QUERY_PARAM_PAGE + '=' + page).subscribe((res) => {
        this.movies = res.data.results;
        this.allItems = res.data.total_results;
      })
    } else {
      this.getListMovies(page);
    }
    // get pager object from service
    this.pager = this._pagerService.getPager(this.allItems, page);
    console.log('set page' + page);
  }

  //Get Movies Popular
  getListMovies(page: number) {
    this.spinner.show();
    this._httpService.getHttp(SERVICE_CONFIG.POPULAR + '?' + CONSTANT.QUERY_PARAM_PAGE + '=' + page).subscribe((res) => {
      this.movies = res.data.results;
      this.allItems = res.data.total_results;
      this.spinner.hide();
    })
  }

  //Get Movies Search
  searchMovie(event: any) {
    this.searchText = event.target.value;
    this._httpService.getHttp(SERVICE_CONFIG.SEARCH + '?' + CONSTANT.QUERY_PARAM_SEARCH + '=' + this.searchText).subscribe((res) => {
      this.movies = res.data.results;
      this.allItems = res.data.total_results;
      this.setPage(1);
    })
  }
}

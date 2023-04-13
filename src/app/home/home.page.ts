import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule, NavController } from '@ionic/angular';
import { HttpClient, HttpClientModule } from '@angular/common/http'
import { SpinnerComponent } from '../shared/components/spinner/spinner.component';
import { SelectComponent } from '../shared/components/select/select.component';

export const BASEAPI = 'https://fakestoreapi.com/'
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, HttpClientModule, SpinnerComponent, SelectComponent],
})
export class HomePage implements OnInit {

  // ##################################################################################
  // ###############################    VARIABLES #####################################
  // ##################################################################################

  search_query: any;
  search_text = ''
  titles: string[] = ["Ali", "Mhoas", "osawe", "Nour", "ahmad", "mousa"]
  suggestions: any[] = []
  loading: boolean = false
  products: any = []
  categories: any = []


  // ##################################################################################
  // ###############################  CONSTRUCTOR #####################################
  // ##################################################################################

  constructor(
    private http: HttpClient,
    private navCtrl: NavController,

  ) { }


  // ##################################################################################
  // ###############################   ONINIT     #####################################
  // ##################################################################################
  ngOnInit(): void {
    this.getProducts();
    this.getCategories()
  }

  // ##################################################################################
  // ###############################  METHODS and FUNCTIONS   #########################
  // ##################################################################################


  search(text: any) {

  }


  // ##################################################################################

  getProducts() {
    this.loading = true
    this.getAllProducts().subscribe((res) => {
      this.products = res;

      this.loading = false
    }, (err) => {
      this.loading = false
      alert('Could not get products')
    })
  }
  // ##################################################################################

  getCategories() {
    this.getAllCategories().subscribe((res) => {
      this.categories = res
    }, (err) => {
      alert('Error')
    })
  }
  // ##################################################################################

  get_products_by_category(value: string) {
    this.loading = true
    this.getProductsBy(value).subscribe((res: any) => {
      this.products = res
      this.loading = false
    }, (err) => {
      alert('Error')
    })
  }

  // ##################################################################################

  filterBy(event: any) {
    let value = event.target.value;
    (value === 'all') ? this.getProducts() : this.get_products_by_category(value)

  }
  // ##################################################################################


  clear() {
    this.suggestions = []
  }

  // ##################################################################################

  detail(id: any) {
    this.navCtrl.navigateForward('/detail/' + id)

  }

  // ##################################################################################
  // ###############################    SERVICE   #####################################
  // ##################################################################################


  getAllProducts() {
    return this.http.get(BASEAPI + 'products')
  }

  getAllCategories() {
    return this.http.get(BASEAPI + 'products/categories')

  }

  getProductsBy(category: string) {
    return this.http.get(BASEAPI + 'products/category/' + category)
  }


}

import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { BASEAPI } from 'src/app/home/home.page';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { SpinnerComponent } from 'src/app/shared/components/spinner/spinner.component';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.page.html',
  styleUrls: ['./detail.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, HttpClientModule, SpinnerComponent]
})
export class DetailPage implements OnInit {
  // ##################################################################################
  // ###############################    VARIABLES #####################################
  // ##################################################################################
  id: any;
  product: any = {};
  loading: boolean = false
  // ##################################################################################
  // ###############################  constructor #####################################
  // ##################################################################################
  constructor(
    private http: HttpClient,
    private route: ActivatedRoute,


  ) {
    this.id = this.route.snapshot.paramMap.get('id');
  }





  // ##################################################################################
  // ###############################  ngOnInit    #####################################
  // ##################################################################################

  ngOnInit() {
    this.getOneProduct()
  }




  // ##################################################################################
  // ###############################  METHODS    #####################################
  // ##################################################################################




  // ##################################################################################
  // ###############################  Services    #####################################
  // ##################################################################################

  getOneProduct() {
    this.loading = true
    this.http.get(BASEAPI + 'products/' + this.id).subscribe((res: any) => {
      this.product = res;
      this.loading = false

    }, (err) => {
      alert('Error')
    })
  }
}

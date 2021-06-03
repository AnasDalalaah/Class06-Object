'use strict';

let Hours = ['6:00am', '7:00am', '8:00am', '9:00am', '10:00am', '11:00am', '12:00am', '1:00pm', '2:00pm', '3:00pm', '4:00pm', '5:00pm', '6:00pm', '7:00pm','8:00pm'];

let StoreTable = document.getElementById('Cookies-Table');
let table = document.createElement('table');
StoreTable.appendChild(table);

let Markets = [];

function LOCATION(City, Min, Max, Avg) {

  this.City = City;
  this.Min = Min;
  this.Max = Max;
  this.Avg = Avg;
  this.Total = 0;

  this.cusPerhour = [];
  this.cookperHour= [];
  Markets.push(this);
  console.log(this);
}

LOCATION.prototype.customerperHour = function () {
  for (let i = 0; i < Hours.length; i++) {
    let random = Math.floor(Math.random() * (this.Max - this.Min) +this.Min);
    this.cusPerhour.push(random);
  }
};

LOCATION.prototype.cookiesCount= function () {
  for (let i = 0; i < Hours.length; i++) {
    let Cookies  = this.Avg * this.cusPerhour[i];
    this.cookperHour.push(Math.ceil( Cookies ));
  }
};

function header() {

  let tr = document.createElement('tr');
  table.appendChild(tr);

  let th = document.createElement('th');
  tr.appendChild(th);

  th.textContent = ('City');

  for (let i = 0; i < Hours.length; i++) {
    let th = document.createElement('th');
    tr.appendChild(th);
    th.textContent = Hours[i];
  }
  let total  = document.createElement('th');
  tr.appendChild(total);
  total .textContent = ' Daily Location Total ';
}


LOCATION.prototype.setTotalCookies = function () {
  for (let i = 0; i < this.cookperHour.length; i++) {
    this.Total = this.Total + this.cookperHour[i];
  }
  return this.Total;
};

LOCATION.prototype.hTMLDOC = function () {
  let tr1 = document.createElement('tr');
  table.appendChild(tr1);
  tr1.textContent = this.City;

  let td;
  for (let i = 0; i < this.cookperHour.length; i++) {
    td = document.createElement('td');
    tr1.appendChild(td);
    td.textContent = this.cookperHour[i];
  }

  let tdsum = document.createElement('td');
  tr1.appendChild(tdsum);
  tdsum.textContent = this.Total;
};


LOCATION.prototype.count = function () {
  this.customerperHour();
  this.cookiesCount();
};

let Seattle  = new LOCATION('Seattle',23,65,6.3);//MIN,MAX,AVG
let Tokyo = new LOCATION('Tokyo',3,24,1.2);
let Dubai = new LOCATION('Dubai',11,38,3.7);
let Paris = new LOCATION('Paris',20,38,2.3);
let Lima = new LOCATION('Lima',2,16,4.6);


let FR = document.createElement('tr');

function footer() {

  table.appendChild(FR);
  let F1 = document.createElement('th');
  FR.appendChild(F1);
  F1.textContent = 'Total';

  let TotalA = 0;
  for (let i = 0; i < Hours.length; i++) {

    let TPH = 0;

    for (let j = 0; j < Markets.length; j++) {
      TPH += Markets[j].cookperHour[i];
      TotalA += Markets[j].cookperHour[i];
    }

    let Th = document.createElement('th');
    FR.appendChild(Th);
    Th.textContent = TPH;
  }
  let lTh = document.createElement('th');
  FR.appendChild(lTh);
  lTh.textContent = TotalA;
}

Seattle.count();
Seattle.setTotalCookies();
Tokyo.count();
Tokyo.setTotalCookies();
Dubai.count();
Dubai.setTotalCookies();
Paris.count();
Paris.setTotalCookies();
Lima.count();
Lima.setTotalCookies();



header();

Seattle.hTMLDOC();
Tokyo.hTMLDOC();
Dubai.hTMLDOC();
Paris.hTMLDOC();
Lima.hTMLDOC();

footer();

let form = document.getElementById('CookiesForm');
form.addEventListener('submit', creatnewElement);
function creatnewElement(event) {
  event.preventDefault();
  console.log(event);
  let Location = event.target.LocationForm.value;
  console.log(Location);
  let MIN = event.target.minimumValue.value;
  MIN=Number(MIN);
  console.log(MIN);
  let MAX = event.target.maximumValue.value;
  MAX=Number(MAX);
  console.log(MAX);
  let AVG = event.target.averageValue.value;
  AVG=Number(AVG);
  console.log(AVG);
  let NewElement = new LOCATION(Location,MIN, MAX, AVG);
  console.log(NewElement);
  NewElement.customerperHour();
  NewElement.cookiesCount();
  //NewElement.count();
  NewElement.setTotalCookies();
  FR.textContent='';
  NewElement.hTMLDOC();
  footer();
}






/*
let form = document.getElementById('CookiesForm');

form.addEventListener('submit', newaddelement);

let Name,max,min,avg;

function newaddelement (event) {

  event.preventDefault();
  console.log(event);

  Name = event.target.LocationForm.value;
  console.log(Name);

  max = event.target.maximumValue.value;
  max = parseInt(max);
  console.log(max);

  min = event.target.minimumValue.value;
  min = parseInt(min);
  console.log(min);
  avg = event.target.averageValue.value;
  avg = parseFloat(avg);
  console.log(avg);

  //table.textContent ='';

  let tr = document.createElement('tr');
  table.appendChild(tr);
  let th = document.createElement('th');
  tr.appendChild(th);

  for (let i = 0; i < Hours.length; i++) {
    let th = document.createElement('th');
    tr.appendChild(th);
    th.textContent = Hours[i];
  }

  let total = document.createElement('th');
  tr.appendChild(total);
  total.textContent = 'Daily Location Total ';

}

*/


/*
 let newArea = new LOCATION(Name,max,min,avg);
  newArea.customerperHour();
  newArea.CookiesCount();
  newArea.setTotalCookies();
  newArea.HTMLDOC();*/





/*

//arrofobjects.totalito();
let Seattle={

City:'Seattle',
Min:23,
Max:65,
avg:6.3,
hoursArray:[],
Total:0,
TotalCookies:[],


CustomersPerHour: function(){
	return Math.floor(Math.random() * (this.Max - this.Min +1)) + this.Min;

},

CookiesCount: function(){
		for (let i=0; i<Hours.length; i++){
              this.hoursArray.push(Math.floor(this.CustomersPerHour()
                *this.avg)) ;

		}
        console.log(this.hoursArray);
    },
setTotalCookies: function () {

  for (let i = 0; i < this.hoursArray.length; i++) {
this.Total+=this.hoursArray[i];

  }
  console.log(this.Total);

},
HTMLDOC : function(){

  let parentElement = document.getElementById('Seattel');

 let p = document.createElement('P');

 parentElement.appendChild(p);

  p.textContent='Seattel';
  parentElement.appendChild(p);

  let ul = document.createElement('ul');
  parentElement.appendChild(ul);

//let totalCookies = 0

  for(let i = 0; i < Hours.length; i++){
      let li = this.CustomersPerHour(this.Min,this.Max);
  li = document.createElement('li');
    li.textContent = Hours[i] + `: ${this.hoursArray[i]} cookies.`;
    ul.appendChild(li);

  }

  let li= document.createElement('li');
  li.textContent= `Total: ${this.Total} cookies.`
ul.appendChild(li);
}

}




Seattle.CookiesCount();
Seattle.CustomersPerHour();
Seattle.setTotalCookies();
Seattle.HTMLDOC();

let Tokyo={

  City:'Tokyo',
  Min:3,
  Max:24,
  avg:1.2,
  hoursArray:[],
  Total:0,
  TotalCookies:[],


  CustomersPerHour: function(){

    return Math.floor(Math.random() * (this.Max - this.Min +1)) + this.Min;

  },

  CookiesCount: function(){
      for (let i=0; i<Hours.length; i++){
                this.hoursArray.push(Math.floor(this.CustomersPerHour()
                  *this.avg)) ;

      }
          console.log(this.hoursArray);
      },
  setTotalCookies: function () {

    for (let i = 0; i < this.hoursArray.length; i++) {
      this.Total+=this.hoursArray[i];

    }
    console.log(this.Total);

  },

  HTMLDOC : function(){

    let parentElement = document.getElementById(this.City);

   let p = document.createElement('P');

   parentElement.appendChild(p);

    p.textContent=this.City;
    parentElement.appendChild(p);

    let ul = document.createElement('ul');
    parentElement.appendChild(ul);

  //let totalCookies = 0

    for(let i = 0; i < Hours.length; i++){
        let li = this.CustomersPerHour(this.Min,this.Max);
    li = document.createElement('li');
      li.textContent = Hours[i] + `: ${this.hoursArray[i]} cookies.`;
      ul.appendChild(li);

    }

    let li= document.createElement('li');
    li.textContent= `Total: ${this.Total} cookies.`
  ul.appendChild(li);
  }
};

  Tokyo.CookiesCount();
  Tokyo.CustomersPerHour();
  Tokyo.setTotalCookies();
  Tokyo.HTMLDOC();

  let Dubai={

    City:'Dubai',
    Min:11,
    Max:38,
    avg:3.7,
    hoursArray:[],
    Total:0,
    TotalCookies:[],


    CustomersPerHour: function(){

      return Math.floor(Math.random() * (this.Max - this.Min +1)) + this.Min;

    },

    CookiesCount: function(){
        for (let i=0; i<Hours.length; i++){
                  this.hoursArray.push(Math.floor(this.CustomersPerHour()
                    *this.avg)) ;

        }
            console.log(this.hoursArray);
        },
    setTotalCookies: function () {

      for (let i = 0; i < this.hoursArray.length; i++) {
        this.Total+=this.hoursArray[i];

      }
      console.log(this.Total);

    },

  HTMLDOC : function(){

    let parentElement = document.getElementById(this.City);

   let p = document.createElement('P');

   parentElement.appendChild(p);

    p.textContent=this.City;
    parentElement.appendChild(p);

    let ul = document.createElement('ul');
    parentElement.appendChild(ul);

  //let totalCookies = 0

    for(let i = 0; i < Hours.length; i++){
        let li = this.CustomersPerHour(this.Min,this.Max);
    li = document.createElement('li');
      li.textContent = Hours[i] + `: ${this.hoursArray[i]} cookies.`;
      ul.appendChild(li);

    }

    let li= document.createElement('li');
    li.textContent= `Total: ${this.Total} cookies.`
  ul.appendChild(li);
  }
};


    Dubai.CookiesCount();
    Dubai.CustomersPerHour();
    Dubai.setTotalCookies();
    Dubai.HTMLDOC();


    let Paris={

      City:'Paris',
      Min:20,
      Max:38,
      avg:2.3,
      hoursArray:[],
      Total:0,
      TotalCookies:[],


      CustomersPerHour: function(){

        return Math.floor(Math.random() * (this.Max - this.Min +1)) + this.Min;

      },

      CookiesCount: function(){
          for (let i=0; i<Hours.length; i++){
                    this.hoursArray.push(Math.floor(this.CustomersPerHour()
                      *this.avg)) ;

          }
              console.log(this.hoursArray);
          },
      setTotalCookies: function () {

        for (let i = 0; i < this.hoursArray.length; i++) {
      this.Total+=this.hoursArray[i];

        }
        console.log(this.Total);

      },
      HTMLDOC : function(){

        let parentElement = document.getElementById(this.City);

       let p = document.createElement('P');

       parentElement.appendChild(p);

        p.textContent=this.City;
        parentElement.appendChild(p);

        let ul = document.createElement('ul');
        parentElement.appendChild(ul);

      //let totalCookies = 0

        for(let i = 0; i < Hours.length; i++){
            let li = this.CustomersPerHour(this.Min,this.Max);
        li = document.createElement('li');
          li.textContent = Hours[i] + `: ${this.hoursArray[i]} cookies.`;
          ul.appendChild(li);

        }

        let li= document.createElement('li');
        li.textContent= `Total: ${this.Total} cookies`
      ul.appendChild(li);
      }
      }

      Paris.CookiesCount();
      Paris.CustomersPerHour();
      Paris.setTotalCookies();
      Paris.HTMLDOC();

      let Lima={

        City:'Lima',
        Min:2,
        Max:16,
        avg:4.6,
        hoursArray:[],
        Total:0,
        TotalCookies:[],


        CustomersPerHour: function(){

          return Math.floor(Math.random() * (this.Max - this.Min +1)) + this.Min;

        },

        CookiesCount: function(){
            for (let i=0; i<Hours.length; i++){
                      this.hoursArray.push(Math.floor(this.CustomersPerHour()
                        *this.avg)) ;

            }
                console.log(this.hoursArray);
            },
        setTotalCookies: function () {
        let sum=0;
          for (let i = 0; i < this.hoursArray.length; i++) {
        this.Total+=this.hoursArray[i];

          }
          console.log(this.Total);

        },
        HTMLDOC : function(){

          let parentElement = document.getElementById(this.City);

         let p = document.createElement('P');

         parentElement.appendChild(p);

          p.textContent=this.City;
          parentElement.appendChild(p);

          let ul = document.createElement('ul');
          parentElement.appendChild(ul);

        //let totalCookies = 0

          for(let i = 0; i < Hours.length; i++){
              let li = this.CustomersPerHour(this.Min,this.Max);
          li = document.createElement('li');
            li.textContent = Hours[i] + `: ${this.hoursArray[i]} cookies.`;
            ul.appendChild(li);

          }

          let li= document.createElement('li');
          li.textContent= `Total: ${this.Total} cookies.`
        ul.appendChild(li);
        }
        }

        Lima.CookiesCount();
        Lima.CustomersPerHour();
        Lima.setTotalCookies();
        Lima.HTMLDOC();
        */

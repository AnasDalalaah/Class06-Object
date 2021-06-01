"use strict";

const Hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];

let  StoreTable = document.getElementById("Cookies-Table");
let table = document.createElement("table");
StoreTable.appendChild(table);

const Markets = [];


function LOCATION(City, Min, Max, Avg) {
  
  this.City = City;
  this.Min = Min;
  this.Max = Max;
  this.Avg = Avg;
  this.Total  = 0;
  
  this.cusPerhour  = [];
  this.cookperHour   = [];
  Markets.push(this);
  console.log(this);
}

LOCATION.prototype.customerperHour = function () {
  for (let i = 0; i < Hours.length; i++) {
    let random = Math.floor(Math.random() * (this.Max - this.Min) +this.Min);
    this.cusPerhour.push(random);
  }
};

LOCATION.prototype.CookiesCount  = function () { 
  for (let i = 0; i < Hours.length; i++) {
    let Cookies  = this.Avg * this.cusPerhour[i];
    this.cookperHour.push(Math.ceil( Cookies ));
  }
};

LOCATION.prototype.setTotalCookies = function () {
  for (let i = 0; i < this.cookperHour.length; i++) {
    this.Total = this.Total + this.cookperHour[i];
  }
  return this.Total;
};

let tr = document.createElement("tr");
table.appendChild(tr);
let th = document.createElement("th");
tr.appendChild(th);

for (let i = 0; i < Hours.length; i++) {
  let th = document.createElement("th");
  tr.appendChild(th);
  th.textContent = Hours[i];
}

let total  = document.createElement("th");
tr.appendChild(total );
total .textContent = " Daily Location Total ";

LOCATION.prototype.HTMLDOC  = function () {
  let tr1 = document.createElement("tr");
  table.appendChild(tr1);
  tr1.textContent = this.City;

  let td;
  for (let i = 0; i < this.cookperHour.length; i++) {
    td = document.createElement("td");
    tr1.appendChild(td);
    td.textContent = this.cookperHour[i];
  }

  let tdsum = document.createElement("td");
  tr1.appendChild(tdsum);
  tdsum.textContent = this.Total;
}



const Seattle = new LOCATION("Seattle",23,65,6.3);//min,max,avg
Seattle.customerperHour();
Seattle.CookiesCount();
Seattle.setTotalCookies();
Seattle.HTMLDOC();


const Tokyo = new LOCATION("Tokyo",3,24,1.2);
Tokyo.customerperHour();
Tokyo.CookiesCount();
Tokyo.setTotalCookies();
Tokyo.HTMLDOC();


const Dubai = new LOCATION("Dubai",11,38,3.7);
Dubai.customerperHour();
Dubai.CookiesCount();
Dubai.setTotalCookies();
Dubai.HTMLDOC();

const Paris = new LOCATION("Paris",20,38,2.3);
Paris.customerperHour();
Paris.CookiesCount();
Paris.setTotalCookies();
Paris.HTMLDOC();

const Lima = new LOCATION("Lima",2,16,4.6 );
Lima.customerperHour();
Lima.CookiesCount();
Lima.setTotalCookies();
Lima.HTMLDOC();


let Cities=[Seattle,Tokyo,Dubai,Paris,Lima];

Totalfooter();

function Totalfooter() {
let trTotal = document.createElement("tr");
table.appendChild(trTotal);
trTotal.textContent = "Total";

let grandSum = 0 ;
let summationPerour ;
let td ;
for (let i=0 ; i<Hours.length ; i++){
  summationPerour = 0
  for (let j =0 ; j< Cities.length ; j++){
    summationPerour = summationPerour + Cities[j].cookperHour[i]

  }
  td = document.createElement('td');
  trTotal.appendChild(td);
  td.textContent = summationPerour

   grandSum += summationPerour
}

td = document.createElement('td') ;
trTotal.appendChild(td);
td.textContent=grandSum

}


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

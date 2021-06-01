"use strict";


const Hours= ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];

console.log(Hours);

let StoreTable = document.getElementById('Cookies-Table');







const Markets = [];



function LOCATION(City, Min, Max, avg){

    this.City = City;
    this.Min = Min;
    this.Max = Max;
    this.avg = avg;
    this.Total = 0;
    this.CustomerPerHour = [];
    this.CookiesPerHour = [];

    Markets.push(this);
    console.log(this);


    LOCATION.prototype.CustomersPerHour = function () {
  for (let i = 0; i < Hours.length; i++) {
    let random = Math.floor(Math.random() * (this.Max - this.Min) + this.Min);
    this.CustomerPerHour.push(random);
  }

};

LOCATION.prototype.CookiesCount = function () { 
  for (let i = 0; i < Hours.length; i++) {
    let Cookies = this.avg * this.CustomerPerHour[i];
    this.CookiesPerHour.push(Math.ceil(Cookies));
  }
};

LOCATION.prototype.setTotalCookies = function () {
  for (let i = 0; i < this.CookiesPerHour.length; i++) {
    this.Total = this.Total + this.CookiesPerHour[i];
   
  }
  return this.Total;
};

LOCATION.prototype.HTMLDOC = function(){
  let trelment = document.createElement('tr');
  let tdelment = document.createElement('td');
  tdelment.textContent = this.City;
  trelment.appendChild(tdelment);
  //trelment.textContent = Hours;
  //tdelment.appendChild(trelment);
  let headingRow = document.createElement('tr');
  StoreTable.appendChild(headingRow);
  let th1 = ' ';
  th1 = document.createElement('th');
  headingRow.appendChild(th1);
  for (let i = 0; i < Hours.length; i++) {
     th1 = document.createElement('th');
     headingRow.appendChild(th1);
     th1.textContent = `${Hours[i]}`;
     //   console.log(thElement);
  //th1.textContent = 'Daily location total';
}

  for (let i = 0 ; i < this.CookiesPerHour.length ; i++){
  let tdelment = document.createElement('td');
  tdelment.textContent = this.CookiesPerHour[i];
  trelment.appendChild(tdelment);
 }
 tdelment = document.createElement('td');
 tdelment.textContent = this.Total;
 trelment.appendChild(tdelment);

 StoreTable.appendChild(trelment);
 
}


}


const  Seattle = new LOCATION("Seattle",23,65, 6.3);
Seattle.CustomersPerHour();
Seattle.CookiesCount();
Seattle.setTotalCookies();
Seattle.HTMLDOC();

const  Tokyo = new LOCATION("Tokyo", 3 , 24 , 1.2);
Tokyo.CustomersPerHour();
Tokyo.CookiesCount();
Tokyo.setTotalCookies();
Tokyo.HTMLDOC();

const  Dubai = new LOCATION("Dubai", 11, 38,3.7);
Dubai.CustomersPerHour();
Dubai.CookiesCount();
Dubai.setTotalCookies();
Dubai.HTMLDOC();



const  Paris = new LOCATION("Paris", 20,38,2.3 );
Paris.CustomersPerHour();
Paris.CookiesCount();
Paris.setTotalCookies();
Paris.HTMLDOC();

const  Lima = new LOCATION("Lima",2,16,4.6 );
Lima.CustomersPerHour();
Lima.CookiesCount();
Lima.setTotalCookies();
Lima.HTMLDOC();

let CITIES=[Seattle,Tokyo,Dubai,Paris,Lima];

total();

function total () {
let trTotal = document.createElement("tr");
StoreTable.appendChild(trTotal);
trTotal.textContent = "Total";


let grandSum = 0 ;
let summationPerour ;
let td ;
for (let i=0 ; i< Hours.length ; i++){
  summationPerour = 0
  
  for (let j =0 ; j< CITIES.length ; j++){
    summationPerour = summationPerour + CITIES[j].CookiesPerHour[i]

  }

  td = document.createElement('td');
  StoreTable.appendChild(td);
  td.textContent = summationPerour

   grandSum += summationPerour
}

td = document.createElement('td') ;
StoreTable.appendChild(td);
td.textContent=grandSum;

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

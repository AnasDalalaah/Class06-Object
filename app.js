'use strict';

let Hours= ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];
console.log(Hours);
let sum;
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
  





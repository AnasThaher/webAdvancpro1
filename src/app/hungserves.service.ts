import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HungservesService {

  constructor() { }

//name, description, price, image

getminudata(){

return [
{"name":"Genneh Restaurant","description":"Shawarma shami bread served with mayonnaise, pickles and fries","price":10,"image":"https://hsaa.hsobjects.com/h/restaurants/logos/000/025/216/f464f8d81f9576fd630b5418ce5dd888-small.png"},
{"name":"Genneh Restaurant","description":"Shawarma shami bread served with mayonnaise, pickles and fries","price":55,"image":"https://hsaa.hsobjects.com/h/restaurants/logos/000/025/216/f464f8d81f9576fd630b5418ce5dd888-small.png"},
{"name":"Genneh Restaurant","description":"Shawarma shami bread served with mayonnaise, pickles and fries","price":100,"image":"https://hsaa.hsobjects.com/h/restaurants/logos/000/025/216/f464f8d81f9576fd630b5418ce5dd888-small.png"},
{"name":"Genneh Restaurant","description":"Shawarma shami bread served with mayonnaise, pickles and fries","price":44,"image":"https://hsaa.hsobjects.com/h/restaurants/logos/000/025/216/f464f8d81f9576fd630b5418ce5dd888-small.png"},
{"name":"Genneh Restaurant","description":"Shawarma shami bread served with mayonnaise, pickles and fries","price":56,"image":"https://hsaa.hsobjects.com/h/restaurants/logos/000/025/216/f464f8d81f9576fd630b5418ce5dd888-small.png"},
{"name":"Genneh Restaurant","description":"Shawarma shami bread served with mayonnaise, pickles and fries","price":554,"image":"https://hsaa.hsobjects.com/h/restaurants/logos/000/025/216/f464f8d81f9576fd630b5418ce5dd888-small.png"},
{"name":"Genneh Restaurant","description":"Shawarma shami bread served with mayonnaise, pickles and fries","price":5,"image":"https://hsaa.hsobjects.com/h/restaurants/logos/000/025/216/f464f8d81f9576fd630b5418ce5dd888-small.png"},

]

}




gethungdata(){

  return [
  {"name":"Genneh Restaurant","subtitl":"Arabian Food","rate":4.2,"image":"https://hsaa.hsobjects.com/h/restaurants/logos/000/025/216/f464f8d81f9576fd630b5418ce5dd888-small.png"},
  
  ]
  
  }

}

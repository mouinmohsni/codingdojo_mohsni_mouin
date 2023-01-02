public class Item {


// Member Variables
  private String name ;
  private double price;

// constructor
public Item (String name , double price ){

    this.name = name ;
    this.price = price ;

}

// methods






// get && set name
public String getName(){
    return this.name; 
}
public void setName(String newName){
    this.name = newName;
}

// get and set prices
public double getPrice(){
    return this.price; 
}
public void setprice(double newPrice){
    this.price = newPrice;
}
}
import java.util.ArrayList; 

public class Order {

// membre variable 
public String name ;
public double total ;
public boolean ready ;
public ArrayList<Item> items = new ArrayList<Item>() ;

// constactor
public Order ( String name , double total , boolean ready , Item items){

    this.name = name ;
    this.total = total ;
    this.ready = ready ;
    this.items = new ArrayList<Item>() ;

}

// methode 

public  Order displayAll(){
System.out.println("Name: " + this.getName());
System.out.println("Total: " + this.getTotal());
System.out.println("is Rady: " + this.getReady());
System.out.println("item: " + this.getItems());
return this;
} 





// get and set name
public String getName(){
    return name; 
}
public void setName(String newName){
    this.name = newName;
}

// get and set total
public double getTotal(){
    return this.total; 
}
public void setTotal(double newTotal){
    this.total = newTotal;
}

// get and set ready
public boolean getReady(){
    return this.ready; 
}
public void setReady(boolean newReady){
    this.ready = newReady;
}
//get and set items
public ArrayList getItems(){
    for(int i = 0; i<items.size();i++)
    System.out.println(items.get(i));
    return this.items; 
}
// public void setReady(boolean newReady){
//     this.ready = newReady;
// }



}
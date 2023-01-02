import java.util.ArrayList;
public class Main {
    public static void main(String[] args) {
    
        // Menu items
        Item item1 = new Item("item1" , 2.0);
        Item item2 = new Item("item2" , 5.5);
        Item item3 = new Item("item3" , 3.0);
        Item item4 = new Item("item4" , 4.5);
        
        item1.setName("mocha");
        item2.setName("latte");
        item3.setName("drip coffee");
        item4.setName("capuccino");



        // array liste of order 
        Order order1 = new Order( "order1" , 5.0, false ,item1);
        Order order2 = new Order( "order1" , 5.0, false ,item2);
        Order order3 = new Order( "order1" , 5.0, false ,item3);
        Order order4 = new Order( "order1" , 5.0, false ,item4);

        order1.setName("Cindhuri");
        order2.setName("Jimmy");
        order3.setName("Noah");
        order4.setName("Sam");

        order1.displayAll();
        
        System.out.println("Total: " + order1.getTotal());





        // Application Simulations
        // Use this example code to test various orders' updates
        System.out.printf("Name: %s\n", order1.name);
        System.out.printf("Total: %s\n", order1.total);
        System.out.printf("Ready: %s\n", order1.ready);
    }
}

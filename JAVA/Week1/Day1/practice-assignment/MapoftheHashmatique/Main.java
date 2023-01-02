import java.util.ArrayList;
import java.util.Random;
public class Main {
    
	public static void main(String[] args) {
		TrackList generator = new TrackList ();
		
    System.out.println("---------- welcome to your play liste ------------");
    System.out.println(" A : Pull out one of the songs by track title ");
    System.out.println(" B : Pull all fon the tack names with the lyris ");
    System.out.println("---------------------------------------------------");
		String menu = System.console().readLine();
    generator.puttrack();

             System.out.println(menu);
        if ((menu == "A")||( menu =="a")) { 
             System.out.println("---------- give me the title  ------------");
             String title = System.console().readLine();
             String lyris = generator.getTrack(title);
             System.out.println(lyris);
     }else {




     }

        generator.getAll();


	}
}

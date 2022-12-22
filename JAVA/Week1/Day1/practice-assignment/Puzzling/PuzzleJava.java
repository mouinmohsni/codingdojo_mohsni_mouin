// You will need to import the Random library from java.util
import java.util.Random;
import java.util.ArrayList; 

public class PuzzleJava {

// methods to get a random array of number
public ArrayList<Integer> getTenRolls(){
    // initialiat varible  
    int i =0 ;
    int min = 0;
    int max =10;
    int num ;
    // declaration arrayListe of int
    ArrayList<Integer> randomArray = new ArrayList<Integer>();

    // using while loop to put random number in the array 
while (i<10 ) {

// inisitalisat  a random variable  
Random randMachine = new Random();
num =randMachine.nextInt(max - min + 1) + min;

// add varible in the ListeArray
    randomArray.add(num);
    i++ ;}
        return randomArray ;

}



public String getRandomLetter(){
    
    // declaration of variable 
    int minn = 0;
    int maxx =25;
    int numb ;
    String letter ;
    
// declaration ascii code of "a" like int in the ascii variable 
    int ascii= 97;

// declaration ArrayListe to put all of letters of the alphabet in it 
    ArrayList<String> Arraychar = new ArrayList<String>();
        
// using  foor loop to covert the ascii code in alphabet an put it in the array 
        for(int j = ascii; j <= 122; j++){
// useing character.toString methode to convert ascii code to alphabet
            String convertedChar = Character.toString((char)j);
            // System.out.println(j+" => "+convertedChar);
            Arraychar.add(convertedChar) ;
        }
    Random randMachine = new Random();
    numb =randMachine.nextInt(maxx - minn + 1) + minn;
    letter = Arraychar.get(numb);
    
 return  letter;
}


public String generatePassword(){
    String Password ="" ;

    for (int i =0 ; i<8 ;i++){

        Password+=this.getRandomLetter();
    }

    return Password;
}

public String getNewPasswordSet( int number){

    String newPassword ="";
    for (int i =0 ; i< number ; i++){
        newPassword += this.getRandomLetter() ;
    }
    return newPassword ;
}
}


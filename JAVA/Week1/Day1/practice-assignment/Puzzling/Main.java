
import java.util.ArrayList;
import java.util.Random;
public class Main {
    
	public static void main(String[] args) {
		PuzzleJava generator = new PuzzleJava();
		ArrayList<Integer> randomRolls = generator.getTenRolls();
		System.out.println(randomRolls);

		String randomLetter =generator.getRandomLetter();
		System.out.println(randomLetter);

		String pwd =generator.generatePassword();
		System.out.println(pwd);

		System.out.println("give me number");
		String number = System.console().readLine();
		int i=Integer.parseInt(number);  

		String newPwd =generator.getNewPasswordSet(i);
		System.out.println(newPwd);

	}
}

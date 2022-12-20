import java.util.Date;
public class AlfredQuotes {
    
    public String basicGreeting() {
        // You do not need to code here, this is an example method
        return "Hello, lovely to see you. How are you?";
    }
    
    public String guestGreeting(String name) {
        String message =String.format("Hello, %s",name +" . Lovely to see you.");
        return message ;
    }
    
    public String dateAnnouncement() {
        Date day = new Date();
        String message2 = "It is currently "+ day ;
        return message2;
    }
    
    public String respondBeforeAlexis(String conversation) {
        String message3 ="She certainly isn't sophisticated enough for that";
        if (conversation.indexOf("Alexis") > 0){
            message3 ="She certainly isn't sophisticated enough for that";
        } 
        // else if
        if (conversation.indexOf("Alfred") > 0)
        {
            message3 ="At your service";
        } 
        // else 
        if (conversation.indexOf("Alfred") < 0 && conversation.indexOf("Alexis") < 0){
            message3 ="Right. And with that I shall retire.";
        }

        return message3;
    }


    
	// NINJA BONUS
	// See the specs to overload the guessGreeting method
    // SENSEI BONUS
    // Write your own AlfredQuote method using any of the String methods you have learned!
}


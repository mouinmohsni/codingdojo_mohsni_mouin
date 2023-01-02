class BankAccount {

// member variable 
    private double checkingBalance ;
    private double savingsBalance ;
    private static int accountNumber = 0 ;
    private static double totalAmount = 0.0 ;

    public BankAccount ( double checkingBalance ,double savingsBalance ){

        this.checkingBalance = checkingBalance;
        this.savingsBalance = savingsBalance;
        accountNumber++;
        totalAmount +=   this.checkingBalance + this.savingsBalance ;
        
    }


    // get && set checkingBalance

//Create a getter method for the user's checking account balance.
public double getCheckingBalance(){ 
    return this.checkingBalance; 
}

//Create a method that will allow a user to deposit money into either the checking account balance
public void addCheckingBalance(double addMoney){   
    this.checkingBalance += addMoney;
}

//Create a method to withdraw money from chaking balance. Do not allow them to withdraw money if there are insufficient funds
public void withdrawCheckingBalance(double withdrawMoney){
    if( this.checkingBalance - withdrawMoney <= 0){
        System.out.println("insufficient funds : you have " + this.checkingBalance);
    }else{
    this.checkingBalance -= withdrawMoney;
    }
}

    // get && set savingsBalance
public double getSavingsBalance(){ //Create a getter method for the user's saving account balance.
    return this.savingsBalance; 
}

//Create a method that will allow a user to deposit money into either the saving account balance
public void addSavingsBalance(double addMoney){   
    this.savingsBalance += addMoney;
}


//Create a method to withdraw money from chaking balance. Do not allow them to withdraw money if there are insufficient funds
public void withdrawSavingsBalance(double withdrawMoney){
    if( this.savingsBalance - withdrawMoney <= 0){
        System.out.println("insufficient funds : you have " + this.savingsBalance);
    }else{
    this.savingsBalance -= withdrawMoney;
    }
}

public static double displayAll (){
    return totalAmount ;
}


}
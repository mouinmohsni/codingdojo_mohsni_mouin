public class Main {

    public static void  main( String[] args ) {

        BankAccount account1 = new BankAccount(10.5 , 0.5);

            System.out.println(account1.displayAll());
System.out.println("----------------Savings Balance------------------------");
            account1.withdrawSavingsBalance(10.0);
            account1.addSavingsBalance(10.0);
            account1.withdrawSavingsBalance(5.0);
            System.out.println(account1.getSavingsBalance());
System.out.println("----------------Checking Balance------------------------");
            account1.withdrawCheckingBalance(20.0);
            account1.addCheckingBalance(30.0);
            account1.withdrawCheckingBalance(5.0);
            System.out.println(account1.getCheckingBalance());
System.out.println("------------------total----------------------");
            System.out.println(account1.displayAll());





    }
}
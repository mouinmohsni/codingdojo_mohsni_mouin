class BankAccount:
    nb_acc=0
    accounts=[]
    def __init__(self, int_rate=0.01, balance=0): 
        self.int_rate = int_rate
        self.balance = balance
        BankAccount.accounts.append(self)
        BankAccount.nb_acc+=1

    def deposit(self, amount):
        self.balance += amount
        return self

    def withdraw(self, amount):
        if self.balance >= amount:
            self.balance -= amount
        else:
            print("Insufficient funds: Charging a $5 fee")
            self.balance -= amount-5
        return self

    def display_account_info(self):
        print(f"balance : {self.balance} ")
        return self

    def yield_interest(self):
        self.balance +=(self.int_rate*self.balance)
        return self

    @classmethod
    def print_acc(cls):
        for i in cls.accounts:
            i.display_account_info()
        return cls

    def nember_all_acc(cls):
        print(f"nember of all account{cls.nb_acc}")

account_1 = BankAccount(0.05, 500)
account_2 = BankAccount(0.01, 100)
account_3 = BankAccount(0.03, 1500)
account_4 = BankAccount(0.1, 20000)


account_4.display_account_info()
# BankAccount.nember_all_acc()
BankAccount.print_acc()
print(BankAccount.nb_acc)







# account_1.deposit(100).deposit(100).deposit(100).withdraw(1000).yield_interest().display_account_info()
# account_1.deposit(100).deposit(100).deposit(100).withdraw(1000).yield_interest().display_account_info()
# account_3.deposit(1000).deposit(250).deposit(50).withdraw(1000).yield_interest()
# account_4.deposit(300).deposit(900).deposit(100).withdraw(1000).yield_interest()
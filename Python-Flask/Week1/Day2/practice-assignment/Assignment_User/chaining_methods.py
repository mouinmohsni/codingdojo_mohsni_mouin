


class user:
    bank_name = "First National Dojo"	
    def __init__(self, first_name , last_name,e_mail, account_balance=0):
        self.first_name = first_name
        self.last_name = last_name
        self.e_mail = e_mail
        self.account_balance = account_balance
    
    def make_deposit(self, amount):
        self.account_balance += amount
        return self
    
    def make_withdrawal(self, amount):
        self.account_balance -= amount
        return self
    
    def display_user_balance(self):
        print(f"user : {self.first_name} {self.last_name} Balance: ${self.account_balance}")
        return self
    
    def transfer_money(self, other_user, amount):
        self.account_balance -= amount
        other_user.account_balance += amount
        print(f"user : {self.first_name} {self.last_name} Balance: ${self.account_balance} sand monny to { other_user.first_name}  his balance now is { other_user.account_balance}")
        return self

name_1 = user( "mouin" , "mohsni", "mouin.mohsni@" ,1000)
name_2 = user( "nassim" , "chaaben", "nassim.chaaben@" ,3000)
name_3 = user( "amin" , "mlayah", "nassim.chaaben@",100 )


class BankAccount:
    accounts=[]
    def __init__(self, int_rate=0.01, balance=0): 
        self.int_rate = int_rate
        self.balance = balance
        BankAccount.accounts.append(self)

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

class User:
    def __init__(self, name, email):
        self.name = name
        self.email = email
        self.account = BankAccount(int_rate=0.02, balance=0)	# added this line

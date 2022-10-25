


class user:
    bank_name = "First National Dojo"	
    def __init__(self, first_name , last_name,e_mail, account_balance=0):
        self.first_name = first_name
        self.last_name = last_name
        self.e_mail = e_mail
        self.account_balance = account_balance
    
    def make_deposit(self, amount):
        self.account_balance += amount
    
    def make_withdrawal(self, amount):
        self.account_balance -= amount
    
    def display_user_balance(self):
        print(f"user : {self.first_name} {self.last_name} Balance: ${self.account_balance}")
    
    def transfer_money(self, other_user, amount):
        self.account_balance -= amount
        other_user.account_balance += amount
        print(f"user : {self.first_name} {self.last_name} Balance: ${self.account_balance} sand monny to { other_user.first_name}  his balance now is { other_user.account_balance}")

name_1 = user( "mouin" , "mohsni", "mouin.mohsni@" ,1000)
name_2 = user( "nassim" , "chaaben", "nassim.chaaben@" ,3000)
name_3 = user( "amin" , "mlayah", "nassim.chaaben@",100 )

name_1.make_deposit(500)
name_1.make_deposit(500)
name_1.make_deposit(1500)
name_1.make_withdrawal(500)
name_1.display_user_balance()

name_2.make_deposit(1000)
name_2.make_withdrawal(900)
name_2.display_user_balance()

name_3.make_withdrawal(500)
name_3.make_withdrawal(1000)
name_3.make_withdrawal(2000)
name_1.make_deposit(1500)

name_1.transfer_money(name_2, 200)
name_1.transfer_money(name_3, 450)





# print(name_1.first_name)


# name_1.make_withdrawal(100)

# print(name_1.account_balance)




# print(name_2.account_balance)
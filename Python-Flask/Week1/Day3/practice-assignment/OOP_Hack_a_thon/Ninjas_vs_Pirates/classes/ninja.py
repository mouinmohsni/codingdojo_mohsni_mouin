
class Ninja:


    def __init__( self , name ):
        self.name = name
        self.strength = 10
        self.speed = 5
        self.health = 100
    
    def show_stats( self ):
        print(f"Name: {self.name}\nStrength: {self.strength}\nSpeed: {self.speed}\nHealth: {self.health}\n")

    def attack( self , pirate ):
        pirate.health -= self.strength
        return self

class ninjutsu (Ninja):
    def __init__( self ,name , first_element , element_2):
        super().__init__(name)
        self.first_element = first_element
        self.element_2 = element_2

    def attaque_ultimat(self , attaque_element, pirate):
        if attaque_element == self.first_element :
            pirate.health -= 20
            self.speed += 2
        elif attaque_element == self.element_2 :
            pirate.health -= 15
        else:
            pirate.health -= 10
        # else:
        #     print("your attack is failed")
        if self.speed > 10:
            pirate.health -= 25
            self.speed = 5
        return self

    def show_ninjutsu(this):
        print(f"-Name: {this.name}\n-Strength: {this.strength}\n-Speed: {this.speed}\n-Health: {this.health}\n-first_element : {this.first_element}\n-second_element : {this.element_2}\n")

class tayjutsu (Ninja):
    def __init__ ( self , name, weapon_1 , martial_arts ):
        super().__init__(name)
        self.weapon_1 = weapon_1
        self.martial_arts = martial_arts
    
    def weapon_attack  (self , pirate ):
        weapen_damage = 10
        art_damage = 20
        pirate.health -= self.strength
        if self.health < 10 :
            pirate.health -=(weapen_damage+art_damage)
            self.health -= 7
        return self

    def show_tayjustu (this):
        print(f"Name: {this.name}\n-Strength: {this.strength}\n-Speed: {this.speed}\n-Health: {this.health}\n-weapon : {this.weapon_1}\n-fighting style : {this.martial_arts}\n")




michelangelo = Ninja("Michelanglo")
naruto = ninjutsu('TestName', 'fire','magic')
#test.show_tayjustu()
naruto.show_ninjutsu()

#print(f"Name: {test.name}\nStrength: {test.strength}\nSpeed: {test.speed}\nHealth: {test.health}\nweapen : {test.weapen_1}\nfighting style : {test.fighting_style}")

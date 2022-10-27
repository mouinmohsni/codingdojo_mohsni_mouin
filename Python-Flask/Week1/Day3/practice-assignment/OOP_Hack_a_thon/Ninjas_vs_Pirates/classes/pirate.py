


class Pirate:

    def __init__( self , name ):
        self.name = name
        self.strength = 15
        self.speed = 3
        self.health = 100

    def show_stats( self ):
        print(f"Name: {self.name}\nStrength: {self.strength}\nSpeed: {self.speed}\nHealth: {self.health}\n")

    def attack ( self , ninja ):
        ninja.health -= self.strength
        return self


class ZPirate(Pirate):

    def __init__( self,name,sword,coin):
        super().__init__(name)
        self.sword=sword
        self.coin=coin
        self.strength = 25
        self.speed = 3
        self.health = 100

        
    def damage_sword(self,ninja):
        ninja.health-= 22
        return self
    def fli_py(self):
        self.health +=7
        self.speed +=2
        return self
    def show_statsZ( self ):
        print(f"Name: {self.name}\nsword: {self.sword}\ncoin: {self.coin}\nStrength: {self.strength}\nSpeed: {self.speed}\nHealth: {self.health}\n")
    
    


class GPirate(Pirate):

    def __init__( self,name,gun,drunk):
        super().__init__(name)
        self.gun=gun
        self.drunk=drunk
        self.strength = 25
        self.speed = 2.4
        self.health = 100


    def damage_gun(self,ninja):
        ninja.health-= 22
        return self
    def druning (self):
        
        self.health +=17
        self.speed +=2.75
        return self
    def show_statsG( self ):
        print(f"Name: {self.name}\ngun: {self.gun}\ndrunk: {self.drunk}\nStrength: {self.strength}\nSpeed: {self.speed}\nHealth: {self.health}\n")


    

    


    


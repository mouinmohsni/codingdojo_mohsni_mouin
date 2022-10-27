from classes.ninja import Ninja
from classes.pirate import Pirate
from classes.ninja import ninjutsu
from classes.ninja import tayjutsu
from classes.pirate import ZPirate
from classes.pirate import GPirate

michelangelo = Ninja("Michelanglo")

jack_sparrow = Pirate("Jack Sparrow")

michelangelo.attack(jack_sparrow)
jack_sparrow.show_stats()
#------------------- crate pirate
michelangelo = Ninja("Michelanglo")

jack_sparrow = Pirate("Jack Sparrow")

michelangelo.attack(jack_sparrow)
jack_sparrow.show_stats()

ali_baba = ZPirate ('ali_baba',"kotan","gold")
ali_baba.show_statsZ()

dongol = GPirate ('dongol',"AK","wodks")
dongol.show_statsG()

hoshi= GPirate ('hoshi',"FMS","hennessy")

hoshi.show_statsG()

pawlo= ZPirate ('pawlo',"ikino","poker chip")
pawlo.show_statsZ()

#-------------- crate ninja
name_ninja_1 = input("give name for your ninja n 1: ")
ninja_1 = Ninja(name_ninja_1)
ninja_1.show_stats()

name_ninja_2 = input("give name for your ninja n 2 ( useing ninjutsu ): ")

# element_1 = input(f"give me the first element for {name_ninja_2} ( fire/wind/water/earth/lightning ): ")
# if element_1 != "fire" or element_1 != "wind" or element_1 != "earth" or element_1 != "lightning":
#     element_1 = input(f"plz choose one of this element  for {name_ninja_2} ( fire/wind/water/earth/lightning ): ")
# else:
#   print(f"you have choose {element_1} for {name_ninja_2}")
# element_2 =  input(f"give me the second element for {name_ninja_2} ( fire/wind/water/earth/lightning ): ")
# if (element_2 != "fire") or (element_2 != "wind") or (element_2 != "earth") or (element_2 != "lightning"):
#     element_2 = input(f"plz choose one of this element  {name_ninja_2} ( fire/wind/water/earth/lightning ): ")
# else :
#     print(f"you are choose {element_2} for {name_ninja_2}")

el_1 = input(f"choose the first element for {name_ninja_2}\nif you want to choose :\n-fire tap 1 : \n-wind tap 2:\n-water tap 3 : \n-earth tap 4 : \n-lightning tap 5 : ")
if el_1 == "1" :
    element_1="fire"
elif el_1 == "2":
    element_1="wind"
elif el_1 == "3":
    element_1="water"
elif el_1 == "4":
    element_1="earth"
else :
    element_1="lightning"

print(f"you have choose {element_1} like first element for {name_ninja_2}")

el_2 = input(f"choose the second element for {name_ninja_2}\nif you want to choose :\n-fire tap 1 : \n-wind tap 2:\n-water tap 3 : \n-earth tap 4 \n-lightning tap 5 : ")
if el_2 == "1" :
    element_2="fire"
elif el_2 == "2":
    element_2="wind"
elif el_2 == "3":
    element_2="water"
elif el_2 == "4":
    element_2="earth"
else :
    element_2="lightning"

print(f"you have choose {element_2} like seconde element  for {name_ninja_2}")
ninja_2 = ninjutsu (name_ninja_2 , element_1 , element_2)
ninja_2.show_ninjutsu()


name_ninja_3 = input("give name for your ninja n 3 ( useing tayjutsu ): ")

arm_1= input(f"give me the weapon for {name_ninja_3}\n - katana tap : 1 \n - Shurikens tap 2 : ")
if arm_1 == "1" :
    weapon = "katana"
else :
    weapon ="Shurikens"
print(f"you have choose {weapon} like weapon  for {name_ninja_3}")

arm_2=  input(f"give me the martial_art for {name_ninja_3}\n - Ju-jitsu tap 1 : \n - Kendo tap 2 : \n -Iaïdo tap 3 : ")
if arm_2 == "1" :
    martial_art = "Ju-jitsu"
elif arm_2 == "2" :
    martial_art = "Kendo"
else :
    martial_art ="Iaïdo"
print(f"you have choose {martial_art} like type of martial art for {name_ninja_3}")

ninja_3 = tayjutsu (name_ninja_3 , weapon , martial_art)
ninja_3.show_tayjustu()
#--------------attaque ninja
print("**************************************** NINJA ATTACK ***********************************")
ene= input(f"if you want attack : \n - jack_sparrow tap 1 : \n - ali baba tap 2 :\n - dongol tap 3 :\n - hoshi tap 4 :\n - pawlo tap 5 :")
if ene==1 :
    enemy = jack_sparrow.name
elif ene==2 :
    enemy = ali_baba.name
elif ene==3 :
    enemy = dongol.name
elif ene==4 :
    enemy = hoshi.name
else:
    enemy = pawlo.name

choice = input(f"if you want to attack with {name_ninja_1} tap 1 :\nif you want to attack with {name_ninja_2} tap 2\nif you want to attack with {name_ninja_3} tap 3 : ")
if choice == "1" :
    print (f" you choose {name_ninja_1} to attack {enemy} ")
    print(F"************************************** {name_ninja_1} attak {enemy}****************************************************** ")
    ninja_1.attack(enemy)
elif choice == "2":
    print("give me your element of attack : fire tap 1 , wind tap 2 , water tap 3 , earth tap 4 ,lightning tap 5  ")
    if el_1 == "1" :
        attack_2="fire"
    elif el_1 == "2":
        attack_2="wind"
    elif el_1 == "3":
        attack_2="water"
    elif el_1 == "4":
        attack_2="earth"
    else :
        attack_2="lightning"

    print (f" you choose{attack_2} to attack {enemy} ")
    print(F"************************************** {name_ninja_2} attak {enemy}****************************************************** ")
    ninja_2.attaque_ultimat(attack_2 , enemy)
else:
    print (f" you choose{name_ninja_2} to attack {enemy} ")
    ar_attack = input(f"give me your type of attack for  : - katana tap : 1 \n - Shurikens tap 2 : \n - Ju-jitsu tap 3 : \n - Kendo tap 4 : \n -Iaïdo tap 5 : ")
    if ar_attack=="1":
        attack_3 = "katana"
    elif ar_attack=="2":
        attack_3 = "Shurikens"
    elif ar_attack=="3":
        attack_3 = "Ju-jitsu"
    elif ar_attack=="4":
        attack_3 = "Kendo"
    else :
        attack_3 = "Iaïdo"
    print (f" you choose {attack_3} to attack {enemy} ")
    print(F"************************************** {name_ninja_3} attak {enemy}****************************************************** ")
    ninja_3.weapon_attack(enemy)

print("**************************************** PIRATE ATTACK ***********************************")

x = input("choisir votre joueur")
if x !="ZPirate:ali baba" or x!="GPirate:dongol" or x!="Pirate:jack sparrow" or x!="ZPirate:pawlo"or x!="GPirate:hoshi":
    x = input("choisir votre joueur")
else:
    x ="Pirate:jack sparrow"
    x=input("!!!don't play now if you want!!!")
x = input(" votre joueur est jack sparrow ")

oo = input("choisir votre type de jouer : ATC or DUF : ")
if oo != "ATC"  :
    oo = input("i will brok you ")
else:
    oo ="DUF"
    oo = input("  i healing now!! ")
oo= input("***i'm going to my ship***")

print("**************************************** RESULTS for NINJA ***********************************")
print(f"result for {name_ninja_1}")
ninja_1.show_stats()
print(f"result for {name_ninja_2}")
ninja_2.show_ninjutsu()
print(f"result for {name_ninja_3}")
ninja_3.show_tayjustu()
print("**************************************** RESULTS for PIRATE ***********************************")

#1 - Print all integers from 0 to 150
for i in range(0,151):
    print(i)
#2 - Print all the multiples of 5 from 5 to 1,000
for i in range(5,1001,5):
    print(i)
#3 - Counting, the Dojo Way - Print integers 1 to 100. If divisible by 5, print "Coding" instead. If divisible by 10, print "Coding Dojo".
for i in range(1,101):
    if i % 10 == 0 :
        print("Coding Dojo")
    elif i % 5 == 0 :
        print("Coding")
    else :
        print(i)
# 4-Waouh. That Sucker's Huge - Ajoutez des nombres entiers impairs de 0 à 500 000 et imprimez la somme finale.
sum=0
for i in range(0,500001):
    if i % 2 != 0 :
        sum=sum+i

print(sum)
#5-Countdown by Fours - Print positive numbers starting at 2018, counting down by fours.
for i in range (2018,-1,-4):
    print(i)
#Flexible Counter 
lowNum = 2
highNum = 9
mult = 3
for i in range(lowNum,highNum+1):
    if i % mult == 0:
        print(i)
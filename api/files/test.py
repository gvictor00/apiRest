import sys 
import datetime
from time import sleep

print ("Abriu o arquivo corretamente!")
print (datetime.datetime.now())
sleep(2)
print ("Dois segundos depois?")
sleep(3)
print (datetime.datetime.now())
sleep(4)
print("fim")

sys.stdout.flush()
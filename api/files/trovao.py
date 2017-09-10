import pygame.mixer
from pygame.mixer import Sound
from time import sleep

#Removido para tocar o som corretamente
#pygame.init()

pygame.mixer.init()

#Loading the sound
#thunder = pygame.mixer.Sound("thunder3.wav")

#Prefer ogg or wav format 

#load a sound file, in the api directory
try: 
	thunder = pygame.mixer.Sound("thunder3.wav")
	print ("Arquivo carregado!")
except pygame.error:
	print ("Nao foi possivel carregar o arquivo!")

#Executa o som somente uma vez
aux = thunder.play()
while aux.get_busy():
	continue
	#pygame.time.delay(100)
#sleep(2)
#thunder.stop()
print("Reproduzido");
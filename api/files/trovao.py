import pygame.mixer
from pygame.mixer import Sound
from time import sleep

#Removido para tocar o som corretamente
#pygame.init()

pygame.mixer.init()

#Loading the sound
thunder = pygame.mixer.Sound("thunder3.wav")

#load a sound file, in the api directory
#try: 
#	thunder = pygame.mixer.Sound("thunder3.wav")
#	print ("Sound loaded")
#except pygame.error:
#	print ("Cannot load sound!")

#Executa o som somente uma vez
aux = thunder.play()
while aux.get_busy():
	pygame.time.delay(100)
sleep(10)
thunder.stop()
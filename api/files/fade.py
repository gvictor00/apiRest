import RPi.GPIO as GPIO
from time import sleep

# Pin Definitions
pwmPin = 18
duty = 0

# Setup GPIO
GPIO.setmode(GPIO.BCM)
GPIO.setup(pwmPin,GPIO.OUT)

pwm = GPIO.PWM(pwmPin, 100) # Set PWM freq = 200Hz

pwm.start(duty)

try:
    sleep(1)
    # Primeiro pico
    pwm.ChangeDutyCycle(100)
    sleep(0.1)
    pwm.ChangeDutyCycle(40)
    sleep(0.1)
    pwm.ChangeDutyCycle(20)
    sleep(0.1)
    pwm.ChangeDutyCycle(100)
    sleep(0.1)
    # 0.5 segundo

    # Segundo pico
    pwm.ChangeDutyCycle(100)
    sleep(0.1)
    pwm.ChangeDutyCycle(20)
    sleep(0.1)
    pwm.ChangeDutyCycle(80)
    sleep(0.1)
    pwm.ChangeDutyCycle(40)
    sleep(0.1)
    pwm.ChangeDutyCycle(20)
    sleep(0.1)
    # 1.0 segundo

    # Terceiro pico
    pwm.ChangeDutyCycle(100)
    sleep(0.1)
    pwm.ChangeDutyCycle(20)
    sleep(0.1)
    pwm.ChangeDutyCycle(60)
    sleep(0.1)
    pwm.ChangeDutyCycle(40)
    sleep(0.1)
    pwm.ChangeDutyCycle(20)
    sleep(0.1)
    pwm.ChangeDutyCycle(40)
    sleep(0.1)
    pwm.ChangeDutyCycle(20)
    sleep(0.1)
    # 1.7 segundo

    # Quarto pico
    pwm.ChangeDutyCycle(80)
    sleep(0.1)
    pwm.ChangeDutyCycle(50)
    sleep(0.1)
    pwm.ChangeDutyCycle(40)
    sleep(0.1)
    pwm.ChangeDutyCycle(60)
    sleep(0.1)
    pwm.ChangeDutyCycle(50)
    sleep(0.1)
    pwm.ChangeDutyCycle(40)
    sleep(0.1)
    pwm.ChangeDutyCycle(60)
    sleep(0.1)
    pwm.ChangeDutyCycle(50)
    sleep(0.1)
    # 2.5 segundos

    # Quinto pico
    pwm.ChangeDutyCycle(80)
    sleep(0.1)
    pwm.ChangeDutyCycle(30)
    sleep(0.1)
    pwm.ChangeDutyCycle(40)
    sleep(0.1)
    pwm.ChangeDutyCycle(20)
    sleep(0.1)
    # 2.9 segundos

    # Sexto pico
    pwm.ChangeDutyCycle(80)
    sleep(0.1)
    pwm.ChangeDutyCycle(30)
    sleep(0.1)
    pwm.ChangeDutyCycle(40)
    sleep(0.1)
    pwm.ChangeDutyCycle(20)
    sleep(0.1)
    pwm.ChangeDutyCycle(40)
    sleep(0.1)
    pwm.ChangeDutyCycle(20)
    sleep(0.1)
    # 3.5 segundos

    # Setimo pico
    pwm.ChangeDutyCycle(60)
    sleep(0.1)
    pwm.ChangeDutyCycle(40)
    sleep(0.1)
    pwm.ChangeDutyCycle(30)
    sleep(0.1)
    pwm.ChangeDutyCycle(20)
    sleep(0.1)
    pwm.ChangeDutyCycle(40)
    sleep(0.1)
    pwm.ChangeDutyCycle(30)
    sleep(0.1)
    pwm.ChangeDutyCycle(20)
    sleep(0.1)
    pwm.ChangeDutyCycle(40)
    sleep(0.1)
    pwm.ChangeDutyCycle(30)
    sleep(0.1)
    # 3.5 segundos

except KeyboardInterrupt:
    pwm.stop()
    GPIO.cleanup()
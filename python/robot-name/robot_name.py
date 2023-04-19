from string import ascii_uppercase
import random
import os


class Robot:
    def __init__(self):
        self.robot_name = self.generate_name()
    
    def generate_name(self):
        return ascii_uppercase[random.randint(0, len(ascii_uppercase) - 1)] + ascii_uppercase[random.randint(0, len(ascii_uppercase) - 1)] + str(random.randint(100, 999))
    
    def reset(self):
        random.seed(os.urandom(256))
        self.robot_name = self.generate_name()
    
    @property
    def name(self):
        return self.robot_name
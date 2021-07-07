
import random
import math
from datetime import datetime
import time

d = datetime.now()

print(d.strftime('%Y%m%d'))

class C:
    def __init__(self, name):
        self.name = name

    @staticmethod
    def static():
        print('static')

    @classmethod
    def cl(cls):
        print('class')

    def ins(self):
        print('ins')

C.static()
C.cl()
c = C('hoge')
c.ins()


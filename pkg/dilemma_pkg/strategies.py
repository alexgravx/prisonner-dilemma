## Code: © Alexandre Gravereaux 2023 ##

import random

switch = {0: 1, 1: 0}

def Donnant_Donnant(R, i, role = 1):
    # I cooperate on the first turn, then I play what my opponent has played the previous turn.
    if i == 0:
        return 'c'
    else:
        return R[i-1][switch[role]]
    
def MajoMou(R, i, role = 1):
    # I play what my opponent has mostly played; at first run or in case of a tie, I cooperate.
    if i==0:
        return 'c'
    elif [R[i][switch[role]] for i in range(len(R))].count('c') > [R[i][switch[role]] for i in range(len(R))].count('t'):
        return 'c'
    elif [R[i][switch[role]] for i in range(len(R))].count('c') < [R[i][switch[role]] for i in range(len(R))].count('t'):
        return 't'
    else:
        return 'c'
    
def Rancunière(R, i, role = 1):
    # I cooperate, but as soon as my opponent betray me, I always betray.
    if [R[i][switch[role]] for i in range(len(R))].count('t') == 0:
        return 'c'
    else:
        return 't'
    
def Sondeur(R, i, role = 1):
    # On the first 3 moves, I play tcc; From move 4, if my opponent cooperate on moves 2 and 3, I always betray
    # Else, I play Donnant-donnant
    if i == 0:
        return 't'
    if i == 1 or i == 2:
        return 'c'
    elif R[1][switch[role]] == 'c' and R[2][switch[role]] == 'c':
        return 't'
    else:
        return Donnant_Donnant(R, i)
    
def Periodique_cct(R, i, role):
    if i%3 == 0 or i%3 == 1:
        return 'c'
    else:
        return 't'
    
def Donnant_Donnant_dur(R, i, role = 1):
    # I cooperate, unless my opponent betray one of the two previous moves.
    if i == 0 or i == 1:
        return 'c'
    elif R[i-1][switch[role]] == 't' or R[i-2][switch[role]] == 't':
        return 't'
    else:
        return 'c'
    
def Gentille(R, i, role):
    return 'c'
    
def Lunatique(R, i, role):
    r = random.random()
    if r < 0.5:
        return 'c'
    else:
        return 't'

def Mefiant(R, i, role = 1):
    # I betray on the first move, then I play what my opponent play on previous turn.
    if i == 0:
        return 't'
    else:
        return R[i-1][switch[role]]

def Mechant(R, i, role):
    return 't'

def MajoDur(R, i, role = 1):
    # I play what my opponent mostly played; On the first move or in case of a tie, I betray.
    if i==0:
        return 't'
    elif [R[i][switch[role]] for i in range(len(R))].count('c') > [R[i][switch[role]] for i in range(len(R))].count('t'):
        return 'c'
    elif [R[i][switch[role]] for i in range(len(R))].count('c') < [R[i][switch[role]] for i in range(len(R))].count('t'):
        return 't'
    else:
        return 't'
    
def Periodique_ttc(R, i, role):
    if i%3 == 0 or i%3 == 1:
        return 't'
    else:
        return 'c'
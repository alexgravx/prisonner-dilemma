## Code: © Alexandre Gravereaux 2023 ##

import matplotlib.pyplot as plt
import numpy as np
from dilemma_pkg.arena import arene
from dilemma_pkg.game import Joueurs

def affichage(S, label, color):
    x = list(range(len(S)))
    y = S
    plt.plot(x,y, label = label, color = color)

def affichage_tournoi(P_it):
    L_label = [function.__name__ for function in Joueurs]
    NUM_COLORS = P_it.shape[0]
    cm = plt.get_cmap('gist_rainbow')
    
    for i in range(P_it.shape[0]):
        affichage(P_it[i], L_label[i], cm(1.*i/NUM_COLORS))
    plt.legend(loc="upper left")
    plt.show()
    
if __name__ == '__main__':
    L = arene(100, 100, 5, 3, 1, 0)
    P_it = np.array(L)
    affichage_tournoi(P_it.T)

# Rq: c'est le donnant-donnant qui l'emporte usuellement
# On peut appeler cette stratégie « Punition immédiate, mais pardon inconditionnel ». Pour les parents, un principe éducatif à méditer.
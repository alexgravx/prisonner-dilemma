from dilemma_pkg.arena import arene
from dilemma_pkg.game import Joueurs
from dilemma_pkg.display import affichage_tournoi

import numpy as np

def matrice():
    L = arene(100, 100)
    P_it = np.array(L)
    return convert(P_it.T)

def convert(matrice: np.ndarray):
    Populations_lists = [i.tolist() for i in matrice]
    Populations_label = [function.__name__ for function in Joueurs]
    Populations_dict = {label: pop_list for label in Populations_label for pop_list in Populations_lists}
    return Populations_dict

if __name__ == '__main__':
    L = arene(100, 100)
    P_it = np.array(L)
    affichage_tournoi(P_it.T)

from dilemma_pkg.arena import arene
from dilemma_pkg.game import Joueurs
from dilemma_pkg.display import affichage_tournoi

import numpy as np

def players():
    player_labels = [function.__name__ for function in Joueurs]
    return player_labels

def main():
    result = []
    Pop_list = arene(10, 10)
    Player_list = players()
    for index, population_turn in enumerate(Pop_list):
        turn_dict = {}
        turn_dict["turn"] = index
        for player_index, player_label in enumerate(Player_list):
            turn_dict[player_label] = population_turn[player_index]
        result.append(turn_dict)
    return result

if __name__ == '__main__':
    L = arene(100, 100)
    P_it = np.array(L)
    affichage_tournoi(P_it.T)

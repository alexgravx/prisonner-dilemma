from dilemma_pkg.arena import arene
from dilemma_pkg.game import Joueurs

def players():
    player_labels = [function.__name__ for function in Joueurs]
    return player_labels

def main(nb_turns=100, pop_init=100, T=5, C=3, P=1, D=0):
    result = []
    Pop_list = arene(nb_turns, pop_init, T, C, P, D)
    Player_list = players()
    for index, population_turn in enumerate(Pop_list):
        turn_dict = {}
        turn_dict["turn"] = index
        for player_index, player_label in enumerate(Player_list):
            turn_dict[player_label] = population_turn[player_index]
        result.append(turn_dict)
    return result

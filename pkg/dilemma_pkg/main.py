from dilemma_pkg.arena import arene
from dilemma_pkg.game import Joueurs

def players(player_list):
    player_functions = [fun for fun in Joueurs if fun.__name__ in player_list]
    return player_functions

def main(nb_turns=100, pop_init=100, T=5, C=3, P=1, D=0, player_list=['Donnant_Donnant', 'Mechant']):
    result = []
    player_func = players(player_list)
    Pop_list = arene(nb_turns, pop_init, player_func, T, C, P, D)
    for index, population_turn in enumerate(Pop_list):
        turn_dict = {}
        turn_dict["turn"] = index
        for player_index, player_label in enumerate(player_list):
            turn_dict[player_label] = population_turn[player_index]
        result.append(turn_dict)
    return result

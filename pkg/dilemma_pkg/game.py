## Code: © Alexandre Gravereaux 2023 ##

from dilemma_pkg.input import payment_matrix
from dilemma_pkg.strategies import (
    Donnant_Donnant,
    MajoMou, Sondeur,
    Periodique_cct,
    Donnant_Donnant_dur,
    Gentille,
    Lunatique,
    Mefiant,
    Mechant,
    MajoDur,
    Periodique_ttc,
    Rancunière
)

# Players list

Joueurs = [Donnant_Donnant,
           MajoMou, Sondeur,
           Periodique_cct,
           Donnant_Donnant_dur,
           Gentille,
           Lunatique,
           Mefiant,
           Mechant,
           MajoDur,
           Periodique_ttc,
           Rancunière]

def result(x, y, M):
    return M[f'{x}/{y}']

def jeu(joueur1, joueur2, N, M):
    s_a = 0 # First player score
    s_b = 0 # Second player score
    S_a = [] # Score matrix each turn
    S_b = []
    R = [] # What has been played each turn, for example [(c, t),(t, t)]
    i = 0
    while i < N:
        # choice to cooperate (c) or betray (t) depending on strategies
        r1 = joueur1(R, i, role = 0)
        r2 = joueur2(R, i, role = 1)
        R.append((r1,r2))
        # score results and adding to matrix
        s_a += result(R[i][0], R[i][1], M)[0]
        s_b += result(R[i][0], R[i][1], M)[1]
        S_a.append(s_a)
        S_b.append(s_b)
        i += 1
    return (s_a, s_b)

# Matrix filling

def remplissage(Joueurs, N, M):
    M_result = [[0 for i in range(len(Joueurs))] for j in range(len(Joueurs))]
    for j1 in range(len(Joueurs)):
        for j2 in range(len(Joueurs)):
            M_result[j1][j2] = jeu(Joueurs[j1],Joueurs[j2], N, M)[0]
    return M_result

def matrice_profils(N, selected_players, T, C, P, D):
    M = payment_matrix(T, C, P, D)
    M_result = remplissage(selected_players, N, M)
    return M_result
    
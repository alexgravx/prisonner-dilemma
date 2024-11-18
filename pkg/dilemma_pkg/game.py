## Code: © Alexandre Gravereaux 2023 ##

from dilemma_pkg.input import M
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

N = 100 # Iteration number. No more than 1000 needed

def result(x,y):
    return M[f'{x}/{y}']

def jeu(joueur1, joueur2, N):
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
        s_a += result(R[i][0], R[i][1])[0]
        s_b += result(R[i][0], R[i][1])[1]
        S_a.append(s_a)
        S_b.append(s_b)
        i += 1
    return (s_a, s_b)
        
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

# Matrix filling

def remplissage(Joueurs, N):
    M_result = [[0 for i in range(len(Joueurs))] for j in range(len(Joueurs))]
    for j1 in range(len(Joueurs)):
        for j2 in range(len(Joueurs)):
            M_result[j1][j2] = jeu(Joueurs[j1],Joueurs[j2], N)[0]
    return M_result
 
M_result = remplissage(Joueurs, N)
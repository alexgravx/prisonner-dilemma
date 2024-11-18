## Code: © Alexandre Gravereaux 2023 ##

from dilemma_pkg.game import Joueurs
from dilemma_pkg.game import M_result

# On part d'une population de N entités, un tournoi entre ces dernières et fait. A chaque tour, toute la population est redistribuée proportionnellement selon les scores.

def arene(tours, N_entites):
    # Matrice des populations
    P = [N_entites for i in range(len(Joueurs))]
    # Matrice de l'évolution des populations
    P_it = [P]
    # Tournoi
    for t in range(tours):
        # Matrice des scores
        S = [0 for i in range(len(Joueurs))]
        # Lancement du tour
        for j1 in range(len(Joueurs)):
            for j2 in range(len(Joueurs)):
                # On somme les scores de toutes les rencontres (on calcule pour 1 entité)
                S[j1] += M_result[j1][j2]
                S[j2] += M_result[j2][j1]
        # On adapte aux populations existatnes
        S = [S[i]*P[i] for i in range(len(Joueurs))]
        # On recalcule les populations
        score_tot = sum(S)
        pop_tot = sum(P)
        P = [(S[i]/score_tot)*pop_tot for i in range(len(Joueurs))]
        P_it.append(P[:])
    return P_it
## Code: © Alexandre Gravereaux 2023 ##

from dilemma_pkg.game import matrice_profils

N_iterations = 100 # Iteration number. No more than 1000 needed

# On part d'une population de N entités, un tournoi entre ces dernières et fait. A chaque tour, toute la population est redistribuée proportionnellement selon les scores.

def arene_combat(tours, N_entites, N_joueurs, M_result):
    # Matrice des populations
    P = [N_entites for i in range(N_joueurs)]
    # Matrice de l'évolution des populations
    P_it = [P]
    # Tournoi
    for t in range(tours):
        # Matrice des scores
        S = [0 for i in range(N_joueurs)]
        # Lancement du tour
        for j1 in range(N_joueurs):
            for j2 in range(N_joueurs):
                # On somme les scores de toutes les rencontres (on calcule pour 1 entité)
                S[j1] += M_result[j1][j2]
                S[j2] += M_result[j2][j1]
        # On adapte aux populations existatnes
        S = [S[i]*P[i] for i in range(N_joueurs)]
        # On recalcule les populations
        score_tot = sum(S)
        pop_tot = sum(P)
        P = [(S[i]/score_tot)*pop_tot for i in range(N_joueurs)]
        P_it.append(P[:])
    return P_it

def arene(tours, N_entites, selected_players, T, C, P, D):
    M_result = matrice_profils(N_iterations, selected_players, T, C, P, D)
    return arene_combat(tours, N_entites, len(selected_players), M_result)
    
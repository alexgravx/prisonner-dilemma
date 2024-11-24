## Code: © Alexandre Gravereaux 2023 ##

# Payment matrix #

# T <-> Tentation, default 5
# C <-> Cooperation (R), default 3
# P <-> Punishment for selfishness, default 1
# D <-> Duperie (S), default 0

def payment_matrix(T, C, P, D):
    # For every player, there are two options: betrayal (t) ou cooperation (c). Choice matrix
    M = {'c/c': (C,C), 'c/t': (D,T), 't/c': (T,D), 't/t': (P,P)}
    return M

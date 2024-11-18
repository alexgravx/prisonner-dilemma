## Code: © Alexandre Gravereaux 2023 ##

# Payment matrix #

T = 5 # Tentation
C = 3 # Cooperation (R)
P = 1 # Punishment for selfishness
D = 0 # Duperie (S)

# For every player, there are two options: betrayal (t) ou cooperation (c). Choice matrix
M = {'c/c': (C,C), 'c/t': (D,T), 't/c': (T,D), 't/t': (P,P)}

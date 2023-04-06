"""Determine difference between two DNA sequence."""

def distance(strand_a, strand_b):
    if len(strand_a) != len(strand_b):
        raise ValueError("Strands must be of equal length.")
    distance = 0
    for piece_a, piece_b in zip(strand_a, strand_b):
        if piece_a != piece_b:
            distance += 1
    return distance

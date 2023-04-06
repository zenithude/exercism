"""Determine winning point on target with Dart."""
from math import sqrt


def euclidian_distance(x, y):
    center_x, center_y = 0, 0
    return sqrt((x - center_x)**2 + (y - center_y)**2)

def score(x, y):
    if euclidian_distance(x, y) <= 1:
        return 10
    elif euclidian_distance(x, y) <= 5:
        return 5
    elif euclidian_distance(x, y) <= 10:
        return 1
    else:
        return 0

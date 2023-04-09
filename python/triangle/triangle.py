"""Functions that determine the nature of Triangle."""
def is_invalid(sides):
    sides.sort()
    return sides[0] + sides[1] <= sides[2] or any(i == 0 for i in sides)

def equilateral(sides):
    if is_invalid(sides): return False
    return len(set(sides)) == 1


def isosceles(sides):
    if is_invalid(sides): return False
    return len(set(sides)) in [1, 2]

def scalene(sides):
    if is_invalid(sides): return False
    return len(set(sides)) == 3

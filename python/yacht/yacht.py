"""Determine score of five dice rolled by category"""

YACHT = lambda dice: 50 if len(set(dice))==1 else 0
ONES = lambda dice: sum(x for x in dice if x == 1)
TWOS = lambda dice: sum(x for x in dice if x == 2)
THREES = lambda dice: sum(x for x in dice if x == 3)
FOURS = lambda dice: sum(x for x in dice if x == 4)
FIVES = lambda dice: sum(x for x in dice if x == 5)
SIXES = lambda dice: sum(x for x in dice if x == 6)
FULL_HOUSE = lambda dice: sum(dice) if len(set(dice)) == 2 and any(dice.count(x) == 3 for x in set(dice)) else 0
FOUR_OF_A_KIND = lambda dice: sum(x * 4 for x in set(dice) if dice.count(x) > 3)
LITTLE_STRAIGHT = lambda dice: 30 if sum(dice) == 15 and len(set(dice)) == 5 else 0
BIG_STRAIGHT = lambda dice: 30 if sum(dice) == 20 and len(set(dice)) == 5 else 0
CHOICE = lambda dice: sum(dice)


def score(dice, category):
    if any(not 0 < x < 7 for x in dice):
        raise ValueError(f'Invalid dice {dice}')
    return category(dice)

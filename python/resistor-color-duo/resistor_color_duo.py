"""Determine number for colors on resistance"""

COLORS = [
  'black',
  'brown',
  'red',
  'orange',
  'yellow',
  'green',
  'blue',
  'violet',
  'grey',
  'white',
]

def value(colors):
    return int(f'{COLORS.index(colors[0])}{COLORS.index(colors[1])}')

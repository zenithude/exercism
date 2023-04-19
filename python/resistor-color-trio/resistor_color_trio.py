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

def label(colors):
    ohms = f'{COLORS.index(colors[0])}{COLORS.index(colors[1])}{"0" * COLORS.index(colors[2])}'
    if ohms.startswith("0"):
      if ohms[1] == "0":
        ohms = "0"
      else:
        ohms = ohms[1:]
    
    if ohms[-9:] == "000000000":
      return f'{ohms[0:-9]} gigaohms'
    elif ohms[-6:] == "000000":
      return f'{ohms[0:-6]} megaohms'
    elif ohms[-3:] == "000":
      return f'{ohms[0:-3]} kiloohms'
    else:
      return f'{ohms} ohms'

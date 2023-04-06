"""Age Calculator."""

EARTHYEARINSECOND = 31557600.0

PLANETORBITALPERIOD = {
  'earth': 1.0,
  'mercury': 0.2408467,
  'venus': 0.61519726,
  'mars': 1.8808158,
  'jupiter': 11.862615,
  'saturn': 29.447498,
  'uranus': 84.016846,
  'neptune': 164.79132
}

class SpaceAge:
    """Calculate age for different planets."""
    def __init__(self, seconds):
        """Initialize new age calculator."""
        self.seconds = seconds
        for planet in PLANETORBITALPERIOD:
            self.add_method(planet)

    def _on_planet(self, planet):
        """Return age in planet year."""
        return round(self.seconds / EARTHYEARINSECOND / PLANETORBITALPERIOD[planet], 2)
    
    def add_method(self, planet):
        """Add method to return age in planet years."""
        function = lambda: self._on_planet(planet)
        function.__name__ = f'on_{planet}'
        function.__doc__ = f'Return age in {planet} years.'
        self.__setattr__(function.__name__, function)

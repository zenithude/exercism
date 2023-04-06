"""Transform legacy_data to new system notation."""

def transform(legacy_data):
    new_data = {}
    for point, letters in legacy_data.items():
        for letter in letters:
            new_data[letter.lower()] = point
    return new_data

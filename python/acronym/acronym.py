def abbreviate(words):
    words = words.replace("-", " ").replace("_", " ").replace(",", " ").split(" ")
    abbreviation = ""
    for word in words:
        if len(word) > 0:
            abbreviation += word[0].upper()
    return abbreviation

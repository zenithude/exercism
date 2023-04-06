"""Determine if string is isogram or not"""

def is_isogram(string):
    if len(string) == 0:
        return True

    string_list = [car.lower() for car in string if car.isalpha()]
    string_list.sort()
    list_2 = list(set(string_list))
    list_2.sort()
    return string_list == list_2

def proverb(*rhyme_element, qualifier):
    if not rhyme_element:
        return []
    
    rhyme = [f'For want of a {element_1} the {element_2} was lost.' for element_1, element_2 in zip(rhyme_element, rhyme_element[1:])]
    if qualifier:
        rhyme.append(f'And all for the want of a {qualifier} {rhyme_element[0]}.')
    else:
        rhyme.append(f'And all for the want of a {rhyme_element[0]}.')

    return rhyme
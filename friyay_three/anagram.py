def anagram(str1, str2):
    # if lengths aren't same, not anagrams
    if len(str1) != len(str2):
        return False

    # get counts for characters in each string
    strCount1 = {}
    strCount2 = {}
    
    # since strings are same length, doesn't matter which str I use here
    for index in range(len(str1)):
        character1 = str1[index]
        character2 =  str2[index]

        # if dictionary contains character, add 1 to current count, else set count at 1
        if strCount1.get(character1, False):
            strCount1[character1] += 1
        else:
            strCount1[character1] = 1

        # have to do it for second string also
        if strCount2.get(character2, False):
            strCount2[character2] += 1
        else:
            strCount2[character2] = 1
    
    # check if value at key in one dictionary is equal to value in second dictionary (are the character counts the same? if not return false)
    for key in strCount1.keys():
        if strCount1[key] != strCount2[key]:
            return False
    
    # if all counts are the same, return true. MUST BE OUTSIDE LOOP!
    return True


    
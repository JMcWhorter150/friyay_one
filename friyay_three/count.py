def count(str):
    countDic = {}
    for character in str:
        if countDic.get(character, False):
            countDic[character] += 1
        else:
            countDic[character] = 1
    return countDic

print(count("abccc")) # {"a": 1, "b": 1, "c": 3}
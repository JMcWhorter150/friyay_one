def number_of_halves(num):
    count = 0
    while num > 1:
        num /= 2
        count += 1
    return count

print(number_of_halves(100)) # 100, 50, 25, 12.5, 6.25, 3.125, 1.5625 = 7

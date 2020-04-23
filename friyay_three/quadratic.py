def print_times_table(size_of_table):
    for num1 in range(1, size_of_table + 1):
        for num2 in range(1, size_of_table + 1):
            product = num1 * num2
            print(f'{num1} times {num2} equals {product}')


print_times_table(3)
'''
1 times 1 equals 1
1 times 2 equals 2
1 times 3 equals 3
2 times 1 equals 2
2 times 2 equals 4
2 times 3 equals 6
3 times 1 equals 3
3 times 2 equals 6
3 times 3 equals 9
'''
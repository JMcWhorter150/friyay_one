
def find_factorial_bad(total_num):
    counter = 0
    sum = 0
    fact = 0
    while sum < total_num:
        counter += 1
        fact = counter
        sum = fact
        while fact > 1:
            fact -= 1
            sum *= fact
    print(counter)

def find_factorial_better(total_num):
    fact = 1
    product = 1
    while product < total_num:
        fact += 1
        product *= fact
    print(fact)
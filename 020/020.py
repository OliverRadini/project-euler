
def factorial(n):
    total = 10

    for x in range(n-1, 0, -1):
        total = total * x

    return total

all_digits = factorial(100)

total = 0
for x in f"{all_digits}":
    total += int(x)

print(total)

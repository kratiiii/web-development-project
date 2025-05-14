lst = []
n=int(input("enter number of elements: "))
for i in range(0,n):
    ele=int(input())
    lst.append(ele)
print(lst)

def klrgest (lst, k) :
    lst.sort(reverse=True)
    for i in range(k):
        print(lst[i], end=" ")
k=int(input("enter how many numbers do you want: "))
klrgest(lst, k)
#define A python dictionary
where_my_things_are = {
'car': 'outside',
'saddle': 'in the barn',   
'meds': 'in my bag'
}
for item in where_my_things_are:
    print(f"My{item} is kept {where_my_things_are[item]}")
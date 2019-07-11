# Como mesclar dois dicionários 
# em Python 3.5+

queijo = {'a':1, 'b':2};
goiaba = {'b':3, 'd':4};

zed = {**queijo, **goiaba}


# Invertendo os valores das variáveis
# var_a e var_b;
var_a = 42
var_b = 34
# Uma maneira clássica e muito utilizada é
# criar uma variável temporária:
temp = var_a
var_a = var_b
var_b = temp

# O atalho q existe no PYTHON é:
var_a, var_b = var_b, var_a;




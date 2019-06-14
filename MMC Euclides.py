'''@Ericódigos - 11/06/2019 
Fundamentos são importantes. Uma prova disse é um algorítimo 
escrito a mais de 2300 anos por Euclides e que ainda hoje é 
absolutamente útil e elegantemente econômico em termos de 
processamento.

Imagine um problema que exija uma função que retorne o 
Mínimo Múltiplo Comum de um intervalo de inteiros.

'''

import functools
from datetime import datetime

time1 = datetime.now()
lista = []

def mmc_Rank_C(lst):
  """ Retorna MMC de um intervalo de inteiros. """
  itera = 0 # Contador de interações
  lst.sort() # Classifica a lista
  
  ''' Cria a lista com o intervalo entre o menor e o maior número. '''
  lista = list(range(lst[0],lst[-1]+1))
  
  ''' Retorna o fatorial do intervalo'''
  pior = functools.reduce(lambda a,b: a*b,lista)

  for e in range(0,pior,lista[-1]):
    itera += 1
    if all(e % i == 0 and e != 0 for i in lista):
      print('Iterações: ',itera)
      print('Resultado do MMC de ', lista) 
      return e
  

print('-->',mmc_Rank_C([23,15]))
time2 = datetime.now()
print('A função demorou: ',(time2-time1))



###########################



time1 = datetime.now()

def mmc_Rank_B(lista):
  lista.sort(reverse=True)
  novaLista = list(range(lista[0],lista[-1]-1,-1))
  quociente = 0
  loop = 1
  n = 0
  while(n != len(novaLista)):
    quociente = novaLista[0] * loop * novaLista[1]
    if all(quociente % e == 0 for e in novaLista):
      break
    loop+=1
  print('Iterações: ',loop)  
  return quociente
  
print(mmcIntervaloOkay([23,15]))
time2 = datetime.now()
print('A função demorou: ',(time2-time1))


###################################


time1 = datetime.now()
itera = 0
def mmcIntervalo_Rank_S(lst):
  global itera
  mínimo = min(lst)
  máximo = max(lst)
  v_mmc = mmc(mínimo, mínimo+1)
  lista = list(range(mínimo,máximo))
  while(mínimo < máximo):
    mínimo += 1
    v_mmc = mmc(v_mmc,mínimo)
  print('Iterações: ',itera)
  print('O MMC de: ',lista)
  return v_mmc  

def mdc(a,b):
  global itera
  while(b != 0):
    itera += 1
    t = a
    a = b
    b = t % b
  return a

def mmc(a,b):
  return int((a * b /mdc(a,b)))

print(mmcIntervalo_Rank_S([23,15]))
time2 = datetime.now()
print('A função demorou: ',(time2-time1))














''' math.gcd(a, b) '''


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
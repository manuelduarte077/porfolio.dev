---
title: "¿Qué es un Diccionario de datos?"
publishedAt: 2021-03-21
description: "Un diccionario en Python es una colección de elementos, donde cada uno tiene una llave `key` y un valor `value`. Los diccionarios se pueden crear con paréntesis `{}` separando con una coma cada par `key: value`."
slug: "que-es-un-diccionario-de-datos"
isPublish: true
---

### - ¿Qué es un Diccionario de datos?

Un diccionario en Python es una colección de elementos, donde cada uno tiene una llave `key` y un valor `value`. Los diccionarios se pueden crear con paréntesis `{}` separando con una coma cada par `key: value`.

1 - Para definir un diccionario, se encierra el listado de valores entre llaves. Las parejas de clave y valor se separan con comas, y la clave y el valor se separan con dos puntos.

```python
diccionario = {'nombre' : 'Manuel', 'edad' : 28, 'cursos': ['Python','Django','Kotlin'] }
```

2 - Podemos acceder al elemento de un Diccionario mediante la clave de este elemento, como veremos a continuación:

```python
print diccionario['nombre'] #Carlos
print diccionario['edad']#22
print diccionario['cursos'] #['Python','Django','Kotlin']
```

3 - También es posible insertar una lista dentro de un diccionario. Para acceder a cada uno de los cursos usamos los índices:

```python
print diccionario['cursos'][0]#Python
print diccionario['cursos'][1]#Django
print diccionario['cursos'][2]#Kotlin
```

4 - Para recorrer todo el Diccionario, podemos hacer uso de la estructura for:

```python
for key in diccionario:
  print key, ":", diccionario[key]
```

## Métodos que se pueden usar en los Diccionarios

- dict ()

1 - Recibe como parámetro una representación de un diccionario y si es factible, devuelve un diccionario de datos.

```python
dic =  dict(nombre='manuel', apellido='Duarte', edad=22)

dic → {‘nombre’ : 'manuel', ‘apellido’ : 'Duarte', ‘edad’ : 22}
```

- zip()

2 - Recibe como parámetro dos elementos iterables, ya sea una cadena, una lista o una tupla. Ambos parámetros deben tener el mismo número de elementos. Se devolverá un diccionario relacionando el elemento i-esimo de cada uno de los iterables.

```python
dic = dict(zip('abcd',[1,2,3,4]))

dic →   {‘a’ : 1, ’b’ : 2, ‘c’ : 3 , ‘d’ : 4}
```

- items()

3 - Devuelve una lista de tuplas, cada tupla se compone de dos elementos: el primero será la clave y el segundo, su valor.

```python
dic =   {‘a’ : 1, ’b’ : 2, ‘c’ : 3 , ‘d’ : 4}
items = dic.items()

items → [(‘a’,1),(‘b’,2),(‘c’,3),(‘d’,4)]
```

- keys()

4 - Retorna una lista de elementos, los cuales serán las claves de nuestro diccionario.

```python
dic =  {‘a’ : 1, ’b’ : 2, ‘c’ : 3 , ‘d’ : 4}
keys= dic.keys()

keys→ [‘a’,’b’,’c’,’d’]
```

- values()

5 - Retorna una lista de elementos, que serán los valores de nuestro diccionario.

```python
dic =  {‘a’ : 1, ’b’ : 2, ‘c’ : 3 , ‘d’ : 4}
values= dic.values()

values→ [1,2,3,4]
```

- clear()

6 - Elimina todos los ítems del diccionario dejándolo vacío.

```python
dic 1 =  {‘a’ : 1, ’b’ : 2, ‘c’ : 3 , ‘d’ : 4}
dic1.clean()

dic1 → { }
```

- copy()

7 - Retorna una copia del diccionario original.

```python
dic = {‘a’ : 1, ’b’ : 2, ‘c’ : 3 , ‘d’ : 4}
dic1 = dic.copy()

dic1 → {‘a’ : 1, ’b’ : 2, ‘c’ : 3 , ‘d’ : 4}
```

- fromkeys()

8 - Recibe como parámetros un iterable y un valor, devolviendo un diccionario que contiene como claves los elementos del iterable con el mismo valor ingresado. Si el valor no es ingresado, devolverá none para todas las claves.

```python
dic = dict.fromkeys(['a','b','c','d'],1)

dic →  {‘a’ : 1, ’b’ : 1, ‘c’ : 1 , ‘d’ : 1}
```

- get()

9 - Recibe como parámetro una clave, devuelve el valor de la clave. Si no lo encuentra, devuelve un objeto none.

```python
dic = {‘a’ : 1, ’b’ : 2, ‘c’ : 3 , ‘d’ : 4}
valor = dic.get(‘b’)

valor → 2
```

- pop()

10 - Recibe como parámetro una clave, elimina esta y devuelve su valor. Si no lo encuentra, devuelve error.

```python
dic = {‘a’ : 1, ’b’ : 2, ‘c’ : 3 , ‘d’ : 4}
valor = dic.pop(‘b’)

valor → 2
dic → {‘a’ : 1, ‘c’ : 3 , ‘d’ : 4}
```

- setdefault()

11 - Funciona de dos formas. En la primera como get

```python
dic = {‘a’ : 1, ’b’ : 2, ‘c’ : 3 , ‘d’ : 4}
valor = dic.setdefault(‘a’)

valor → 1
```

Y en la segunda forma, nos sirve para agregar un nuevo elemento a nuestro diccionario.

```python
dic = {‘a’ : 1, ’b’ : 2, ‘c’ : 3 , ‘d’ : 4}
valor = dic.setdefault(‘e’,5)

dic → {‘a’ : 1, ’b’ : 2, ‘c’ : 3 , ‘d’ : 4 , ‘e’ : 5}
```

- update()

12 - Recibe como parámetro otro diccionario. Si se tienen claves iguales, actualiza el valor de la clave repetida; si no hay claves iguales, este par clave-valor es agregado al diccionario.

```python
dic 1 = {‘a’ : 1, ’b’ : 2, ‘c’ : 3 , ‘d’ : 4}
dic 2 = {‘c’ : 6, ’b’ : 5, ‘e’ : 9 , ‘f’ : 10}
dic1.update(dic 2)

dic 1 → {‘a’ : 1, ’b’ : 5, ‘c’ : 6 , ‘d’ : 4 , ‘e’ : 9 , ‘f’ : 10}
```

Estos son algunos de los métodos más útiles y utilizados en los Diccionarios con python.

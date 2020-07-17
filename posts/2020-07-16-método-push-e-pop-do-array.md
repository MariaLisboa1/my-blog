---
title: Método push e pop do array
description: Vamos aprender a usar o método pop e o push de uma maneira simples
date: 2020-07-16T05:17:34.000Z
thumbnail: assets/img/angular.png
category: js
background: "#D6BA32"
---
## Método pop

O método pop remove o último elemento do array. Além disso, ele retorna o elemento removido do array, caso queira usar.

Vamos ver um exemplo:

```javascript
const foods = [ "bean", "rice", "beef" ];
const beef = foods.pop();

console.log(beef);
// 'beef'

console.log(foods);
// ["bean","rice"]
```

Vemos que ele remove o último elemento e retorna o elemento removido.

## Método push

Diferente do pop, o push adiciona um novo dado no final do array. Ele modifica o array principal. E ele retorna o novo valor da propriedade length do array.

```javascript
const foods = [ "bean", "rice", "beef" ];
const newLength = foods.push("chicken");

console.log( newLength );
// 3

console.log( foods );
// [ "bean", "rice", "beef", "chicken" ];
```
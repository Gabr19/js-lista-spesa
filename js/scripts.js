const items = ['latte', 'uova', 'pane']

const itemsList = document.getElementById('items')
i = 0
while (i < items.length){
    console.log(i, items[i]);
    itemsList.innerHTML += `<li>${items[i]}</li>` ;
    
    
    const newLi = document.createElement('li');
    newLi.innerHTML = items[i]
    itemsList.append(newLi);

    i++
    }
const items = ['latte', 'uova', 'pane']

const itemsList = document.getElementById('items')
i = 0
while (i < items.length){
    itemsList.innerHTML += `<li>${items[i]}</li>` ;

    }
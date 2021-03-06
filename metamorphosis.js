initDragAndDrop();

function initDragAndDrop() {
    shuffleCards();
    initDragAndDropHandlers();

    // Initialize drag & drop elements here

}

function shuffleCards() {
    let mixedCardsContainer = document.querySelector(".mixed-cards");
    for (let i = mixedCardsContainer.children.length; i >= 0; i--) {
        mixedCardsContainer.appendChild(mixedCardsContainer.children[Math.random() * i | 0]);
    }
}

function initDragAndDropHandlers(){
    const cards = document.getElementsByClassName('card');
    const slots = document.getElementsByClassName('card-slot');
    const mixedCards = document.getElementById('mixed-cards');
    for (const card of cards){
        card.addEventListener('dragstart', onDragStartHandler)
        card.addEventListener('dragend', onDragEndHandler)
    }
    for (const slot of slots){
        slot.addEventListener('dragenter', onDragEnterHandler);
        slot.addEventListener('dragover', onDragOverHandler);
        slot.addEventListener('dragleave', onDragLeaveHandler);
        slot.addEventListener('drop', onDropHandler);
    }
    mixedCards.addEventListener('drop', onDropHandlerForMixedCards);
    mixedCards.addEventListener('dragenter', onDragEnterHandlerForMixedCards);
    mixedCards.addEventListener('dragover', onDragOverHandlerForMixedCards);

}
function onDragStartHandler(evt){
    evt.target.classList.add('card-highlighted')
    evt.dataTransfer.effectAllowed = "move"
    evt.dataTransfer.dropEffect = "move"
    evt.dataTransfer.setData('text/plain', evt.target.id)
    toggleCardSlots();
}

function onDragEndHandler(evt){
    evt.target.classList.remove('card-highlighted')
    toggleCardSlots(true);
}

function onDragEnterHandler(evt){
    evt.target.classList.add('card-slot-over');  
    evt.preventDefault();  
}

function onDragLeaveHandler(evt){
    evt.target.classList.remove('card-slot-over');
}

function onDragOverHandler(evt){
    evt.preventDefault();
}

function onDropHandler(evt){
    id = evt.dataTransfer.getData('text/plain');
    console.debug('onDropHandler', id, this, evt.target);
    
    if (!evt.target.hasChildNodes() && evt.target.nodeName!='IMG'){

        evt.target.appendChild(document.getElementById(id));
    }
    if(gameWon()){
        const h1 = document.createElement('h1');
        h1.innerHTML = 'SUPER! Gratulacje!'
        document.body.appendChild(h1);
    }
}



function toggleCardSlots(off = false){
    const slots = document.getElementsByClassName('card-slot');
    for(const slot of slots){
        if(off){
            slot.classList.remove('card-slot-highlighted')
        } else {
            slot.classList.add('card-slot-highlighted')
        }
    }
}

function onDropHandlerForMixedCards(evt){
    const id = evt.dataTransfer.getData('text/plain')
    const element = document.getElementById(id);
    const mixedCards = document.getElementById('mixed-cards');
    mixedCards.appendChild(element);
    //document.getElementById('mixed-cards').appendChild(document.getElementById(evt.dataTransfer.getData('text/plain')));
}

function onDragEnterHandlerForMixedCards(evt){
    evt.preventDefault();
}

function onDragOverHandlerForMixedCards(evt){
    evt.preventDefault();
}

function gameWon(){
    const frogSlots = document.getElementById('frog-slots').childNodes;
    const butterflySlots = document.getElementById('butterfly-slots').childNodes;
    const winningSequenceFrogs = ['f1', 'f2', 'f3', 'f4']
    const winningSequenceButterflies = ['b1', 'b2', 'b3', 'b4']
    let i = 0
    for(const element of frogSlots){
        if(element.nodeName == "DIV"){
            if(element.hasChildNodes()){
                if(winningSequenceFrogs[i++] != element.firstChild.id){
                    return false;
                }
            } else {
                return false;
            }
        }
    }
    i = 0
    for(const element of butterflySlots){
        if(element.nodeName == "DIV"){
            if(element.hasChildNodes()){
                if(winningSequenceButterflies[i++] != element.firstChild.id){
                    return false;
                }
            } else {
                return false;
            }
        }
    }
    return true;
}
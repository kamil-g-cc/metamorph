# Metamorphosis

## Story

We have a great idea: Programming is really fun but breeding frogs and butterflies is even more fun! :)

So the decision is made, we want to start a new business line with some fancy frogs and beautiful butterflies. However we are not sure about the process, so **we need your help**. Can you create a small game so we can practice how the correct metamorphosis order of these creatures take place?

We have some cards, each shows a stage in the process and we would like a drag-and-drop game so we can practice.

## What are you going to learn?

 * Drag and Drop in vanilla JavaScript
 * HTML data attributes
 * CSS styling

## Tasks


1. All card elements can be dragged with the mouse.

    - All the `.card` elements can be picked up and dragged around
    - After picking up a card, the element that stays at the original position during the drag
 should be differentiated visually

2. Picked up cards can be dropped in the metamorphosis steps.

    - The cards can be dropped to the slots in the `.metamorphosis-slots` element
    - All `.card-slot` elements are active and visually highlighted when you pick up a card
    - When we hold an element over a drop zone, the highlight changes to show that we would drop the card there

3. We should be able to drop the cards back to the `.mixed-cards` container as well.

    - The cards can be dropped back to the `.mixed-cards` container
    - The `.mixed-cards` area is active and visually highlighted when you pick up a card
    - When we hold an element over the area, the highlight changes to show that we would drop the card there

4. Cards can only be dropped on allowed places.

    - The card slots in the frog/butterfly metamorphosis-container only accepts correct (frog/butterfly) cards
    - Any type of card can be dropped back to the `.mixed-cads` container
    - When we hold an element over a possible drop zone we can see if we can drop it there or not
    - Only one card can be dropped in a `.card-slot`
    - Only `.card` elements can be dropped in the in drop zones of the game (so for example if a file is dragged
 over the browser tab of the game, it should not trigger the zones)

5. We want to win the game when we get the correct order of the frog/butterfly metamorphosis.

    - When the last piece is dropped and every card is in the correct order we get a confirmation that we have finished the puzzle
    - Do some fancy CSS magic :)

6. [OPTIONAL] In the basic version we have nine possible drop zones. Solve the task without using separate `.card-slot` elements so you should be able to drag directly in the `.metamorphosis-slots` and reorder the cards there.

    - There are only three possible drop zones (frog, butterfly, deck)
    - Cards can be reordered inside a metamorphosis drop zone


## General requirements


None

## Hints

* You can open the `index.html` by starting a small python server (without Flask this time) with this command in the project folder: `python3 -m http.server -b 127.0.0.1` (or you can just open it directly in a browser, but we would recommend the first method)
* You can see the correct order of the frog/butterfly metamorphosis in the file names, but don't rely on the 
  filenames for the win condition (html data attributes could be a good choice)

## Starting repository

> **For your information**: Unfortunately, GitHub Classroom has an unstable service regarding repository creation and imports. If your repository fails to create or there are issues with code imports you can do the following steps:
>
> 1. Wait. Sometimes it gets done after 1-2 hours.
> 2. Write to your mentors to do it manually for you.
>
> In the meantime, we are working on an own solution to replace GitHub Classroom. We plan to have it in the first quarter of 2020.

Click here to clone your own Git repository:
https://classroom.github.com/a/mSi3yLkQ


## Background materials

* :exclamation: [MDN HTML Drag&Drop API](https://developer.mozilla.org/en-US/docs/Web/API/HTML_Drag_and_Drop_API)  (Event / On Event Handler pages are different)
* :exclamation: [MDN Drag operations documentation](https://developer.mozilla.org/en-US/docs/Web/API/HTML_Drag_and_Drop_API/Drag_operations)
* :exclamation: [Detailed example code for Vanilla JS Drag&Drop](https://codepen.io/szrudi/pen/gOpLyKd)
* [Vanilla JS Drag&Drop tutorial](https://code-boxx.com/javascript-drag-and-drop/)
* [Dragula JS Drag&Drop library](https://bevacqua.github.io/dragula)
* [Interact.js Drag&Drop library](https://interactjs.io/)
* :open_book: [CSS Flexbox guide](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)

## Acceptance review

You will need this only at review time, **after** completing the project.
[Use this form](https://forms.gle/pArT3pyB9xWC9HXc9) to record the review you provide for your peer.
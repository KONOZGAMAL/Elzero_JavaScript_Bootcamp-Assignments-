// ===============================================
// ==Variable and concatenation challenge
// =================================================

// [1]Create 3 Variable [title , dascription , date]
// __ All in one statement
// __ Variable Name must be two words
// __ title content is "Elzero"
// __ dascription content is "Elzero web school"
// __date content is "25/10"
// [2] Create Variable contains Div and this Div contains
// ___H3 for title
// ___ p for paragraph
// ___ span for time
// [3] Add this card to page 4 times
// [4] use template literals for concatenate

// Extra

// Repeat

let the_Title = "Elzero";
the_Dascription = "Elzero web school";
the_Date = "25/10";

let main_card = `<div class="card">
<h3 class="card1">Hello ${the_Title}</h3>
<p>${the_Dascription}</p>
<span>${the_Date}</span>
</div>`;

document.write(main_card.repeat(10));

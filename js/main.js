//###################################################### 
// DYNAMICS

$(function() {
// ********************* doc ready start ***

// * REMOTE DATA SOURCE */
const itemList = [
	{ name: 'cat',            prefix: 'fa-', type: 'animal',    family: 'fas' },
	{ name: 'crow',           prefix: 'fa-', type: 'animal',    family: 'fas' },
	{ name: 'dog',            prefix: 'fa-', type: 'animal',    family: 'fas' },
	{ name: 'dove',           prefix: 'fa-', type: 'animal',    family: 'fas' },
	{ name: 'dragon',         prefix: 'fa-', type: 'animal',    family: 'fas' },
	{ name: 'horse',          prefix: 'fa-', type: 'animal',    family: 'fas' },
	{ name: 'hippo',          prefix: 'fa-', type: 'animal',    family: 'fas' },
	{ name: 'fish',           prefix: 'fa-', type: 'animal',    family: 'fas' },
	{ name: 'carrot',         prefix: 'fa-', type: 'vegetable', family: 'fas' },
	{ name: 'apple-alt',      prefix: 'fa-', type: 'vegetable', family: 'fas' },
	{ name: 'lemon',          prefix: 'fa-', type: 'vegetable', family: 'fas' },
	{ name: 'pepper-hot',     prefix: 'fa-', type: 'vegetable', family: 'fas' },
	{ name: 'user-astronaut', prefix: 'fa-', type: 'user',      family: 'fas' },
	{ name: 'user-graduate',  prefix: 'fa-', type: 'user',      family: 'fas' },
	{ name: 'user-ninja',     prefix: 'fa-', type: 'user',      family: 'fas' },
	{ name: 'user-secret',    prefix: 'fa-', type: 'user',      family: 'fas' }
];


// * ------ * Milestone 1 * ------ *
// Partendo dalla struttura dati che troviamo sotto, 
// mostriamo in pagina tutte le icone disponibili come da layout.

// display itemList in itemDisplayBox 
const itemDisplayBox = $('.item_display_box');
displayArrayInContainer(itemList,itemDisplayBox);


// * ------ * Milestone 2 * ------ *
// Coloriamo le icone per tipo



// * LOCAL COLOR SCHEME */
const colorList = ['var(--blue)', 'var(--orange)', 'var(--purple)'];


















// *********************** doc ready end ***
});

//###################################################### 
// FUNCTIONS

function displayArrayInContainer(_array,_container) {
	_container.html('');
	_array.forEach((el) => {
		const {family,prefix,name,color} = el;
		const faStyle = (color != undefined) ? `style="color: ${color}"` : ``; 
		_container.append(`
		<div class="item">
			<i class="${family} ${prefix}${name}" ${faStyle}"></i>
			<div class="item_name">${name}</div>
		</div>
		`);
	});
}

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

// * LOCAL COLOR SCHEME */
// default color: position 0 in colorList
const colorList = ['var(--black)', 'var(--blue)', 'var(--orange)', 'var(--purple)'];


// * ------ * Milestone 1 * ------ *
// Partendo dalla struttura dati che troviamo sotto, 
// mostriamo in pagina tutte le icone disponibili come da layout.

// display itemList in itemDisplayBox 
const itemDisplayBox = $('.item_display_box');
displayArrayInContainer(itemList,itemDisplayBox);


// * ------ * Milestone 2 * ------ *
// Coloriamo le icone per tipo
const itemColorList = getColoredArray(itemList,colorList);


// ! DEBUG !
console.log(getTypeList(itemList));
console.log(getColorByType('animal',getTypeList(itemList),colorList));
console.log(getColorByType('vegetable',getTypeList(itemList),colorList));
console.log(getColorByType('user',getTypeList(itemList),colorList));
console.log(getColorByType('pippo',getTypeList(itemList),colorList));
console.log(itemColorList);


























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

function getColoredArray(_itemList,_colorList) {
	/**
	 * returns array of the elements in _itemList
	 * where each element gets color property by its type
	 */
	const coloredItemList = _itemList.map((el) => {
		// array of types in _itemList
		const typeList = getTypeList(_itemList);
		// color matching type for el
		el.color = getColorByType(el.type,typeList,_colorList)
		return el;
	});
	return coloredItemList;
}

function getTypeList(_itemList) { 
	/**
	 * returns array of types in _itemList
	 */
	const typeList = [];
	_itemList.forEach((el) => {
		if (!typeList.includes(el.type)) typeList.push(el.type);
	});
	return typeList;
}
function getColorByType(_type,_typeList,_colorList) {
	/**
	 * matches _type position in _typeList and
	 * returns the color in _colorList with position + 1
	 * default color: position 0 in _colorList
	 */
	const pos = _typeList.indexOf(_type);
	const col = _colorList[pos + 1];
	if (col != undefined) return col;
	else return _colorList[0];
}


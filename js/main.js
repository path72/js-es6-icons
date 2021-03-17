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

// * LOCAL STRUCTURE */
// default color: position 0 in colorList
const colorList = ['var(--black)', 'var(--blue)', 'var(--orange)', 'var(--purple)'];
// html element ids
const itemDisplayBoxHtmlId = 'item_display_box';
const typeSelectHtmlId     = 'type_selection';


// * ------ * Milestone 1 * ------ *
// Partendo dalla struttura dati che troviamo sotto, 
// mostriamo in pagina tutte le icone disponibili come da layout.

// displaying item list in html 
// displayArrayInContainerById(itemList,itemDisplayBoxHtmlId);


// * ------ * Milestone 2 * ------ *
// Coloriamo le icone per tipo

// defining & displaying colored item list
const itemColorList = getColoredArray(itemList,colorList);
displayArrayInContainerById(itemColorList,itemDisplayBoxHtmlId);


// * ------ * Milestone 3 * ------ *
// Creiamo una select con i tipi di icone e usiamola per filtrare le icone

// initializing functions of html select
selectInit(itemColorList,typeSelectHtmlId,itemDisplayBoxHtmlId,colorList);


// *********************** doc ready end ***
});

//###################################################### 
// FUNCTIONS

function displayArrayInContainerById(_array,_containerId) {
	$('#'+_containerId).html('');
	_array.forEach((el) => {
		const {family,prefix,name,color} = el;
		const faStyle = (color != undefined) ? `style="color: ${color}"` : ``; 
		$('#'+_containerId).append(`
		<div class="item">
			<i class="${family} ${prefix}${name}" ${faStyle}"></i>
			<div class="item_name">${name}</div>
		</div>
		`);
	});
}

function getColoredArray(_array,_colorList) {
	/**
	 * returns array of the elements in _array
	 * where each element gets color property by its type
	 */
	const _coloredArray = _array.map((el) => {
		const typeList = getTypeList(_array);
		el.color = getColorByType(el.type,typeList,_colorList)
		return el;
	});
	return _coloredArray;
}

function getTypeList(_array) { 
	/**
	 * returns array of types in _array
	 */
	const typeList = [];
	_array.forEach((el) => {
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

function deployTypesInSelectId(_array,_selectId) {
	const typeList = getTypeList(_array);
	typeList.forEach((el) => {
		$('#'+_selectId).append(`<option value="${el}">${el}</option>`);
	});
}

function selectInit(_array,_selectId,_containerId,_colorList) {
	deployTypesInSelectId(_array,_selectId);
	$('#'+_selectId).change(function() {
		const selType = $(this).val();
		let selArray = _array.filter((el) => el.type == selType);
		if (selArray.length == 0) selArray = _array;
		displayArrayInContainerById(selArray,_containerId);
		// matching page colors
		let col = getColorByType(selType,getTypeList(_array),_colorList);
		$('.search').css({'background-color':col});
		$('.logo').css({'color':col});
	});
}

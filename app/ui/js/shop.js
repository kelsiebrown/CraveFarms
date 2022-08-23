// filter by category
const sectionSubscriptions = document.querySelector('#section-subscriptions');
const sectionProduce = document.querySelector('#section-produce');
const sectionOther = document.querySelector('#section-other');

function showSubscriptions() {
	sectionSubscriptions.classList.remove('remove');
	sectionProduce.classList.add('remove');
	sectionOther.classList.add('remove');
};

function showProduce() {
	sectionSubscriptions.classList.add('remove');
	sectionProduce.classList.remove('remove');
	sectionOther.classList.add('remove');
};

function showOther() {
	sectionSubscriptions.classList.add('remove');
	sectionProduce.classList.add('remove');
	sectionOther.classList.remove('remove');
};

function showAll() {
	sectionSubscriptions.classList.remove('remove');
	sectionProduce.classList.remove('remove');
	sectionOther.classList.remove('remove');
};
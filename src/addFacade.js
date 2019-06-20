import Model from './model.js';
import View from './view.js';
import Controller from './controller.js';

const model = new Model();
const view = new View();
const controller = new Controller(model, view); 

(function () {
	/*-------------------------функции отвечающие за отрисовку элементов в документе-----------------------*/
	/**
	 * Отрисовывает DOM-элементы в документе (слайдер с одним бегунком)
	 *
	 * @param {object} parentElement родительский элемент, относительно которого будут отрисовываться дочерние элементы
	 * @param {number} posThumbLeft стартовая позиция бегунка при инициализации
	 */
	function initViewSlider(parentElement, posThumbLeft) {
		view.initSlider(parentElement, posThumbLeft);
	}

	/**
	 * Отрисовывает DOM-элементы в документе (слайдер с двумя бегунками)
	 *
	 * @param {object} parentElement родительский элемент, относительно которого будут отрисовываться дочерние элементы
	 * @param {number} posThumbLeft стартовая позиция левого бегунка при инициализации
	 * @param {number} posThumbLeft стартовая позиция правого бегунка при инициализации
	 */
	function initViewRangeSlider(parentElement, posThumbLeft, posThumbRigth) {
		view.initRangeSlider(parentElement, posThumbLeft, posThumbRigth);
	}

	/*----------------------------функции отвечающие за передвижение ползунка------------------------------*/
	/**
	 * Делает бегунок thumb подвижным (использ. для слайдера с одним бегунком)
	 *
	 * @param {object} thumbEl DOM-эдемент на который будет вешаться событие.
	 * @return {boolean} false отключает стандартный Drag’n’Drop
	 */
	function initSlider(thumbEl) {
		thumbEl.onmousedown = function() {
			controller.mousedownThumb(thumbEl);

			document.onmousemove = function() {
				controller.mousemoveThumb(thumbEl);
			}

			document.onmouseup = function(){
				controller.mouseupThumb();
			}

			return false; 
		}
	}

	/**
	 * Делает левый бегунок thumb подвижным (использ. для слайдера с двумя бегунками)
	 *
	 * @param {object} thumbEl DOM-эдемент на который будет вешаться событие.
	 * @param {object} thumbEl2 DOM-эдемент с помощью, которого будет ограничивать перемещение thumbEl.
	 * @return {boolean} false отключает стандартный Drag’n’Drop
	 */
	function initThumbLeft(thumbEl, thumbEl2) {
		thumbEl.onmousedown = function() {
			controller.mousedownThumb(thumbEl);

			document.onmousemove = function() {
				controller.mousemoveThumbLeft(thumbEl, thumbEl2);
			}

			document.onmouseup = function(){
				controller.mouseupThumb();
			}

			return false; 
		}
	}

	/**
	 * Делает правый бегунок thumb подвижным (использ. для слайдера с двумя бегунками)
	 *
	 * @param {object} thumbEl2 DOM-эдемент на который будет вешаться событие.
	 * @param {object} thumbEl DOM-эдемент с помощью, которого будет ограничивать перемещение thumbEl2.
	 * @return {boolean} false отключает стандартный Drag’n’Drop
	 */
	function initThumbRigth(thumbEl, thumbEl2) {
		thumbEl2.onmousedown = function() {
			controller.mousedownThumb(thumbEl2);

			document.onmousemove = function() {
				controller.mousemoveThumbRigth(thumbEl, thumbEl2);
			}

			document.onmouseup = function(){
				controller.mouseupThumb();
			}

			return false; 
		}
	}

	window.addFacade = {
		initViewSlider   : initViewSlider,
		initViewRangeSlider : initViewRangeSlider,
		initSlider : initSlider,
		initThumbLeft  : initThumbLeft,
		initThumbRigth : initThumbRigth,
	}
})();
import Model from './model.js';
import View from './view.js';
import Controller from './controller.js';

const model = new Model();
const view = new View();
const controller = new Controller(model, view); 

export default function method() {

	/*-------------------------функции отвечающие за отрисовку элементов в документе----------------------*/
	/**
	 * Отрисовывает DOM-элементы в документе (слайдер)
	 *
	 * @param {boolean} range, true - создавать слайдер с двумя бегунками, false - с одним
	 * @param {boolean} sliderVert, true - создавать вертикальный слайдер, false - горизонтальный
	 * @param {object} parentElement, элемент относительно которого будет создаваться слайдер
	 * @param {number} value, стартовая позиция бегунка
	 * @param {number} value2, стартовая позиция 2-го бегунка (если range = true)
	 */
	this.createSlider = function(range, sliderVert, parentElement, value, value2) {
		view.createSlider(range, sliderVert, parentElement, value, value2);
	}

	/*----------------------------функции отвечающие за передвижение ползунка-----------------------------*/

	this.initSlider = function(range) {
		if (range) {
			initThumbLeft();
			initThumbRigth();
		} else {
			initSlider();
		}
	}

	this.initVertSlider = function(range) {
		if (range) {
			console.log('пока нету');
		} else {
			initSliderVert();
		}
	}

	/*--------------------------------------вспомогательные функции----------------------------------------*/
	/**
	 * Делает бегунок thumb подвижным (использ. для слайдера с одним бегунком)
	 * @return {boolean} false отключает стандартный Drag’n’Drop
	 */
	function initSlider() {
		view.thumbLeft.onmousedown = function() {
			controller.mousedownThumb(view.thumbLeft);

			document.onmousemove = function() {
				controller.mousemoveThumb(view.thumbLeft);
			}

			document.onmouseup = function(){
				controller.mouseupThumb();
			}

			return false; 
		}
	}

	/**
	 * Делает бегунок thumb подвижным (использ. для вертикального слайдера с одним бегунком)
	 * @return {boolean} false отключает стандартный Drag’n’Drop
	 */
	function initSliderVert() {
		view.thumbLeft.onmousedown = function() {
			controller.mousedownThumbVert(view.thumbLeft);

			document.onmousemove = function() {
				controller.mousemoveThumbVert(view.thumbLeft);
			}

			document.onmouseup = function(){
				controller.mouseupThumb();
			}

			return false;
		}
	}

	/**
	 * Делает левый бегунок thumb подвижным (использ. для слайдера с двумя бегунками)
	 * @return {boolean} false отключает стандартный Drag’n’Drop
	 */
	function initThumbLeft() {
		view.thumbLeft.onmousedown = function() {
			controller.mousedownThumb(view.thumbLeft);

			document.onmousemove = function() {
				controller.mousemoveThumbLeft(view.thumbLeft, view.thumbRigth);
			}

			document.onmouseup = function(){
				controller.mouseupThumb();
			}

			return false; 
		}
	}

	/**
	 * Делает правый бегунок thumb подвижным (использ. для слайдера с двумя бегунками)
	 * @return {boolean} false отключает стандартный Drag’n’Drop
	 */
	function initThumbRigth() {
		view.thumbRigth.onmousedown = function() {
			controller.mousedownThumb(view.thumbRigth);

			document.onmousemove = function() {
				controller.mousemoveThumbRigth(view.thumbLeft, view.thumbRigth);
			}

			document.onmouseup = function(){
				controller.mouseupThumb();
			}

			return false; 
		}
	}
}
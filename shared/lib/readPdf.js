
const pdfjsLib = require("pdfjs-dist/build/pdf");
import { createCanvas, createImage } from "./createThumbImage";
export const readPdf = function readPdf(pdf, config) {
	pdfjsLib.getDocument(pdf).promise.then(function (doc) {
		var pages = [];
		while (pages.length < doc.numPages) pages.push(pages.length + 1);
		return Promise.all(
			pages.map(function (num) {
				return doc
					.getPage(num)
					.then((page) => {
						createCanvas(page, config).then((canvas) => {
							console.log(canvas);
							return createImage(canvas, config.name);
						});
					})
					.catch((err) => {
						return [false, err];
					});
			})
		);
	});
};

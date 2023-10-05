import { getExtension } from './createThumbImage';
import  { readPdf } from "./readPdf";
export const pdfthumbnail = function (data, config) {
	return new Promise((resolve, reject) => {
		var file = data.name ? data : data[0];
		var isVideo = config.fileName ? 0 : 1;
		var { fileName, extension } = getExtension(
			config.fileName || file.name,
			isVideo
		);
		fileName = `${fileName}.${extension}`;
		var allowedExtensions = data.substr(data.lastIndexOf('.') + 1);
		if (/(pdf|zip|doc)$/gi.test(allowedExtensions)) {
			try {
				resolve(readPdf(data, config));
			} catch (err) {
				reject({ error: true, errorDetails: err });
			}
		} else {
			reject({
				error: true,
				errorDetails: {
					wrongFile: true,
					message: 'File type is not pdf',
				},
			});
		}
	});
};

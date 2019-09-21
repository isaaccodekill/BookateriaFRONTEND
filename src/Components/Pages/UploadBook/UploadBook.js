const formConfig = {
	bookImage: {
		elemenType: "image",
		elementConfig: {
			placeholder: "Add a cover photo",
			type: "file"	
		},
		previewUrl: "",
		value: "",
		valid: true,
		validations: {
			maxSize: "10mb",
			alloweFileType: ['jpeg', 'png', 'svg']
		},
		errorMessages: []
	},
	title: {
		elemenType: "input",
		elementConfig: {
			placeholder: "Add a title",
			type: 'text'
		}
		value: "",
		valid: true,
		validations: {
			required: true,
			maxCharLength: 256
		},
		errorMessages: []
	},
	Author: {
		elemenType: "input",
		elementConfig: {
			placeholder: "Add an Author",
			type: 'text'
		}
		value: "",
		valid: true,
		validations: {
			required: true,
			maxCharLength: 256
		},
		errorMessages: []
	},
	Category: {
		elemenType: "input",
		elementConfig: {
			placeholder: "Add a Category",
			type: 'text'
		}
		value: "",
		valid: true,
		validations: {
			required: true,
			maxCharLength: 256
		},
		errorMessages: []
	},
	Description: {
		elemenType: "textArea",
		elementConfig: {
			placeholder: "Add a Description",
			type: 'text'
		}
		value: "",
		valid: true,
		validations: {},
		errorMessages: []
	},
	bookFile: {
		elemenType: "file",
		elementConfig: {
			placeholder: "Add the book file",
			type: "file"	
		},
		previewUrl: "",
		value: "", // need to find the way to make the name of the book show as i upload it
		valid: true,
		validations: {
			required: true,
			alloweFileType: ["pdf", "epub"]
		},
		errorMessages: []
	}
}
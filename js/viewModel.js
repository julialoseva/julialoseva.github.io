class Skill {

	constructor(name, progress) {
		this.name = name;
		this.progress = progress;
	}
}

function createViewModel(elementSelector) {
	return new Vue({
		el: elementSelector,
		data: {
			logo: {
				visible: true,
				text: "JL"
			},
			sections: {
				home: {
					available: true,
					name: "Julia Loseva"
				},
				about: {
					available: true,
					skills: [
						new Skill(
							"Java",
							100
						),
						new Skill(
							"Kotlin",
							100
						),
						new Skill(
							"HTML",
							100
						),
						new Skill(
							"CSS",
							100
						),
						new Skill(
							"JavaScript",
							100
						)
					]
				},
				services: {
					available: false
				},
				work: {
					available: true,
					showCounters: true,
					showTestimonials: false
				},
				blog: {
					available: false
				},
				contact: {
					available: true,
					showFeedbackForm: false
				}
			}
		},
		methods: {
		}
	});
}

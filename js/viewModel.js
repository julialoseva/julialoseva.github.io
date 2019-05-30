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
							80
						),
						new Skill(
							"Kotlin",
							60
						),
						new Skill(
							"HTML",
							50
						),
						new Skill(
							"CSS",
							50
						),
						new Skill(
							"JavaScript",
							50
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

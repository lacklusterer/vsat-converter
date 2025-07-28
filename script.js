const conversionData = {
	toan: [
		{ minVsat: 132, maxVsat: 150, minThpt: 8.5, maxThpt: 10, percentile: "3%" },
		{
			minVsat: 128.5,
			maxVsat: 132,
			minThpt: 8.1,
			maxThpt: 8.5,
			percentile: "5%",
		},
		{
			minVsat: 122.5,
			maxVsat: 128.5,
			minThpt: 7.75,
			maxThpt: 8.1,
			percentile: "10%",
		},
		{
			minVsat: 114.5,
			maxVsat: 122.5,
			minThpt: 7.0,
			maxThpt: 7.75,
			percentile: "20%",
		},
		{
			minVsat: 108,
			maxVsat: 114.5,
			minThpt: 6.6,
			maxThpt: 7.0,
			percentile: "30%",
		},
		{
			minVsat: 102.5,
			maxVsat: 108,
			minThpt: 6.25,
			maxThpt: 6.6,
			percentile: "40%",
		},
		{
			minVsat: 97,
			maxVsat: 102.5,
			minThpt: 6.0,
			maxThpt: 6.25,
			percentile: "50%",
		},
		{ minVsat: 91, maxVsat: 97, minThpt: 5.6, maxThpt: 6.0, percentile: "60%" },
		{
			minVsat: 85,
			maxVsat: 91,
			minThpt: 5.25,
			maxThpt: 5.6,
			percentile: "70%",
		},
		{
			minVsat: 77,
			maxVsat: 85,
			minThpt: 5.0,
			maxThpt: 5.25,
			percentile: "80%",
		},
		{ minVsat: 68, maxVsat: 77, minThpt: 4.5, maxThpt: 5.0, percentile: "90%" },
		{
			minVsat: 6,
			maxVsat: 68,
			minThpt: 1.5,
			maxThpt: 4.5,
			percentile: "> 90%",
		},
	],
	vatli: [
		{ minVsat: 123, maxVsat: 147, minThpt: 9.5, maxThpt: 10, percentile: "3%" },
		{
			minVsat: 118.5,
			maxVsat: 123,
			minThpt: 9.25,
			maxThpt: 9.5,
			percentile: "5%",
		},
		{
			minVsat: 112.5,
			maxVsat: 118.5,
			minThpt: 9.0,
			maxThpt: 9.25,
			percentile: "10%",
		},
		{
			minVsat: 105,
			maxVsat: 112.5,
			minThpt: 8.5,
			maxThpt: 9.0,
			percentile: "20%",
		},
		{
			minVsat: 99.5,
			maxVsat: 105,
			minThpt: 8,
			maxThpt: 8.5,
			percentile: "30%",
		},
		{
			minVsat: 94.5,
			maxVsat: 99.5,
			minThpt: 7.75,
			maxThpt: 8,
			percentile: "40%",
		},
		{
			minVsat: 90,
			maxVsat: 94.5,
			minThpt: 7.5,
			maxThpt: 7.75,
			percentile: "50%",
		},
		{
			minVsat: 85,
			maxVsat: 90,
			minThpt: 7.25,
			maxThpt: 7.5,
			percentile: "60%",
		},
		{
			minVsat: 80,
			maxVsat: 85,
			minThpt: 6.75,
			maxThpt: 7.25,
			percentile: "70%",
		},
		{
			minVsat: 74,
			maxVsat: 80,
			minThpt: 6.35,
			maxThpt: 6.75,
			percentile: "80%",
		},
		{
			minVsat: 66.5,
			maxVsat: 74,
			minThpt: 5.75,
			maxThpt: 6.35,
			percentile: "90%",
		},
		{
			minVsat: 17,
			maxVsat: 66.5,
			minThpt: 3.05,
			maxThpt: 5.75,
			percentile: "> 90%",
		},
	],
	hoahoc: [
		{ minVsat: 129, maxVsat: 150, minThpt: 9.5, maxThpt: 10, percentile: "3%" },
		{
			minVsat: 124.5,
			maxVsat: 129,
			minThpt: 9.25,
			maxThpt: 9.5,
			percentile: "5%",
		},
		{
			minVsat: 117,
			maxVsat: 124.5,
			minThpt: 8.75,
			maxThpt: 9.25,
			percentile: "10%",
		},
		{
			minVsat: 107.5,
			maxVsat: 117,
			minThpt: 8.25,
			maxThpt: 8.75,
			percentile: "20%",
		},
		{
			minVsat: 100.5,
			maxVsat: 107.5,
			minThpt: 7.75,
			maxThpt: 8.25,
			percentile: "30%",
		},
		{
			minVsat: 94,
			maxVsat: 100.5,
			minThpt: 7.25,
			maxThpt: 7.75,
			percentile: "40%",
		},
		{
			minVsat: 88,
			maxVsat: 94,
			minThpt: 6.75,
			maxThpt: 7.25,
			percentile: "50%",
		},
		{
			minVsat: 81.5,
			maxVsat: 88,
			minThpt: 6.25,
			maxThpt: 6.75,
			percentile: "60%",
		},
		{
			minVsat: 75.5,
			maxVsat: 81.5,
			minThpt: 5.75,
			maxThpt: 6.25,
			percentile: "70%",
		},
		{
			minVsat: 68.5,
			maxVsat: 75.5,
			minThpt: 5.25,
			maxThpt: 5.75,
			percentile: "80%",
		},
		{
			minVsat: 59.5,
			maxVsat: 68.5,
			minThpt: 4.6,
			maxThpt: 5.25,
			percentile: "90%",
		},
		{
			minVsat: 20,
			maxVsat: 59.5,
			minThpt: 1.35,
			maxThpt: 4.6,
			percentile: "> 90%",
		},
	],
	sinhhoc: [
		{
			minVsat: 130.5,
			maxVsat: 150,
			minThpt: 9,
			maxThpt: 9.75,
			percentile: "3%",
		},
		{
			minVsat: 126.5,
			maxVsat: 130.5,
			minThpt: 8.75,
			maxThpt: 9,
			percentile: "5%",
		},
		{
			minVsat: 120.5,
			maxVsat: 126.5,
			minThpt: 8.34,
			maxThpt: 8.75,
			percentile: "10%",
		},
		{
			minVsat: 112.5,
			maxVsat: 120.5,
			minThpt: 7.85,
			maxThpt: 8.34,
			percentile: "20%",
		},
		{
			minVsat: 105.5,
			maxVsat: 112.5,
			minThpt: 7.5,
			maxThpt: 7.85,
			percentile: "30%",
		},
		{
			minVsat: 100,
			maxVsat: 105.5,
			minThpt: 7.25,
			maxThpt: 7.5,
			percentile: "40%",
		},
		{
			minVsat: 94.5,
			maxVsat: 100,
			minThpt: 6.85,
			maxThpt: 7.25,
			percentile: "50%",
		},
		{
			minVsat: 88.5,
			maxVsat: 94.5,
			minThpt: 6.5,
			maxThpt: 6.85,
			percentile: "60%",
		},
		{
			minVsat: 82.5,
			maxVsat: 88.5,
			minThpt: 6.25,
			maxThpt: 6.5,
			percentile: "70%",
		},
		{
			minVsat: 76,
			maxVsat: 82.5,
			minThpt: 5.85,
			maxThpt: 6.25,
			percentile: "80%",
		},
		{
			minVsat: 66.5,
			maxVsat: 76,
			minThpt: 5.25,
			maxThpt: 5.85,
			percentile: "90%",
		},
		{
			minVsat: 26.5,
			maxVsat: 66.5,
			minThpt: 2.8,
			maxThpt: 5.25,
			percentile: "> 90%",
		},
	],
	lichsu: [
		{
			minVsat: 133.5,
			maxVsat: 150,
			minThpt: 9.75,
			maxThpt: 10,
			percentile: "3%",
		},
		{
			minVsat: 131,
			maxVsat: 133.5,
			minThpt: 9.5,
			maxThpt: 9.75,
			percentile: "5%",
		},
		{
			minVsat: 126.5,
			maxVsat: 131,
			minThpt: 9.25,
			maxThpt: 9.5,
			percentile: "10%",
		},
		{
			minVsat: 120.5,
			maxVsat: 126.5,
			minThpt: 9,
			maxThpt: 9.25,
			percentile: "20%",
		},
		{
			minVsat: 115,
			maxVsat: 120.5,
			minThpt: 8.5,
			maxThpt: 9,
			percentile: "30%",
		},
		{
			minVsat: 110,
			maxVsat: 115,
			minThpt: 8.25,
			maxThpt: 8.5,
			percentile: "40%",
		},
		{
			minVsat: 105.5,
			maxVsat: 110,
			minThpt: 8,
			maxThpt: 8.25,
			percentile: "50%",
		},
		{
			minVsat: 101,
			maxVsat: 105.5,
			minThpt: 7.75,
			maxThpt: 8,
			percentile: "60%",
		},
		{
			minVsat: 95.5,
			maxVsat: 101,
			minThpt: 7.5,
			maxThpt: 7.75,
			percentile: "70%",
		},
		{
			minVsat: 88.5,
			maxVsat: 95.5,
			minThpt: 7,
			maxThpt: 7.5,
			percentile: "80%",
		},
		{
			minVsat: 79.5,
			maxVsat: 88.5,
			minThpt: 6.35,
			maxThpt: 7,
			percentile: "90%",
		},
		{
			minVsat: 36.5,
			maxVsat: 79.5,
			minThpt: 2.95,
			maxThpt: 6.35,
			percentile: "> 90%",
		},
	],
	dialy: [
		{ minVsat: 124, maxVsat: 141, minThpt: 10, maxThpt: 10, percentile: "3%" },
		{
			minVsat: 120.5,
			maxVsat: 124,
			minThpt: 10,
			maxThpt: 10,
			percentile: "5%",
		},
		{
			minVsat: 115.5,
			maxVsat: 120.5,
			minThpt: 9.75,
			maxThpt: 10,
			percentile: "10%",
		},
		{
			minVsat: 108.5,
			maxVsat: 115.5,
			minThpt: 9.25,
			maxThpt: 9.75,
			percentile: "20%",
		},
		{
			minVsat: 103,
			maxVsat: 108.5,
			minThpt: 9,
			maxThpt: 9.25,
			percentile: "30%",
		},
		{
			minVsat: 98.5,
			maxVsat: 103,
			minThpt: 8.75,
			maxThpt: 9,
			percentile: "40%",
		},
		{
			minVsat: 94,
			maxVsat: 98.5,
			minThpt: 8.5,
			maxThpt: 8.75,
			percentile: "50%",
		},
		{
			minVsat: 89.5,
			maxVsat: 94,
			minThpt: 8.25,
			maxThpt: 8.5,
			percentile: "60%",
		},
		{
			minVsat: 84.5,
			maxVsat: 89.5,
			minThpt: 7.75,
			maxThpt: 8.25,
			percentile: "70%",
		},
		{
			minVsat: 79,
			maxVsat: 84.5,
			minThpt: 7.25,
			maxThpt: 7.75,
			percentile: "80%",
		},
		{
			minVsat: 71,
			maxVsat: 79,
			minThpt: 6.5,
			maxThpt: 7.25,
			percentile: "90%",
		},
		{ minVsat: 31, maxVsat: 71, minThpt: 3, maxThpt: 6.5, percentile: "> 90%" },
	],
	tienganh: [
		{
			minVsat: 131,
			maxVsat: 150,
			minThpt: 7.75,
			maxThpt: 9.75,
			percentile: "3%",
		},
		{
			minVsat: 127.5,
			maxVsat: 131,
			minThpt: 7.5,
			maxThpt: 7.75,
			percentile: "5%",
		},
		{
			minVsat: 120.5,
			maxVsat: 127.5,
			minThpt: 7,
			maxThpt: 7.5,
			percentile: "10%",
		},
		{
			minVsat: 112,
			maxVsat: 120.5,
			minThpt: 6.5,
			maxThpt: 7,
			percentile: "20%",
		},
		{ minVsat: 105, maxVsat: 112, minThpt: 6, maxThpt: 6.5, percentile: "30%" },
		{
			minVsat: 98.5,
			maxVsat: 105,
			minThpt: 5.75,
			maxThpt: 6,
			percentile: "40%",
		},
		{
			minVsat: 92,
			maxVsat: 98.5,
			minThpt: 5.5,
			maxThpt: 5.75,
			percentile: "50%",
		},
		{
			minVsat: 85.5,
			maxVsat: 92,
			minThpt: 5.25,
			maxThpt: 5.5,
			percentile: "60%",
		},
		{
			minVsat: 78.5,
			maxVsat: 85.5,
			minThpt: 5,
			maxThpt: 5.25,
			percentile: "70%",
		},
		{
			minVsat: 70.5,
			maxVsat: 78.5,
			minThpt: 4.5,
			maxThpt: 5,
			percentile: "80%",
		},
		{ minVsat: 60, maxVsat: 70.5, minThpt: 4, maxThpt: 4.5, percentile: "90%" },
		{
			minVsat: 20.5,
			maxVsat: 60,
			minThpt: 1.25,
			maxThpt: 4,
			percentile: "> 90%",
		},
	],
	nguvan: [
		{
			minVsat: 129.5,
			maxVsat: 146,
			minThpt: 9.25,
			maxThpt: 9.75,
			percentile: "3%",
		},
		{
			minVsat: 127.5,
			maxVsat: 129.5,
			minThpt: 9.0,
			maxThpt: 9.25,
			percentile: "5%",
		},
		{
			minVsat: 124,
			maxVsat: 127.5,
			minThpt: 9.0,
			maxThpt: 9.0,
			percentile: "10%",
		},
		{
			minVsat: 119.5,
			maxVsat: 124,
			minThpt: 8.75,
			maxThpt: 9.0,
			percentile: "20%",
		},
		{
			minVsat: 115.5,
			maxVsat: 119.5,
			minThpt: 8.5,
			maxThpt: 8.75,
			percentile: "30%",
		},
		{
			minVsat: 112.5,
			maxVsat: 115.5,
			minThpt: 8.25,
			maxThpt: 8.5,
			percentile: "40%",
		},
		{
			minVsat: 109,
			maxVsat: 112.5,
			minThpt: 8,
			maxThpt: 8.25,
			percentile: "50%",
		},
		{
			minVsat: 106,
			maxVsat: 109,
			minThpt: 7.75,
			maxThpt: 8.0,
			percentile: "60%",
		},
		{
			minVsat: 102,
			maxVsat: 106,
			minThpt: 7.5,
			maxThpt: 7.75,
			percentile: "70%",
		},
		{
			minVsat: 97,
			maxVsat: 102,
			minThpt: 7.25,
			maxThpt: 7.5,
			percentile: "80%",
		},
		{
			minVsat: 90,
			maxVsat: 97,
			minThpt: 6.75,
			maxThpt: 7.25,
			percentile: "90%",
		},
		{
			minVsat: 5,
			maxVsat: 90,
			minThpt: 3.5,
			maxThpt: 6.75,
			percentile: "> 90%",
		},
	],
};

// Linear interpolation function
function interpolate(x, a, b, c, d) {
	return c + ((x - a) / (b - a)) * (d - c);
}

// Convert V-SAT score to THPT
function convertScore(subject, vsatScore) {
	const data = conversionData[subject];
	if (!data) {
		throw new Error("Môn học không hợp lệ");
	}

	// Find the appropriate range
	for (let range of data) {
		if (vsatScore > range.minVsat && vsatScore <= range.maxVsat) {
			const thptScore = interpolate(
				vsatScore,
				range.minVsat,
				range.maxVsat,
				range.minThpt,
				range.maxThpt,
			);
			return {
				thptScore: Math.round(thptScore * 100) / 100, // Round to 2 decimal places
				percentile: range.percentile,
			};
		}
	}

	// Return null for out-of-range scores instead of throwing error
	return null;
}

// DOM elements
const form = document.getElementById("converterForm");
const subjectSelect = document.getElementById("subject");
const vsatInput = document.getElementById("vsatScore");
const resultCard = document.getElementById("resultCard");
const resultScore = document.getElementById("resultScore");
const resultPercentile = document.getElementById("resultPercentile");
const errorMessage = document.getElementById("errorMessage");
const noticeMessage = document.getElementById("noticeMessage");

// Form submission handler
form.addEventListener("submit", function (e) {
	e.preventDefault();

	// Hide previous results
	resultCard.classList.remove("show");
	errorMessage.classList.remove("show");
	noticeMessage.classList.remove("show");

	try {
		const subject = subjectSelect.value;
		const vsatScore = parseFloat(vsatInput.value);

		// Validation
		if (!subject) {
			throw new Error("Vui lòng chọn môn học");
		}

		if (isNaN(vsatScore) || vsatScore < 0 || vsatScore > 150) {
			throw new Error("Điểm V-SAT phải là số từ 0 đến 150");
		}

		// Convert score
		const result = convertScore(subject, vsatScore);

		if (result === null) {
			// Show notice for out-of-scope scores
			noticeMessage.classList.add("show");
			return;
		}

		// Display result
		resultScore.textContent = result.thptScore.toFixed(2);
		resultPercentile.textContent = `Top ${result.percentile}`;
		resultCard.classList.add("show");
	} catch (error) {
		errorMessage.textContent = error.message;
		errorMessage.classList.add("show");
	}
});

// Input validation
vsatInput.addEventListener("input", function () {
	const value = parseFloat(this.value);
	if (!isNaN(value) && (value < 0 || value > 150)) {
		this.setCustomValidity("Điểm V-SAT phải từ 0 đến 150");
	} else {
		this.setCustomValidity("");
	}
});

const processScore = (data) => {
	const lines = data.trim().split('\n')
	const result = {}

	lines.forEach(line => {
		const parts = line.split(',')
		const name = parts[0]
		const scores = parts.slice(1)
		const total = scores.reduce((acc, next) => {
			return acc+ next*1
		}, 0)
		const ave = total/scores.length
		result[name] = ave
	})
	return result
}

module.exports = {
	processScore
}
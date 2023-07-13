const clients1 = ["Gilbert", "Salvatore", "Pierce", "Summers", "Forbes", "Donovan", "Bennett"];
const clients2 = ["Pierce", "Zaltzman", "Salvatore", "Michaelson"];


const allClients = [...clients1, ...(() => {
	let arr = []
	clients2.forEach(c => {
		if (clients1.indexOf(c) == -1) {
			arr = [...arr, c]
		}
	})
	return arr
})()]

console.log(allClients)


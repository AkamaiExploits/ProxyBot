module.exports = client => {
	console.log(`Im Online!`);
	
	const activites = ["Proxys Servers!", "phelp for help", "Coded by Akamai Exploits" ]
	
	setInterval(() => {
		let activity = activites[Math.floor(Math.random() * activites.length)]
		client.user.setActivity(activity, { type: "WATCHING"})
	}, 10000)
};

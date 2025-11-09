export interface userInfo {
	username: string;
	name?: string;
}

export class Configurations {
	get(): userInfo {
		const data = localStorage.getItem("userInfo");
		if (data === null) {
			return this.init();
		}
		return JSON.parse(data);
	}
	init(): userInfo {
		const user: userInfo = {
			username: "Anonymous",
		};
		this.save(user);
		return user;
	}
	save(user: userInfo) {
		localStorage.setItem("userInfo", JSON.stringify(user));
	}
}

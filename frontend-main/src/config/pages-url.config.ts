//описываются только закрытые роуты ()

class DASHBOARD {
	private root = '/lk'
	
	MEETS = `${this.root}/meets`
	ABOUT = `/about`
	PROFILE = `${this.root}/profile`
	ADMIN_USERS = `${this.root}/admin`
}

export const DASHBOARD_PAGES = new DASHBOARD()
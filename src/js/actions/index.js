

//SignView.js
export const SHOW_SIGNVIEW = 'SHOW_SIGNVIEW';
export const HIDE_SIGNVIEW = 'HIDE_SIGNVIEW';
export const SHOW_SIGNUPVIEW = 'SHOW_SIGNUPVIEW';
export const HIDE_SIGNUPVIEW = 'HIDE_SIGNUPVIEW';

export function showSignView() {
	document.body.style.overflow = 'hidden';
	return {
		type: SHOW_SIGNVIEW
	};
}

export function hideSignView() {
	document.body.style.overflow = 'auto';
	return {
		type: HIDE_SIGNVIEW
	};
}

//Launch.js
export function updateLaunch(type, content) {
	return {
		type: type,
		content: content
	};
}
//DashboardProduct.js
export function updateDashboardProduct(which, content) {
	return {
		type: 'UPDATE_DASHBOARD_PRODUCT',
		which: which,
		content: content
	};
}


//USER
export const TRY_LOGIN = 'TRY_LOGIN';

export function tryLogin(success, email, uid) {
	return {
		type: TRY_LOGIN,
		success: success,
		email: email,
		uid: uid
	};
}

//USER

export const DASHBOARD_SHOW_BOTTOM_NAV = 'DASHBOARD_SHOW_BOTTOM_NAV';

export function showDashboardBottomNav(show, logo, name, category) {
	return {
		type: DASHBOARD_SHOW_BOTTOM_NAV,
		logo: logo,
		name: name,
		show: show,
		category: category
	};
}

//LOCATION
export function routeLocationDidUpdate(location) {
  return {
    type: 'LOCATION_UPDATE',
    location: location,
  };
}


//dropdown
export function showMainDropDown() {
  return {
    type: 'SHOW_MAINDROPDOWN'
  };
}

export function hideMainDropDown() {
  return {
    type: 'HIDE_MAINDROPDOWN'
  };
}

//loading
export function loadingHandler(type, content) {
  return {
    type: type,
    content: content
  };
}


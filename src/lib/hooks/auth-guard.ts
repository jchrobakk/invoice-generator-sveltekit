import { redirect, type Handle } from '@sveltejs/kit';

export const authGuard: Handle = async ({ event, resolve }) => {
	const authenticated = !!(await event.locals.getSession());
	const accessingProtectedPage = event.route.id?.startsWith('/(protected)/');
	const acessingMainPage = event.route.id === '/';

	if (!authenticated && accessingProtectedPage) {
		redirect(301, '/');
	}

	if (authenticated && acessingMainPage) {
		redirect(301, '/dashboard');
	}

	return await resolve(event);
};

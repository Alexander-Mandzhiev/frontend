import GlobalLoader from './GlobalLoader'
import Profile from './profile'

export default async function Header() {
	return (
		<header>
			<GlobalLoader />
			<Profile />
		</header>
	)
}

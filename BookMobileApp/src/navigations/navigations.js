import config from '../config/config'

//Screen
import HomeScreen from '../screens/HomeScreen'
import BooksScreen from '../screens/BooksScreen'
import AuthorsScreen from '../screens/AuthorsScreen'
import PublishersScreen from '../screens/PublishersScreen'
import LoginScreen from '../screens/LoginScreen'
import SignupScreen from '../screens/SignupScreen'

//Layouts
import AuthLayout from '../layouts/AuthLayout'

const publicNavigations = [
    { name: config.navigations.home, screen: HomeScreen },
    { name: config.navigations.books, screen: BooksScreen },
    { name: config.navigations.authors, screen: AuthorsScreen },
    { name: config.navigations.publishers, screen: PublishersScreen },
    { name: config.navigations.login, screen: LoginScreen, layout: AuthLayout },
    { name: config.navigations.signup, screen: SignupScreen, layout: AuthLayout },
]

export { publicNavigations }
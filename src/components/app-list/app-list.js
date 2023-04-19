import AppListItem from '../app-list-item/app-list-item';
import './app-list.css';

const AppList = () => {
    return (
        <ul className="app-list list-group">
            <AppListItem/>
            <AppListItem/>
            <AppListItem/>
        </ul>
    )
}

export default AppList;
import AppInfo from '../app-info/app-info';
import SearchPanel from '../app-search-panel/app-search-panel';
import AppFilter from '../app-filter/app-filter';
import AppList from '../app-list/app-list';

import './app.css';

function App() {
    return (
        <div className="app">
            <AppInfo/>
            <div className="app-search-panel">
                <SearchPanel/>
                <AppFilter/>
            </div>
            <AppList/>
        </div>
    )
}

export default App;
import Header from '../../components/Header/Header';
import Search from '../../components/Search/Search';
import Button from '../../components/Button/Button';
import SearchResult from './SearchResult/SearchResult';
import { useSelector } from 'react-redux';
import './Home.css';

const App = () => {

    const result = useSelector(state => state.wikiSearch.result);

    return (
        <div className="App">
            <Header value="LIKED" color="header__liked"/>
            <Search />         
            <Button title="SEARCH" color="button__blue" />
            { result && <SearchResult /> }
            { result?.title && <Button title="LIKE" color="button__pink"/>}
        </div>
  );
}

export default App;

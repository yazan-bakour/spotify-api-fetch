import React, { Component } from 'react';
import { SearchInput, Spinner } from '@timechimp/tacugama';
import {connect} from "react-redux";
import {fetchApi} from "../../../api";
import '../_search.scss';
import SearchedContent from './SearchedContent/SearchedContent';
import GeneralContent from './GeneralContent/GeneralContent';

class Discover extends Component {
		constructor() {
			super()

			this.state = {
				searchValue: ''
			}
		}

  unsubscribeSearch = null;

  componentDidMount() {
    const { getSearch } = this.props;
    const { unsubscribe: unsubscribeSearch } = getSearch();
    getSearch(this.state.searchValue)

    this.unsubscribeSearch = unsubscribeSearch;
  }
  componentDidUpdate(prevProps, prevState) {
    const { getSearch } = this.props;

    if (prevState.searchValue !== this.state.searchValue) {
      getSearch(this.state.searchValue);
    }
  }

  componentWillUnmount() {
    this.unsubscribeSearch?.();
  }
  
  render() {
    const data = this.props.search(this.state.searchValue)

		const handleSearch = (e) => {
      this.setState({searchValue: e})
		}

    return (
      <div className="search">
        <div className='__input'>
          <SearchInput
            endEnhancer=""
            onBlur={function noRefCheck(){}}
            onChange={e => handleSearch(e.target.value)}
            onClear={function noRefCheck(){}}
            onFocus={function noRefCheck(){}}
            onKeyDown={function noRefCheck(){}}
            onKeyPress={function noRefCheck(){}}
            onKeyUp={function noRefCheck(){}}
            placeholder="Type to search"
            testId="test-input"
            value={this.state.searchValue}
          />
        </div>
        {
          data.status === "rejected" ? 
          <GeneralContent /> : data.status === "fulfilled" ?
          <SearchedContent data={data} /> : 
          <Spinner />
        }
      </div>
    );
  }
}
const mapState = (state) => ({
  search: (text) => fetchApi.endpoints.getSearch.select(text)(state)
});
const mapDispatch = {
    getSearch: fetchApi.endpoints.getSearch.initiate
};
export default connect(mapState, mapDispatch)(Discover);
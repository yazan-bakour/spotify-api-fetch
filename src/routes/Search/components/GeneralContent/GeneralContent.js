import React, { Component } from "react";
import { ErrorAlert } from "@timechimp/tacugama";
import "../../../Discover/styles/_discover.scss";
import { connect } from "react-redux";
import { fetchApi } from "../../../../api";

class GeneralContent extends Component {
  unsubscribeCategory = null;

  componentDidMount() {
    const { getCategories } = this.props;
    const { unsubscribe: unsubscribeCategory } = getCategories(3);
    this.unsubscribeCategory = unsubscribeCategory;
  }

  componentWillUnmount() {
    this.unsubscribeCategory?.();
  }

  render() {
    const { categories } = this.props;
    const data = categories?.data?.categories?.items || []
  
    return (
      <div className="content">
        {categories?.error && (
          <div className="snackbar">
            <ErrorAlert
              message={categories?.error?.data?.error?.message}
              style={{ position: 0 }}
            />
          </div>
        )}
        <div className="__row" id="browse">
          {data.map(({ "icons": images, name }) => (
              <div key={name} className="discover-item animate__animated animate__fadeIn">
                <div
                  className="discover-item__art"
                  style={{ backgroundImage: `url(${images[0].url})` }}
                />
                <p className="discover-item__title">{name}</p>
              </div>
            ))}
        </div>
      </div>
    );
  }
}
const mapState = (state) => ({
  categories: fetchApi.endpoints.getCategories.select(3)(state),
});
const mapDispatch = {
  getCategories: fetchApi.endpoints.getCategories.initiate,
};
export default connect(mapState, mapDispatch)(GeneralContent);

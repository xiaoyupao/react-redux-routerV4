import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

class Home extends Component {
  constructor(props) {
    super(props);
    // this.handleChange = this.handleChange.bind(this);
    // this.handleRefreshClick = this.handleRefreshClick.bind(this);
  }

  // componentDidMount() {
  //   const { selectedReddit, fetchPostsIfNeeded } = this.props;

  //   fetchPostsIfNeeded(selectedReddit);
  // }

  // componentWillReceiveProps(nextProps) {
  //   if (nextProps.selectedReddit !== this.props.selectedReddit) {
  //     const { fetchPostsIfNeeded, selectedReddit } = nextProps;

  //     fetchPostsIfNeeded(selectedReddit)
  //   }
  // }

  // handleChange(nextReddit) {
  //   this.props.selectReddit(nextReddit)
  // }

  // handleRefreshClick(e) {
  //   e.preventDefault();

  //   const { invalidateReddit, fetchPostsIfNeeded, selectedReddit } = this.props;

  //   invalidateReddit(selectedReddit)
  //   fetchPostsIfNeeded(selectedReddit)
  // }
  render() {
    // const { selectedReddit, posts, isFetching, lastUpdated, fetchPostsIfNeeded, selectReddit, invalidateReddit } = this.props;
    // const isEmpty = posts.length === 0;
    return (
      <div>
        <h2>我是首页</h2>
      </div>
    )
  }



}

Home.propTypes = {
  // selectedReddit: PropTypes.string.isRequired,
  // posts: PropTypes.array.isRequired,
  // isFetching: PropTypes.bool.isRequired,
  // lastUpdated: PropTypes.number,
}

const mapStateToProps = ({ Home }) => {
  console.log(Home)
  // const {
  //   isFetching,
  //   lastUpdated,
  //   items: posts
  // } = postsByReddit[selectedReddit] || {
  //     isFetching: true,
  //     items: []
  //   }

  return {
  //   selectedReddit,
  //   posts,
  //   isFetching,
  //   lastUpdated
  }
}

const mapDispatchToProps = dispatch => ({
  // fetchPostsIfNeeded: selectedReddit => dispatch(fetchPostsIfNeeded(selectedReddit)),
  // selectReddit: nextReddit => dispatch(selectReddit(nextReddit)),
  // invalidateReddit: selectedReddit => dispatch(invalidateReddit(selectedReddit))
})

export default connect(mapStateToProps, mapDispatchToProps)(Home)

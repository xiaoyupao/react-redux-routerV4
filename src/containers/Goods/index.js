import queryString from 'query-string';
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import {
  Link
} from 'react-router-dom'
import { Breadcrumb, Table, Button, Popconfirm } from 'antd';
import { fetchList } from '../../actions/goods';
import { updateQuery } from '../../actions/router';

class Goods extends Component {
  constructor(props) {
    super(props);
    this.handleChangePage = this.handleChangePage.bind(this);
    this.columns = [
      {
        title: '商品ID',
        dataIndex: 'id'
      },
      {
        title: '商品名称',
        dataIndex: 'name'
      },
      {
        title: '商品图片',
        render: ({ picUrl }) => <img width="100" alt="商品图片" src={picUrl} />
      },
      {
        title: '状态',
        render: ({ status }) => (status === 1 ? '已上线' : '已下线')
      },
      {
        title: '操作',
        className: 'row-operation',
        render: ({ id, status }) => (
          <div>
            {/* <Link to={`/goods/store/edit?id=${id}`}>
                          <Button type="primary">编辑</Button>
                      </Link> */}
            {/* <Button
              type={status === 1 ? 'ghost' : 'primary'}
              onClick={this.handleSetStatus}
              data-id={id}
            >
              {status === 1 ? '下线' : '上线'}
            </Button> */}
            <Popconfirm
              title="确定要删除该商品吗？"
              okText="删除"
              // onConfirm={() => this.props.remove(id)}
              onConfirm={() => this.handleRemove(id)}
            >
              <Button>删除</Button>
            </Popconfirm>

          </div>
        )
      }
    ];
  }

  handleChangePage(param) {
    console.log('params', param)
    console.log(this.props);
    this.props.changePage(param);
    // this.props.fetchList();
    // this.props.history.push('/orders')
  }

  componentDidMount() {
    //   const { selectedReddit, fetchPostsIfNeeded } = this.props;

    //   fetchPostsIfNeeded(selectedReddit);
    this.props.fetchList();
  }

  componentDidUpdate(prevProps) {
    console.log('prevProps', prevProps)
    console.log('nowProps', this.props)
    const { pageIndex, fetchList } = this.props;

    if (prevProps.pageIndex !== pageIndex) {
      // fetchList();
    }
  }

  render() {
    const { lists, total, pageIndex, changePage } = this.props;
    console.log('this.props', this.props)
    const pagination = {
      total,
      current: pageIndex
    };

    return (
      <section className="good-container">
        <Breadcrumb>
          <Breadcrumb.Item>商品管理</Breadcrumb.Item>
        </Breadcrumb>

        <div className="">
          <Link to="orders" >跳转到订单管理</Link>
        </div>

        {/* <div className="add-button">
          <Button type="primary" onClick={this.showModal}>新增商品</Button>
        </div> */}

        {/* <div className="filter-container">
          <Filter
            status={'0'}
            onSubmit={this.onFilter}
          />
        </div>

        <AddModal
          visible={this.state.visible}
          onCancelModal={this.onCancelModal}
          onSubmit={this.onSubmitModal}
        /> */}

        <Table
          columns={this.columns}
          dataSource={lists}
          rowKey="id"
          bordered
          pagination={pagination}
          onChange={changePage}
        />
      </section>
    );
  }

}

Goods.propTypes = {

}

const mapStateToProps = ({ goods }, { location }) => {
  const { total, lists } = goods;
  const { pageIndex } = queryString.parse(location.search);

  return {
    total,
    lists,
    pageIndex: Number(pageIndex || 1)
  }
}

const mapDispatchToProps = dispatch => ({
  fetchList: () => dispatch(fetchList()),
  changePage: ({ current }) => {
    const query = {
      pageIndex: current
    }
    dispatch(updateQuery(query))
    dispatch(fetchList())
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(Goods)


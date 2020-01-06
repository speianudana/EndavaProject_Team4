import React, { Component } from 'react'
import NewsInfoStateless from './NewsInfo.stateless.jsx'
import PropTypes from 'prop-types'
import { FullPageLoading1 as Loading } from '../../Layouts/Loading'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import noImg from '../../../../static/No-Image-Basic.png'
import { fetchSportNewsById, refreshSportNewsArray } from '../../../redux/actions/News.actions'
import { CustomAlertOk, CustomAlertWarning } from '../../Layouts/CustomAlert'

class NewsInfoStatefull extends Component {
    constructor(props) {
        super(props);

        this.state = {
            loadPage: true,
            sportNews: null,
            newsDbId: null,

            messageNode: null,
            reloadOnDeleteMessageNode: false,
            messageText: '',

            // getUserAlreadyParticipateToThisEvent: false

        };

        this.loadNews.bind(this);
    }

    loadNews(newsDbId) {
        const news = this.props.allNews;

        const eIndex = news.findIndex(a => a.id === newsDbId);

        this.setState({
            newsDbId: newsDbId
        });

        if (eIndex === -1) {
            this.props.fetchSportNewsById(newsDbId)
        } else {
            this.setState({
                sportNews: news[eIndex],
                loadPage: false
            })
            // this.props.refreshSportEventArray()
        }


    }

    componentDidMount() {

        this._isMounted = true;
        const getNewsIdFromUrl = Number(
            window.location.href.split('?id=')[1]
        );
        this.loadNews(getNewsIdFromUrl);

        // console.log(this.props)

        window.scrollTo(0, 0);

    }

    shouldComponentUpdate(nextProps, nextState) {
        if (!this.state.sportNews && !nextState.sportNews) {
            const news = this.props.allNews
            const nIndex = news.findIndex(a => a.id === this.state.newsDbId)

            if (nIndex !== -1) {
                this.setState({
                    sportNews: news[nIndex],
                    loadPage: false
                })
                // return false
            }


        }

        // console.log(this.props, "---aaaa----", nextProps)

        return true
    }



    componentWillUnmount() {
        this._isMounted = false
    }


    render() {
        const sportNews = this.state.sportNews;
        console.log(sportNews)
        // const Message = this.state.messageNode;

        return (
            <>
                {this.state.loadPage && <Loading />}

                {/* {
                    Message && <Message
                        message={this.state.messageText}
                        onCloseHandler={e => {
                            this.setState({
                                messageNode: null
                            });

                            if (this.state.reloadOnDeleteMessageNode) location.reload()

                        }}
                    />
                } */}

                {
                    sportNews &&
                    <NewsInfoStateless
                        title={sportNews.title}
                        authorFullName={sportNews.authorFullName}
                        // newsDate={sportNews.newsDate}
                        context={sportNews.context}
                        image={sportNews.image || noImg}

                    />
                }
            </>
        )
    }
}

const mapStateToProps = state => ({
    allNews: state.allNewsData.allNews,
    getTokenMethod: state.authenticationData.getToken,
    isAuthenticated: state.authenticationData.isAuthenticated,
    getUserEmail: state.authenticationData.email,
});

const mapDispatchToProps = dispatch => (
    {
        fetchSportNewsById: bindActionCreators(fetchSportNewsById, dispatch),
        refreshSportEventArray: bindActionCreators(refreshSportNewsArray, dispatch)
    }
);

NewsInfoStatefull.propTypes = {
    allNews: PropTypes.array,
    fetchSportNewsById: PropTypes.func
};

export default connect(mapStateToProps, mapDispatchToProps)(NewsInfoStatefull)

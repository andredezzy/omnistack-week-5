import React, { Component } from 'react';

import LikeButton from '../../like.svg';
import './styles.css';
import api from '../../services/RestApi';

export default class Tweet extends Component {

    handleLike = async () => {
        const { _id } = this.props.tweet;

        await api.put(`like/${_id}`);
    };

    render() {
        const { tweet } = this.props;

        return (
            <li className="tweet">
                <strong>{tweet.author}</strong>
                <p>{tweet.content}</p>
                <button type="button" onClick={this.handleLike}>
                    <img src={LikeButton} alt="Like" />
                    {tweet.likes}
                </button>
            </li>
        );
    }
}

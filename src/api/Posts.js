import { Component, createElement } from "@wordpress/element";

class Posts extends Component {
    state = {
        posts: [],
        isLoading: true,
        error: null,
    };
    componentDidMount() {

        const apiBaseUrl = window?.wpApiSettings?.root || '';
        const postsEndpoint = `${apiBaseUrl}wp/v2/posts`;

        fetch(postsEndpoint)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Somehing went wrong');
                }
                return response.json();
            })
            .then(posts => this.setState({ posts, isLoading: false }))
            .catch(error => this.setState({ error, isLoading: false }));
    }
    render() {
        const { posts, isLoading, error } = this.state;
        if (error) {
            return createElement(
                'div',
                { className: error },
                `Error: ${error.message}`
            );
        }
        if (isLoading) {
            return createElement(
                'div',
                { className: loading },
                `Loading...`
            );
        }
        return createElement(
            'div',
            { className: postContainer},
            posts.map(post =>
                createElement(
                    'article',
                    { key: post.id },
                    createElement('h2', {
                        dangerouslySetInnerHTML: { __html: post.title.rendered },
                    }),
                    createElement('div', {
                        dangerouslySetInnerHTML: { __html: post.excerpt.rendered },
                    })
                )
            )

        )
    }
}

export default Posts;
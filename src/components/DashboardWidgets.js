import { Component, createElement } from "@wordpress/element";

class DashboardWidgets extends Component {
    constructor() {
        super();
        this.state = {
            rankingDate: [],
            recemtComments: [],
            isLoading: true,
        };
    }

    async componentDidMount() {
        const apiBaseUrl = window?.wpApiSettings?.root || '';

        try {
            const [postsResponse, commentsResponse] = await Promise.all([
                fetch(`${apiBaseUrl}/wp/v2/posts?per_page=5`),
                fetch(`${apiBaseUrl}/wp/v2/comments?per_page=5`),
        ]);

        const posts = postsResponse.ok ? await postsResponse.json() : [];
        const comments = commentsResponse.ok ? await commentsResponse.json() : [];

        const rankingData = posts.length
            ? posts.map(post => ({
                title: post.title.rendered,
                views: Math.floor(Math.random() * 100),
            }))
            : [
                { title: 'Fake-Beitrag 1', views: 120 },
                { title: 'Fake-Beitrag 2', views: 80 },
                { title: 'Fake-Beitrag 3', views: 60 },
                { title: 'Fake-Beitrag 4', views: 40 },
                { title: 'Fake-Beitrag 5', views: 20 },
            ];

            const recemtComments = comments.length
                ? comments.map((comment) => ({
                    author: comment.author_name,
                    comment: comment.content.rendered.replace(/<\/?[^>]+(>|$)/g, ''),
                    timestamp: comment.date,
                }))
                : [
                    {author: 'Fake User 1', comment: 'Fake Comment 1', timestamp: new Date().toISOString()},
                    {author: 'Fake User 2', comment: 'Fake Comment 2', timestamp: new Date().toISOString()},
                    {author: 'Fake User 3', comment: 'Fake Comment 3', timestamp: new Date().toISOString()},
                    {author: 'Fake User 4', comment: 'Fake Comment 4', timestamp: new Date().toISOString()},
                    {author: 'Fake User 5', comment: 'Fake Comment 5', timestamp: new Date().toISOString()},
                ];

                this.setState({ rankingData, recemtComments, isLoading: false });
            } catch (error) {
                this.setState({
                    rankingData: [
                        { title: 'Fake-Beitrag 1', views: 120 },
                        { title: 'Fake-Beitrag 2', views: 80 },
                        { title: 'Fake-Beitrag 3', views: 60 },
                        { title: 'Fake-Beitrag 4', views: 40 },
                        { title: 'Fake-Beitrag 5', views: 20 },
                    ],
                    recemtComments: [
                        { author: 'Fake User 1', comment: 'Fake Comment 1', timestamp: new Date().toISOString() },
                        { author: 'Fake User 2', comment: 'Fake Comment 2', timestamp: new Date().toISOString() },
                        { author: 'Fake User 3', comment: 'Fake Comment 3', timestamp: new Date().toISOString() },
                        { author: 'Fake User 4', comment: 'Fake Comment 4', timestamp: new Date().toISOString() },
                        { author: 'Fake User 5', comment: 'Fake Comment 5', timestamp: new Date().toISOString() },
                    ],
                    isLoading: false,
                });
            }
        }

        render() {
            const { rankingData, recemtComments, isLoading } = this.state;

            if (isLoading) {
                return createElement('div', { className: 'lading'}, 'Loading...');
            }

            const rankingWidget = createElement(
                'div',
                { className: 'widget ranking-widget' },
                createElement('h2', { className: 'widget-title'}, 'Meistgelesene Beiträge'),
                createElement(
                    'ul',
                    { className: 'widget-list ranking-list' },
                    rankingData.map((item, index) =>
                        createElement(
                            'li',
                            { className: 'widget-item ranking-item', key: index },
                            `${item.title} - ${item.views} Aufrufe`
                        ),
                    )
                )
            );

            const commentsWidget = createElement(
                'div',
                { className: 'widget comments-widget' },
                createElement('h2', { className: 'widget-title'}, 'Neueste Kommentare'),
                createElement(
                    'ul',
                    { className: 'widget-list comments-list' },
                    recemtComments.map((comment, index) =>
                        createElement(
                            'li',
                            { className: 'widget-item comments-item', key: index },
                            `${comment.author}: (${comment.timestamp}) - ${comment.comment}`
                        ),
                    )
                )
            );
            return createElement(
                'div',
                { className: 'dashboard-widgets' },
                rankingWidget,
                commentsWidget,
            );
        }
    }

    // render() {
    //     const userRole = window?.moonshinerUSer?.role || 'guest';

    //     const adminWidget = createElement(
    //         'div', 
    //         { className: 'widget' }, 
    //         createElement('h2', null, 'Admin Panel'),
    //         createElement('p', null, 'Nur für Administratoren zugänglich.'),
    //     );

    //     const editorWidget = createElement(
    //         'div', 
    //         { className: 'widget' }, 
    //         createElement('h2', null, 'Editor Panel'),
    //         createElement('p', null, 'Nur für Editoren zugänglich.'),
    //     );

    //     const generalWidget = createElement(
    //         "div",
    //         { className: "widget" },
    //         createElement("h2", null, "General Panel"),
    //         createElement("p", null, "Für alle Benutzer zugänglich."),
    //     );

    //     return createElement(
    //         "div",
    //         { className: "dashboard-widgets" },
    //         generalWidget,
    //         userRole === 'administrator' && adminWidget,
    //         userRole === 'editor' && editorWidget,
    //     );
    // }

export default DashboardWidgets;
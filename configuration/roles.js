const roles = {
    guest: {
        can: [
            'users:view',
            'events:view',
            'posts:view'
        ]
    },
    user: {
        can: [
            {
                name: 'user/posts:view',
                when: (req, params) => req.user.username === params.owner
            },
            {
                name: 'users:edit',
                when: (req, params) => req.user.username === params.owner
            },
            {
                name: 'users:edit',
                when: (req, params) => req.user.username === params.owner
            },
            {
                name: 'users:create',
                when: (req, params) => req.user.username === params.owner
            },
            {
                name: 'posts:delete',
                when: (req, params) => req.user.username === params.owner
            }
        ],
        inherits: [ 'guest' ]
    },
    admin: {
        can: [
            {
                name: 'user/posts:view',
                when: (req, params) => req.user.isAdmin
            },
            {
                name: 'users:edit',
                when: (req, params) => req.user.isAdmin
            },
            {
                name: 'users:edit',
                when: (req, params) => req.user.isAdmin
            },
            {
                name: 'posts:delete',
                when: (req, params) => req.user.isAdmin
            }
        ],
        inherits: [ 'user' ]
    }
}
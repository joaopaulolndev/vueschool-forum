data = {
  threads: 
    {
        t1: 
        {
            '.key': 't1',
            title: 'My first thread',
            publishedAt: '',
            posts: 
            {
                p1: 'p1'
            },
            userId: 'u1'
        }
    },  
    posts: 
    {
        p1:
        {
            '.key': 'p1',
            publishedAt: '',
            userId: '',
            text: 'Hi there',
            threadId: 't1'
        }
    },
    users: {
        u1:{
            '.key': 'u1',
            name: 'Alice',
            threads: 
            {
                t1: 't1'
            },
            posts: 
            {
                p1: 'p1'
            },
        }, 
    },
    forums: {
        f1: {
            '.key': 'f1',
            name: 'Fishing',
            description: '',
            categoryId: 'c1',
            threads: 
            {
                t1: 't1'
            },
        },
    },
    categories: {
        c1: {
            '.key': 'c1',
            name: 'Discussions',
            forums: {
                f1: 'f1'
            }
        }
    }
}

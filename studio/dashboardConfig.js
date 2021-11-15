export default {
  widgets: [
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '61928f47ac6c777da6c14f30',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-8mnbob5x',
                  apiId: '2f741500-1cd3-46ba-9096-d6fd62913836'
                },
                {
                  buildHookId: '61928f470769523ed2199a6b',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-mfgs4fht',
                  apiId: 'eb5c7765-cb46-4fc4-a45b-a0099df409cf'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/cz1776/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-mfgs4fht.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}

import { MdKeyboard as icon } from 'react-icons/md'

export default{
    name: 'Project',
    title: 'Project',
    type: 'document',
    icon,
    fields: [
        {
            name: 'projectTitle',
            title: 'Project Title',
            type: 'string',
            description: 'What is the projects name?',
        },
        {
            name: 'siteUrl',
            title: 'Site URL',
            type: 'string',
            description: 'URL to live site',
        },
        {
            name: 'repoUrl',
            title: 'Repo URL',
            type: 'string',
            description: 'URL to repository',
        },
        {
            name: 'organisation',
            title: 'Organisation',
            type: 'reference',
            to: [{type:'organisation'}],
            description: 'What is the associated Organisation?',
        },
        {
            title: 'Last worked on',
            name: 'lastWorkedOn',
            type: 'date',
            options: {
              dateFormat: 'YYYY-MM',
              calendarTodayLabel: 'Today',
            },
            description: 'When was this last worked on? (Best estimation)',
        },
        {
            name: 'slug',
            title: 'slug',
            type: 'slug',
            description: 'Slug to navigate to this page',
            options: {
                source: 'projectTitle',
                maxLength: 100,
            },
        },
    ],
    preview: {
        select: {
            projectTitle: 'projectTitle',
        },
        prepare: fields => ({
            title: `${fields.projectTitle}`
        })
    }
}
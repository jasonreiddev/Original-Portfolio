import { MdWork as icon } from 'react-icons/md'
import SalaryInput from '../components/SalaryInput'

export default{
    name: 'position',
    title: 'Position',
    type: 'document',
    icon,
    fields: [
        {
            name: 'currentJob',
            title: 'Current Job',
            type: 'boolean',
            description: 'Are you currently employed by this organisation?',
        },
        {
            name: 'jobTitle',
            title: 'Job Title',
            type: 'string',
            description: 'What is the Job Title?',
        },
        {
            name: 'organisation',
            title: 'Organisation',
            type: 'reference',
            to: [{type:'organisation'}],
            description: 'What is the Organisation Name?',
        },
        {
            name: 'slug',
            title: 'slug',
            type: 'slug',
            description: 'Slug to navigate to this page',
            options: {
                source: 'jobTitle',
                maxLength: 100,
            },
        },
        {
            title: 'Salary',
            name: 'salary',
            type: 'number',
            description: 'Salary (max during time employed)',
            inputComponent: SalaryInput,
        },
        {
            title: 'Start Date',
            name: 'startDate',
            type: 'date',
            options: {
              dateFormat: 'YYYY-MM',
              calendarTodayLabel: 'Today',
            }
        },
        {
            title: 'End Date',
            name: 'endDate',
            type: 'date',
            options: {
              dateFormat: 'YYYY-MM',
              calendarTodayLabel: 'Today',
            }
        },
    ],
    preview: {
        select: {
            jobTitle: 'jobTitle',
            currentJob: 'currentJob',
            organisation: 'organisation.organisation',
        },
        prepare: fields => ({
            title: `${fields.currentJob ? '⭐':''} ${fields.jobTitle} - ${fields.organisation}`
        })
    }
}